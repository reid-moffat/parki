/**
 * Dummy data to populate the map with parking spots
 */
interface ParkingSpace {
    latitude: number,
    longitude: number,
    address: string,
    price: number,
    description: string,
    distance: number,
    period: string[],
    amenities: string[],
    rating: number, // From 1 to 5 stars (1 decimal place)
}

const Amenities = [
    "Accessible",
    "Self-Park",
    "EV Charging",
    "Covered",
    "On-Site Staff",
    "Shovelling Included",
];

// Coordinates ([lat, long]) of real driveways around queens that can be used to test
const locations = [
    [44.235401, -76.501610, "137 Nelson St", "110", "Backyard area with an open spot available", 1500],
    [44.2374356, -76.4994443, "538 Frontenac St", "110", "Large, secluded backyard area with an easy accessible path in", 1500],
    [44.2375353, -76.4979271, "400 Alfred St", "110", "Backyard lot accessible from the south", 1500],
    [44.2357522, -76.4954009, "215 Colborne St", "120", "Backyard area accessible from the side", 1200],
    [44.2382535, -76.4907978, "14 Plum St", "110", "Backyard lot faccessible from the side", 1800],
    [44.2342821, -76.5000655, "67 Mack Street", "110", "A backyard, side-accessible lot", 1300],
];

const generateData = (numSpots: number) => {

    if (numSpots < 0 || numSpots > 30) {
        throw new Error("Must specify between 0 and 30 spots (both inclusive)");
    }

    const data: ParkingSpace[] = [];
    const periods: string[] = ["Hourly", "Weekly", "Monthly"];

    for (let i = 0; i < numSpots; ++i) {

        // Each spot needs at least 1 period
        const defaultPeriod = periods[Math.floor(Math.random() * periods.length)];
        const spotPeriods = periods.filter((period) => period !== defaultPeriod && Math.random() < 0.2);
        spotPeriods.push(defaultPeriod);

        const dummySpot: ParkingSpace = {
            // @ts-ignore
            latitude: locations[i][0],
            // @ts-ignore
            longitude: locations[i][1],
            // @ts-ignore
            address: locations[i][2],
            // @ts-ignore
            price: locations[i][3],
            // @ts-ignore
            description: locations[i][4],
            period: ["Monthly"],
            amenities: Amenities.filter((item) => Math.random() < 0.3),
            // @ts-ignore
            distance: locations[i][5],
            // @ts-ignore
            rating: Math.cbrt(Math.random() * 64) + 1, // 1-5, biased towards higher ratings
        };
        dummySpot.amenities.length = 3; // Max 3 amenities (FE is buggy with more)

        data.push(dummySpot);
    }

    return data;
}

const dummyData: ParkingSpace[] = generateData(6);

export default dummyData;
