import { HttpsError, onCall } from "firebase-functions/v2/https";
import { auth } from "../helpers/setup";
import { logger } from "firebase-functions";
import { getCollection } from "../helpers/helperFunctions";

/**
 * Users must create their accounts through our API (more control & security), calling it from the client is disabled
 */
const createAccount = onCall((request) => {
    // Create user (will throw an error if the email is already in use)
    return auth
        .createUser({
            email: request.data.email,
            emailVerified: false,
            password: request.data.password,
            disabled: false,
        })
        .then((user) => {
            logger.log(`Successfully created new user ${user.uid} (${request.data.email})`);
            return `Successfully created new user ${request.data.email}`;
        })
        .catch((error) => {
            if (error.code === 'auth/invalid-email') {
                logger.warn(`Email ${request.data.email} is invalid`);
                throw new HttpsError('invalid-argument', `Email '${request.data.email}' is invalid`);
            }
            if (error.code === 'auth/invalid-password') {
                logger.warn(`Password ${request.data.password} is invalid`);
                throw new HttpsError('invalid-argument', `Password is invalid. It must be a string with at least six characters.`);
            }
            if (error.code === 'auth/email-already-exists') {
                logger.warn(`Email ${request.data.email} in use`);
                throw new HttpsError('already-exists', `Email ${request.data.email} is already in use`);
            }

            logger.error(`Error creating new user (not including email in use): ${error.message} (${error.code})`);
            throw new HttpsError('internal', `Error creating account - please try again later`);
        });
});

/**
 * Sends an email to the requesting user with a link to reset their password
 */
const resetPassword = onCall(async (request) => {

    const emailAddress: string = request.data.email;
    const link: string = await auth.generatePasswordResetLink(emailAddress);

    const email = {
        to: emailAddress,
        message: {
            subject: 'Reset your password for qtma-2023-2024',
            html: `<p style="font-size: 16px;">A password reset request was made for your account</p>
                   <p style="font-size: 16px;">Reset your password here: ${link}</p>
                   <p style="font-size: 12px;">If you didn't request this, you can safely disregard this email</p>
                   <p style="font-size: 12px;">Best Regards,</p>
                   <p style="font-size: 12px;">-The qtma-2023-2024 Team</p>`,
        }
    };

    return getCollection('/emails/')
        .add(email)
        .then(() => {
            logger.log(`Password reset email created for ${emailAddress}`);
            return `Password reset email created for ${emailAddress}`;
        })
        .catch((err) => {
            logger.log(`Error creating password reset email for ${emailAddress}`);
            return `Error creating password reset email for ${emailAddress}`;
        });
});

export { createAccount, resetPassword };
