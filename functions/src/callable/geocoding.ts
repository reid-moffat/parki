import { HttpsError, onCall } from "firebase-functions/v2/https";
import { fromAddress, OutputFormat, setDefaults } from "react-geocode";
import { logger } from "firebase-functions";
import { Client } from "@googlemaps/google-maps-services-js";

/**
 * Returns the latitude and longitude of a given address
 */
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

/**
 * Returns a list of addresses based on the search query
 */
const autocompleteAddress = onCall({ secrets: ["MAPS_API_KEY"] },(request) => {

    if (!request.data.search) {
        throw new HttpsError("invalid-argument", "Search query is required");
    }
    if (!process.env.MAPS_API_KEY) {
        logger.error("MAPS_API_KEY not found in environment variables");
        throw new HttpsError("internal", "Error getting address, please try again later");
    }

    logger.info("Input & API key validation passed, setting up geocoding values...");

    return new Client({})
        .placeAutocomplete({ params: { input: request.data.search, key: process.env.MAPS_API_KEY, location: [44.22802285684974, -76.49571953014758], radius: 1_000_000 } })
        .then((response) => response.data.predictions.map((prediction) => {
            return { street: prediction.structured_formatting.main_text, city: prediction.structured_formatting.secondary_text };
        }))
        .catch((err) => {
            logger.error(`Error getting autocomplete address: ${err}`);
            throw new HttpsError("internal", "Failed to get coordinates from address");
        });
});

export { getLatLngFromAddress, autocompleteAddress };
