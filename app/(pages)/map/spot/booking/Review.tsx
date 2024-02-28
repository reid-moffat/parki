import { MdOutlineArrowBackIos } from "react-icons/md";
import { useAsync } from "react-async-hook";
import { callApi } from "@/config/firebase";
import { useSelector } from "react-redux";
import { getSpot } from "@/app/GlobalRedux/Features/currentSpot";

// @ts-ignore
const Review = ({ setPage, dates }) => {

    const defaultVehicle = useAsync(callApi('getDefaultVehicle'), []);

    const currentSpot = useSelector(getSpot);

    const renderDetails = () => {
        if (!defaultVehicle.result) {
            return (
                <div className="rounded-xl border-2 border-black mt-4 ml-10 mr-10 pt-4 pb-4 pl-4 pr-4 font-outfit">
                    Loading...
                </div>
            );
        }

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const getDatePeriod = () => {
            const startMonth = monthNames[dates[0].getMonth()];
            const endMonth = monthNames[dates[1].getMonth()];

            return startMonth + " " + dates[0].getDate() + " - " + (endMonth !== startMonth ? endMonth + " " : "") + dates[1].getDate();
        }

        const getPrice = (): [number, string] => {
            const numDays: number = Math.round((dates[1].getTime() - dates[0].getTime()) / 1000 / 3600 / 24 + 1);
            const numPeriods: number = currentSpot.period === "day"
                ? numDays
                : currentSpot.period === "week"
                    ? numDays / 7
                    : numDays / 30;

            return [numPeriods, (Math.round(100 * currentSpot.price * numPeriods) / 100).toFixed(2)];
        }

        return (
            <div className="mx-12">
                <div className="rounded-xl border-2 border-black mt-2 pt-4 pb-4 pl-4 pr-4 font-outfit">
                    <div className="flex justify-between">
                        <div>
                            Address
                        </div>
                        <div className="font-bold">
                            {currentSpot.address}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            Vehicle Make
                        </div>
                        <div className="font-bold">
                            { /* @ts-ignore */ }
                            {defaultVehicle.result.data.make + " " + defaultVehicle.result.data.model}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            License
                        </div>
                        <div className="font-bold">
                            { /* @ts-ignore */ }
                            {defaultVehicle.result.data.license}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            Date
                        </div>
                        <div className="font-bold">
                            {getDatePeriod()}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            Duration
                        </div>
                        <div className="font-bold">
                            {Math.round((dates[1].getTime() - dates[0].getTime()) / 1000 / 3600 / 24 + 1)} days
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border-2 border-black mt-4 pt-4 pb-4 pl-4 pr-4 font-outfit">
                    <div className="flex justify-between">
                        <div>
                            Price/period ({currentSpot.period})
                        </div>
                        <div className="font-bold">
                            ${currentSpot.price.toFixed(2)}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            Number of {currentSpot.period}s
                        </div>
                        <div className="font-bold">
                            {getPrice()[0].toFixed(2)}
                        </div>
                    </div>
                    <div className="bg-black h-[0.5px] mt-2 mb-2"/>
                    <div className="flex justify-between">
                        <div>
                            Total
                        </div>
                        <div className="font-bold">
                            ${getPrice()[1]}
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    Once confirmed, you must send <text className="font-bold">${getPrice()[1]}</text> to:
                </div>
                <div className="rounded-2xl bg-[#4472CA33] p-3 pl-4">
                    18rem8@queensu.ca{/*<text className="italic">(payment WIP)</text>*/}
                </div>
                <div>
                    Once payment is received, your spot will be <text className="text-green-500">confirmed</text>.
                </div>

                <div
                    className="w-full rounded-2xl bg-[#FF4251] p-2 text-center text-white text-lg mt-6"
                    onClick={() => setPage("confirmation")}
                >
                    CONFIRM BOOKING
                </div>
            </div>
        );
    }

    return (
        <>
            <div className='flex text-3xl font-bold p-8'>
                <MdOutlineArrowBackIos className='w-10 h-10 mr-2' onClick={() => setPage("yourBooking")}/>
                <div className="pl-2">
                    Review Summary
                </div>
            </div>

            {renderDetails()}
        </>
    );
}

export default Review;
