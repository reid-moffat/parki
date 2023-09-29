import { HttpsError } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import * as functions from 'firebase-functions';
import { auth, getCollection, getDoc } from "../helpers/helpers";

/**
 * When a user signs up, create a default document for them in firestore and send them a verification email
 */
const onUserSignup = functions.auth.user().onCreate(async (user) => {
    if (user.email == null) {
        throw new HttpsError(
            'invalid-argument',
            `User email is null: ${JSON.stringify(user, null, 4)}`
        );
    }

    // Create a default db document for the user
    const defaultDoc = {
        email: user.email,
    };
    await getDoc(`/users/${user.uid}/`)
        .set(defaultDoc)
        .then(() => logger.log(`Default db data successfully created for user: ${user.uid}`))
        .catch((err) => { throw new HttpsError('internal', `Error creating default db data for ${user.uid}: ${err}`); });

    // Adds a verification email to the db (will be sent by the 'Trigger Email' extension)
    const verifyLink = await auth
        .generateEmailVerificationLink(user.email)
        .then((link) => link)
        .catch((err) => { throw new HttpsError('internal', `Error generating verification link: ${err}`); });

    const email = {
        to: user.email,
        message: {
            subject: 'Verify your email for qtma-2023-2024',
            html: `<p style="font-size: 16px;">Thanks for signing up!</p>
                       <p style="font-size: 16px;">Verify your account here: ${verifyLink}</p>
                       <p style="font-size: 12px;">If you didn't sign up, please disregard this email</p>
                       <p style="font-size: 12px;">Best Regards,</p>
                       <p style="font-size: 12px;">-The qtma-2023-2024 Team</p>`,
        }
    };

    return getCollection('/emails/')
        .add(email)
        .then((doc) => logger.log(`Verification email ${doc.id} created for ${user.email}`))
        .catch((err) => { throw new HttpsError('internal', `Error sending verification email to ${user.email}: ${err}`); });
});

/**
 * Block sign-in attempts from unverified users
 */
const beforeSignIn = functions.auth.user().beforeSignIn((user) => {
    if (!user.emailVerified) {
        throw new functions.auth.HttpsError(
            'permission-denied',
            `The email "${user.email}" has not been verified. Please check your email`
        );
    }
});

export { onUserSignup, beforeSignIn };
