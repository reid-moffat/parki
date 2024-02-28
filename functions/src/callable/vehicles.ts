import { HttpsError, onCall } from "firebase-functions/v2/https";
import { getCollection } from "../helpers/helperFunctions";
import { verifyIsAuthenticated } from "../helpers/verification";
import { logger } from "firebase-functions";

const getVehicles = onCall((request) => {

    verifyIsAuthenticated(request);

    return getCollection("/vehicles/")
        // @ts-ignore
        .where("uid", "==", request.auth.uid)
        .get()
        .then((docs) => docs.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        .catch((error) => {
            logger.error(`Error getting documents: ${error}`);
            throw new HttpsError("internal", "Error getting vehicles");
        });
});

const addVehicle = onCall((request) => {

    verifyIsAuthenticated(request);

    if (!request.data.make || !request.data.model || !request.data.license) {
        throw new HttpsError("invalid-argument", "Make, model, and license are required");
    }
    const { make, model, license } = request.data;

    return getCollection("/vehicles/")
        // @ts-ignore
        .add({ make, model, license, uid: request.auth.uid })
        .then((doc) => ({ id: doc.id, ...request.data }))
        .catch((error) => {
            logger.error(`Error adding vehicle: ${error}`);
            throw new HttpsError("internal", "Error adding vehicle");
        });
});

export { getVehicles, addVehicle };
