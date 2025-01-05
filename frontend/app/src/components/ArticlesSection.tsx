import React from "react";


export default function ArticlesSection() {
    return (
        <div className="h-screen w-full bg-gray-200 border-t-2">
            <div className="p-20">
                <h4 className="text-3xl pb-3 text-green-500 font-semibold">Популярные статьи</h4>
                <div className="mt-20 flex items-center justify-center space-x-10">
                    <div className="h-72 w-[700px] bg-gray-900 rounded-lg"></div>
                    <div className="h-72 w-96 bg-gray-900 rounded-lg"></div>
                    <div className="h-72 w-96 bg-gray-900 rounded-lg"></div>
                    <div className="h-72 w-96 bg-gray-900 rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}