import { HttpsError, onCall } from "firebase-functions/v2/https";
import { getCollection, getDoc } from "../helpers/helperFunctions";
import { logger } from "firebase-functions";

/**
 * Gets all parking spots from the db
 */
const getSpots = onCall((request) => {
    return getCollection('/spots/')
        .get()
        .then((docs) => {
            return docs.docs.map((doc) => {
                const data = doc.data();
                // Distance is to Queen's (Stauff)
                return {
                    id: doc.id,
                    distance: distanceBetweenPoints(data.latitude, data.longitude, 44.22792130161299, -76.49555772305563),
                    ...doc.data()
                };
            });
        })
        .catch((error) => {
            logger.error(`Error getting parking spots: ${error.message}`);
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
            logger.error(`Error getting parking spot: ${error.message}`);
            throw new HttpsError('internal', 'Error getting parking spot');
        });
});

/**
 * Distance between two lat/long coordinates
 */
const distanceBetweenPoints = (lat1: number, lon1: number, lat2: number, lon2: number) => {

    const deg2rad = (deg: number) => deg * (Math.PI/180);

    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2-lat1), dLon = deg2rad(lon2-lon1);
    const a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c * 1000;
}

export { getSpots, getSpot };
