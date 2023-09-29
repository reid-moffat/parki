import { HttpsError, onCall } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import * as functions from 'firebase-functions';
import { auth, getCollection, getDoc } from "./helpers";

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
            .then(() => `Successfully created new user ${request.data.email}`)
            .catch((error) => {
                if (error.code === 'auth/email-already-exists') {
                    throw new HttpsError('already-exists', `Email ${request.data.email} in use`);
                }

                logger.log(`Error creating new user (not including email in use): ${error.message} (${error.code})`);
                throw new HttpsError('internal', `Error creating account - please try again later`);
            });
    }
);

/**
 * When a user signs up, create a default document for them in firestore
 * and sends them a verification email
 */
const onUserSignup = functions.auth.user().onCreate(async (user) => {
    if (user.email == null) {
        throw new HttpsError(
            'invalid-argument',
            `User email is null: ${JSON.stringify(user, null, 4)}`
        );
    }

    const promises = [];

    // Create a default db document for the user
    const defaultDoc = {
        email: user.email,
    };
    promises.push(
        getDoc(`/users/${user.uid}/`)
            .set(defaultDoc)
            .then(() => logger.log(`Default db data successfully created for user: ${user.uid}`))
            .catch((err) => logger.log(`Error creating default db data for ${user.uid}: ${err}`))
    );

    // Adds a verification email to the db (will be sent by the 'Trigger Email' extension)
    const verifyLink = await auth
        .generateEmailVerificationLink(user.email)
        .then((link) => link)
        .catch((err) => `Error generating verification link: ${err}`);
    promises.push(
        getCollection('/emails/')
            .add({
                to: user.email,
                message: {
                    subject: 'Verify your email for qtma-2023-2024',
                    html: `<p style="font-size: 16px;">Thanks for signing up!</p>
                           <p style="font-size: 16px;">Verify your account here: ${verifyLink}</p>
                           <p style="font-size: 12px;">If you didn't sign up, please disregard this email</p>
                           <p style="font-size: 12px;">Best Regards,</p>
                           <p style="font-size: 12px;">-The qtma-2023-2024 Team</p>`,
                },
            })
            .then(() => logger.log(`Verification email successfully sent to: ${user.email}`))
            .catch((err) => logger.log(`Error sending verification email to ${user.email}: ${err}`))
    );

    return Promise.all(promises)
        .catch((err) => logger.log(`Error creating user: ${err.message} (${err.code})`));
});

export { createAccount, onUserSignup };
