import * as admin from 'firebase-admin';
import { HttpsError } from "firebase-functions/v2/https";
import { CallableContext } from "firebase-functions/lib/common/providers/https";

// Get required services
admin.initializeApp();
const db = admin.firestore();
const auth = admin.auth();

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

// Check if the requesting user is authenticated
const verifyIsAuthenticated = (request: CallableContext) => {
    if (!request.auth || !request.auth.uid) {
        throw new HttpsError(
            'unauthenticated',
            `You must be logged in to call the API`
        );
    }
};

export { db, auth, getCollection, getDoc, verifyIsAuthenticated };
