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
    [44.22274766385996, -76.50116133743451, "10 Collingwood St"],
    [44.22275659927971, -76.50241620686897, "28 Beverly St"],
    [44.223330675847755, -76.50218354272798, "41 Beverly St"],
    [44.22321458180986, -76.5025021775583, "42 Beverly St"],
    [44.2232112406803, -76.50121107796791, "30 Collingwood St"],
    [44.223968847817325, -76.50220125366377, "57 Beverly St"],
    [44.22478727643104, -76.50137035795163, "94 Collingwood St"],
    [44.2263830950432, -76.50146195952341, "149 Collingwood St"],
    [44.227901127969915, -76.49992218339722, "198 Albert St"],
    [44.22871745208583, -76.49849591268166, "220 Frontenac St"],
    [44.22807042628261, -76.50161327190291, "213 Collingwood St"],
    [44.2266937959767, -76.50349280524348, "3 Vandalay Crescent"],
    [44.22452608523915, -76.50375646964011, "22 Kensington Ave"],
    [44.22779870316486, -76.50269218473723, "206 Victoria St"],
    [44.230034629211126, -76.50015714604716, "270 Albert St"],
    [44.23020981703333, -76.4971736223635, "172 Albert St"],
    [44.231391012275424, -76.49724519755482, "218 Alfred St"],
    [44.230268815824466, -76.49224846604957, "252 William St"],
    [44.230010824040406, -76.49235315947969, "247 Earl St"],
    [44.229980494740865, -76.49191861144055, "227 Earl St"],
    [44.229850834103885, -76.49145953498255, "211 Earl St"],
    [44.228160006805574, -76.49097005941131, "178 Barrie St"],
    [44.227708282992275, -76.48815975800194, "3 Sydenham St"],
    [44.22829449477145, -76.48663021758253, "135 Bagot St"],
    [44.22299369303334, -76.49606417592325, "127 King St W"],
    [44.22320225410056, -76.48859150997129, "9 Emily St"],
    [44.225408784826506, -76.48640332670568, "53 West St"],
    [44.22893973060404, -76.48652876541506, "164 Bagot St"],
    [44.23018701476413, -76.4889298114088, "183 William St"],
    [44.232866769395805, -76.49665114728879, "433 Brock St"],
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
            price: Math.random() * 30 + 50,
            period: Math.random() < 0.5 ? RentalPeriod.DAILY : RentalPeriod.MONTHLY,
            rating: Math.cbrt(Math.random() * 64) + 1, // 1-5, biased towards higher ratings
        };

        data.push(dummySpot);
    }

    return data;
}

const dummyData : ParkingSpace[] = generateData(30);

export default dummyData;
