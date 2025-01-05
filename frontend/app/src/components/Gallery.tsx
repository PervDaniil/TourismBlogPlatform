import React from "react";


export default function Gallery() {
    return (
        <div className="min-h-screen w-full">
            <div className="w-full h-full p-20">
                <div className="flex flex-wrap items-center justify-evenly mt-14 relative max-h-[420px] overflow-x-hidden">
                    <div className="h-96 w-72 bg-green-500 mt-5 rounded-md shadow-lg overflow-hidden">
                        <img src="https://img.championat.com/s/732x488/news/big/x/s/top-5-mest-v-kyrgyzstane_17093705481584921772.jpg" className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="h-96 w-72 bg-green-500 mt-5 rounded-md shadow-lg overflow-hidden">
                        <img src="https://globalsiasar.org/sites/default/files/styles/hd/public/photos/extra/burana-tower.jpg?itok=khm5DOWn" className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="h-96 w-72 bg-green-500 mt-5 rounded-md shadow-lg overflow-hidden">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipOUcaFv7SMrtA4mrq2-lAkLR-gf57XdA2GgFmXw=w675-h390-n-k-no" className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="h-96 w-72 bg-green-500 mt-5 rounded-md shadow-lg overflow-hidden">
                        <img src="https://triptokyrgyzstan.com/sites/default/files/styles/card_wide/public/images/2019-04/slide-1960x857-07.jpg.webp?itok=ftaEbZ1D" className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="h-96 w-72 bg-green-500 mt-5 rounded-md shadow-lg overflow-hidden">
                        <img src="https://pegassales.kz/userfiles/upload/country/kyrgyzstan/kyrgyzstan_1.jpg" className="h-full w-full object-cover object-center" />
                    </div>

                    <div className="absolute left-10 bg-black p-4 rounded-full bg-opacity-70 z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        </svg>
                    </div>

                    <div className="absolute right-10 bg-black p-4 rounded-full bg-opacity-70 z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
                            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                </div>

                <div className="w-full mt-20" style={{ display: 'grid', columnGap: '1em', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'}}>
                    {Array.from(new Array(18)).map((_, index) => (
                        <div key={index} className="h-[320px] w-[240px] bg-green-500 mt-5 rounded-md shadow-lg overflow-hidden">
                            <img src="https://exploretraveloasis.com/wp-content/uploads/2023/02/Kel-Suu-Lake-4.jpeg" className="h-full w-full object-cover object-center" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}