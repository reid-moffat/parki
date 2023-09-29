import { CallableRequest, HttpsError } from "firebase-functions/v2/https";

// Check if the requesting user is authenticated
const verifyIsAuthenticated = (request: CallableRequest) => {
    if (!request.auth || !request.auth.uid) {
        throw new HttpsError(
            'unauthenticated',
            `You must be logged in to call the API`
        );
    }
};

export { verifyIsAuthenticated } ;
