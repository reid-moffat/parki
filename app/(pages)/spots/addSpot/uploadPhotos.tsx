import { FaPlus } from "react-icons/fa";
import { useRef, useState } from "react";
import { MdChevronLeft } from "react-icons/md";

// @ts-ignore
const UploadPhotos = ({ setStep }) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

    return (
        <>
            <div className="pt-10">
                <MdChevronLeft size={42} onClick={() => setStep("confirmFeatures")}/>
            </div>
            <div className="border border-gray-400 p-4 rounded-xl">
                <div className="text-3xl font-bold">
                    Upload photos
                </div>

                <div className="mt-4">
                    Hold and drag to rearrange photos!
                </div>

                <div className="text-gray-600">
                    <u>Photo Tips:</u> Take the photo during the day with plenty of natural light! Make sure to include
                    any elements that will help drivers identify the specific parking spot.
                </div>

                <div className="border border-gray-400 p-4 rounded-xl mt-6" onClick={() => {
                    if (fileInputRef.current) {
                        fileInputRef.current.click();
                    }
                }}>
                    <div
                        className="flex justify-center items-center h-32 border-dashed border-4 border-gray-400 rounded-xl">
                        {selectedFiles ? (
                            Array.from(selectedFiles).map((file, index) => (
                                <div key={index} className="relative w-24 h-24 mr-4">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`Uploaded ${index + 1}`}
                                        className="w-full h-full object-cover rounded-md border border-gray-400"
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="text-center">
                                <FaPlus className="text-5xl mb-1 ml-4"/>
                                Add Photo
                            </div>
                        )}
                    </div>
                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    style={{display: "none"}}
                    onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                            setSelectedFiles(e.target.files);
                        }
                    }}
                    multiple
                />

                <div
                    className="mt-6 bg-red-500 text-white text-center py-2 rounded-xl cursor-pointer"
                    onClick={() => setStep("additionalInfo")}
                >
                    Confirm Photos
                </div>
            </div>
        </>
    );
}

export default UploadPhotos;
