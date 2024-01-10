"use client";
import { useState } from "react";
import axios from "axios";
import TeamCard from "../components/teamCard";
import { Toaster, toast } from "react-hot-toast";
import { RingLoader } from "react-spinners";

const EventTeamsPage = () => {
    const [eventName, setEventName] = useState("");
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleEventSubmit = async (e) => {
        e.preventDefault();
        // console.log(e.target)
        try {
            setLoading(true);
            const response = await axios.post(
                "http://localhost:3000/api/society-events/registered-users",
                { eventName },
                {
                    validateStatus: (status) => status >= 200 && status <= 500,
                }
            );
            // console.log(response)
            setTeams(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching teams:", error);
            toast.error(error.response.data.error);
        }
    };

    async function downloadFile() {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/society-events/download",
                {
                    name: eventName,
                },
                {
                    validateStatus: (status) => status >= 200 && status <= 500,
                }
            );

            if (response.data?.error) {
                toast.error(response.data.error);
                return;
            }
            const bufferData = new Uint8Array(response.data.buffer.data);

            const blob = new Blob([bufferData], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });

            const url = window.URL.createObjectURL(blob);

            // Create a link element to trigger the download
            const link = document.createElement("a");
            link.href = url;
            link.download = "teams.xlsx"; // Specify the desired file name
            document.body.appendChild(link);

            // Trigger a click on the link to start the download
            link.click();

            // Remove the link from the DOM
            document.body.removeChild(link);
            toast.success(response.data.message);
        } catch (error) {
            console.error("Error downloading file:", error);
            toast.error("some error occured!");
        }
    }

    return (
        <div className="p-8 bg-slate-500">
            <form
                onSubmit={handleEventSubmit}
                className="mb-4 flex flex-col mt-[7rem]"
            >
                <div className="items-center justify-center">
                    <input
                        type="text"
                        placeholder="Enter Event Name"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        className="border rounded-md p-2 mr-2"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                    >
                        Get Teams
                    </button>
                </div>
            </form>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                onClick={() => downloadFile()}
            >
                Download Teams
            </button>
            <div className="min-h-screen">
                <Toaster position="top-center" reverseOrder={false} />
                {loading ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <RingLoader
                            color={"#FFFFFF"}
                            size={150}
                            loading={loading}
                        />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {teams.length > 0 &&
                            teams?.map((team) => (
                                <TeamCard
                                    key={team._id}
                                    team={team}
                                    className="bg-white rounded-lg shadow-md p-4"
                                />
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventTeamsPage;
