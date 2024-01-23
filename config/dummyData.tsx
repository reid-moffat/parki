import * as spotData from "./spots.json";

/**
 * Dummy data to populate the map with parking spots
 */
interface ParkingSpace {
    address: string,
    latitude: number,
    longitude: number,
    description: string,
    price: number,
    distance: number,
    period: string,
    amenities: string[],
    rating: number,
}

const Amenities = [
    "Accessible",
    "Self-Park",
    "EV Charging",
    "Covered",
    "On-Site Staff",
    "Shovelling Included",
];

// Generate parking spot from dummy data with random amenities & rating
const dummyData: ParkingSpace[] = spotData.map((spot) => ({
        ...spot,
        amenities: Amenities.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 4)),
        rating: Math.floor((Math.pow(Math.random() * 256, 1/4) + 1) * 10) / 10,
}));

export default dummyData;
