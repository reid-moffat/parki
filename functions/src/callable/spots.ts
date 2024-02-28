import { HttpsError, onCall } from "firebase-functions/v2/https";
import { getCollection, getDoc } from "../helpers/helperFunctions";

/**
 * Gets all parking spots from the db
 */
const getSpots = onCall((request) => {
    return getCollection('/spots/')
        .get()
        .then((docs) => docs.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        .catch((error) => {
            console.error(`Error getting parking spots: ${error.message}`);
            throw new HttpsError('internal', 'Error getting parking spots');
        });
});

/**
 * Gets a specific parking spot from the db
 */
const getSpot = onCall((request) => {

    if (!request.data.spotId) {
        throw new HttpsError('invalid-argument', 'No parking spot id provided');
    }

    return getDoc(`/spots/${request.data.spotId}/`)
        .get()
        .then((doc) => ({ id: doc.id, ...doc.data() }))
        .catch((error) => {
            console.error(`Error getting parking spot: ${error.message}`);
            throw new HttpsError('internal', 'Error getting parking spot');
        });
});

export { getSpots, getSpot };
