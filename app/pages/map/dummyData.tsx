/**
 * Dummy data to populate the map with parking spots
 */
interface data {
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

const dummyData : data[] = [
    // TODO: Populate this. Note you can hard-code spaces, or randomly generate data
    // (e.g. generate a random rating between 1 and 5, random price, random lat/long, etc)
];

export default dummyData;
