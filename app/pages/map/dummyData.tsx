/**
 * Dummy data to populate the map with parking spots
 */
interface ParkingSpace {
    latitude: number,
    longitude: number,
    address: string,
    price: number,
    period: RentalPeriod,
    rating: number, // From 1 to 5 stars (1 decimal place)
}

// The period in which you can rent the spot for
enum RentalPeriod {
    DAILY,
    MONTHLY,
}

// Coordinates ([lat, long]) of real driveways around queens that can be used to test
const locations = [
    [44.235401, -76.501610, "137 Nelson St"],
    [44.2374356, -76.4994443, "538 Frontenac St"],
    [44.2375353, -76.4979271, "400 Alfred St"],
    [44.2357522, -76.4954009, "215 Colborne St"],
    [44.2382535, -76.4907978, "14 Plum St"],
    [44.2342821, -76.5000655, "67 Mack Street"],
];

const generateData = (numSpots: number) => {

    if (numSpots < 0 || numSpots > 30) {
        throw new Error("Must specify between 0 and 30 spots (both inclusive)");
    }

    const data: ParkingSpace[] = [];

    for (let i = 0; i < numSpots; ++i) {
        const dummySpot: ParkingSpace = {
            // @ts-ignore
            latitude: locations[i][0],
            // @ts-ignore
            longitude: locations[i][1],
            // @ts-ignore
            address: locations[i][2],
            price: Math.round(Math.random() * 30 + 50),
            period: Math.random() < 0.5 ? RentalPeriod.DAILY : RentalPeriod.MONTHLY,
            rating: Math.cbrt(Math.random() * 64) + 1, // 1-5, biased towards higher ratings
        };

        data.push(dummySpot);
    }

    return data;
}

const dummyData: ParkingSpace[] = generateData(30);

export default dummyData;
