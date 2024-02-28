import { MdOutlineArrowBackIos } from "react-icons/md";

// @ts-ignore
const AddVehicle = ({ setPage }) => {
    return (
        <>
            <div className='flex text-3xl font-bold p-8'>
                <MdOutlineArrowBackIos className='w-10 h-10 mr-2' onClick={() => setPage("vehicleSelect")}/>
                <div className="pl-2">
                    Add New Vehicle
                </div>
            </div>

            <div className="font-bold font-outfit ml-8 mr-8 mt-4">
                <div>
                    License Plate
                </div>
                <input type="text" className="bg-[#dae2f0] rounded-2xl w-full h-12 mb-4 p-2"/>

                <div>
                    Make & Model
                </div>
                <input type="text" className="bg-[#dae2f0] rounded-2xl w-full h-12 mb-4 p-2"/>

                <div>
                    Color
                </div>
                <input type="text" placeholder="Optional"
                       className="bg-[#dae2f0] rounded-2xl w-full h-12 mb-4 p-2"/>

                <div className='flex justify-center mt-8'>
                    <div className={'rounded-2xl bg-[#FF4251] p-2 text-white text-xl ps-20 pe-20 mt-40'} onClick={() => setPage("yourBooking")}>
                        ADD
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddVehicle;
