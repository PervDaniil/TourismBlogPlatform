import React from "react";
import { useFetchPosts } from '../hooks/fetchPostsHook.ts';


const images = [
    'https://globalsiasar.org/sites/default/files/styles/hd/public/photos/extra/burana-tower.jpg?itok=khm5DOWn',
    'https://img.championat.com/s/732x488/news/big/x/s/top-5-mest-v-kyrgyzstane_17093705481584921772.jpg',
    'https://lh5.googleusercontent.com/p/AF1QipOUcaFv7SMrtA4mrq2-lAkLR-gf57XdA2GgFmXw=w675-h390-n-k-no',
    'https://triptokyrgyzstan.com/sites/default/files/styles/card_wide/public/images/2019-04/slide-1960x857-07.jpg.webp?itok=ftaEbZ1D',
    'https://pegassales.kz/userfiles/upload/country/kyrgyzstan/kyrgyzstan_1.jpg',
]

export default function Gallery() {
    const { loading, error, data } = useFetchPosts();

    return (
        <div className="min-h-screen w-full">
            <div className="w-full h-full p-5 lg:p-20">
                <div className="flex flex-col lg:flex-row flex-nowrap items-center justify-evenly mt-14 relative">
                    {images.map((imageSrc, index) => (
                        <div key={index} className="h-80 w-64 lg:h-96 lg:w-72 bg-black mt-5 rounded-md shadow-lg overflow-hidden">
                            <img src={imageSrc} className="h-full w-full object-cover object-center" />
                        </div>
                    ))}
                    <button className="absolute left-10 bg-black p-4 rounded-full bg-opacity-70 hover:bg-opacity-85 hover:scale-90 transition ease-in z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        </svg>
                    </button>
                    <button className="absolute right-10 bg-black p-4 rounded-full bg-opacity-70 hover:bg-opacity-85 hover:scale-90 transition ease-in z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
                            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                </div>

                <div className="w-full grid grid-cols-2 gap-x-5 gap-y-3 lg:grid-cols-5 px-0 lg:px-10 mt-20 mb-10">
                    {(data && !error) &&
                        data.map(post => (
                            <div key={post.id} className="h-[100%] w-[100%] bg-black mt-5 rounded-md shadow-lg overflow-hidden">
                                <img src={post.image} className="h-full w-full object-cover object-center" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}