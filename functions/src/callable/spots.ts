import { HttpsError, onCall } from "firebase-functions/v2/https";
import { getCollection } from "../helpers/helperFunctions";

/**
 * Gets all parking spots from the db
 */
const getSpots = onCall((request) => {
    return getCollection('spots')
        .get()
        .then((docs) => docs.docs.map((doc) => doc.data()))
        .catch((error) => {
            console.error(`Error getting parking spots: ${error.message}`);
            throw new HttpsError('internal', 'Error getting parking spots');
        });
});

export { getSpots };
