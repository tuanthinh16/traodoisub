'use client'
import React, { useState } from 'react'
import { GetInfo, GetJob } from '../api/apiRequest'

const Page = () => {
    const [jobData, setJobData] = useState<any>(null);
    const [profileInfo, setProfileInfo] = useState<any>(null);
    const [jobError, setJobError] = useState<string | null>(null);
    const [profileError, setProfileError] = useState<string | null>(null);

    const GetJOB = async () => {
        console.log("clicked")
        try {
            const rs = await GetJob("tiktok_follow");
            console.log(rs);
            setJobData(rs.data); // giả sử dữ liệu nằm trong rs.data
            setJobError(null); // Clear any previous error
        } catch (error) {
            console.error("Error fetching job data:", error);
            setJobError("Error fetching job data"); // Set error message
        }
    }

    const Getinfo = async () => {
        try {
            const rs = await GetInfo();
            console.log(rs);
            setProfileInfo(rs); // Update to set the actual data
            setProfileError(null); // Clear any previous error
        } catch (error) {
            console.error("Error fetching profile info:", error);
            setProfileError("Error fetching profile info"); // Set error message
        }
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Hello</h1>
            <div className="mb-4">
                <button
                    onClick={() => GetJOB()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                    Lay ds
                </button>
                <button
                    onClick={() => Getinfo()}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Profile Info
                </button>
            </div>
            {jobError && (
                <div className="bg-red-100 text-red-700 p-4 rounded shadow-md mb-4">
                    <h2 className="text-xl font-semibold mb-2">Job Error</h2>
                    <p>{jobError}</p>
                </div>
            )}
            {jobData && (
                <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
                    <h2 className="text-xl font-semibold mb-2">Job Data</h2>
                    <pre>{JSON.stringify(jobData, null, 2)}</pre>
                </div>
            )}
            {profileError && (
                <div className="bg-red-100 text-red-700 p-4 rounded shadow-md mb-4">
                    <h2 className="text-xl font-semibold mb-2">Profile Error</h2>
                    <p>{profileError}</p>
                </div>
            )}
            {profileInfo && (
                <div className="bg-gray-100 p-4 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Profile Info</h2>
                    <pre>{JSON.stringify(profileInfo, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}

export default Page;
