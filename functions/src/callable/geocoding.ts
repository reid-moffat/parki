import { HttpsError, onCall } from "firebase-functions/v2/https";
import { fromAddress, OutputFormat, setDefaults } from "react-geocode";
import { logger } from "firebase-functions";

const getLatLngFromAddress = onCall({ secrets: ["MAPS_API_KEY"] },(request) => {

    if (!request.data.address) {
        throw new HttpsError("invalid-argument", "Address is required");
    }
    if (!process.env.MAPS_API_KEY) {
        logger.error("MAPS_API_KEY not found in environment variables");
        throw new HttpsError("internal", "Error getting address, please try again later");
    }

    logger.info("Input & API key validation passed, setting up geocoding values...");

    setDefaults({
        key: process.env.MAPS_API_KEY,
        language: "en",
        region: "ca",
        outputFormat: OutputFormat.JSON,
    });

    logger.info("Defaults set, calling geocoding API...");

    return fromAddress(request.data.address)
        .then(({ results }) => results[0].geometry.location)
        .catch((err) => {
            logger.error(err);
            throw new HttpsError("internal", "Failed to get coordinates from address");
        });
});

export { getLatLngFromAddress };
