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

export { getVehicles };
