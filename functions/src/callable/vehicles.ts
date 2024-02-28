import { HttpsError, onCall } from "firebase-functions/v2/https";
import { getCollection, getDoc } from "../helpers/helperFunctions";
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

    // @ts-ignore
    const uid: string = request.auth.uid;

    if (!request.data.make || !request.data.model || !request.data.license) {
        throw new HttpsError("invalid-argument", "Make, model, and license are required");
    }
    const { make, model, license, color } = request.data;

    return getCollection("/vehicles/")
        .add({ make, model, license, color, uid: uid })
        .then(async (doc) => {
            const defaultDoc = {
                id: doc.id,
                make,
                model,
                license,
                color,
            };

            await getDoc(`/users/${uid}/`)
                .update({ defaultVehicle: defaultDoc })
                .catch((error) => {
                    logger.error(`Error setting default vehicle: ${error}`);
                    throw new HttpsError("internal", "Error setting default vehicle");
                });

            return { id: doc.id, ...request.data };
        })
        .catch((error) => {
            logger.error(`Error adding vehicle: ${error}`);
            throw new HttpsError("internal", "Error adding vehicle");
        });
});

const setDefaultVehicle = onCall((request) => {

        verifyIsAuthenticated(request);

        if (!request.data.id) {
            throw new HttpsError("invalid-argument", "Vehicle id is required");
        }

        // @ts-ignore
        const uid: string = request.auth.uid;

        return getDoc(`/users/${uid}/`)
            .get()
            .then(async (doc) => {
                const data = doc.data();
                if (!doc.exists || !data) {
                    throw new HttpsError("not-found", "User not found");
                }

                const vehicleData = await getDoc(`/vehicles/${request.data.id}/`)
                    .get()
                    .then((vehicle) => vehicle.data() as { make: string, model: string, license: string, color: string })
                    .catch((error) => {
                        logger.error(`Error getting vehicle data: ${error}`);
                        throw new HttpsError("internal", "Error getting vehicle data");
                    });

                const defaultDoc = {
                    id: request.data.id,
                    make: vehicleData.make,
                    model: vehicleData.model,
                    license: vehicleData.license,
                    color: vehicleData.color,
                };
                return doc.ref.update({ defaultVehicle: defaultDoc });
            })
            .catch((error) => {
                logger.error(`Error setting default vehicle: ${error}`);
                throw new HttpsError("internal", "Error setting default vehicle");
            });
});

const getDefaultVehicle = onCall((request) => {

        verifyIsAuthenticated(request);

        // @ts-ignore
        const uid: string = request.auth.uid;

        return getDoc(`/users/${uid}/`)
            .get()
            .then((doc) => {
                const data = doc.data();
                if (!doc.exists || !data) {
                    throw new HttpsError("not-found", "User not found");
                }

                if (!data.defaultVehicle) {
                    return null;
                }
                return data.defaultVehicle;
            })
            .catch((error) => {
                logger.error(`Error getting default vehicle: ${error}`);
                throw new HttpsError("internal", "Error getting default vehicle");
            });
});

export { getVehicles, addVehicle, setDefaultVehicle, getDefaultVehicle };
