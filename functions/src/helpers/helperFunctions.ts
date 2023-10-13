import { HttpsError } from "firebase-functions/v2/https";
import { db } from "./setup";
import { logger } from "firebase-functions";

// Helpers for getting a doc/collection
const getCollection = (path: string) => {
    if (!/^\/[a-zA-Z0-9]+\/(([a-zA-Z0-9]+\/){2})*$/.test(path)) {
        throw new HttpsError('internal', `Invalid collection path (${path}), see getCollection() regex`);
    }

    return db.collection(path);
}
const getDoc = (path: string) => {
    if (!/^\/([a-zA-Z0-9]+\/){2}(([a-zA-Z0-9]+\/){2})*$/.test(path)) {
        throw new HttpsError('internal', `Invalid document path (${path}), see getDoc() regex`);
    }

    return db.doc(path);
}

// Adds email doc to db (which gets sent by an extension)
const sendEmail = (emailAddress: string, subject: string, html: string, context: string) => {
    const email = {
        to: emailAddress,
        message: {
            subject: subject,
            html: html,
        }
    };

    return getCollection('/emails/')
        .add(email)
        .then((doc) => {
            logger.log(`Email ${doc.id} created for ${emailAddress} (${context})`);
        })
        .catch((err) => {
            throw new HttpsError('internal', `Error creating ${context} email for ${emailAddress}: ${err}`);
        });
}

export { getDoc, getCollection, sendEmail };
