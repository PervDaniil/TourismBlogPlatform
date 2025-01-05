import React from "react";


export default function AboutSection() {
    return (
        <section className="h-screen w-full bg-gray-200">
            <div className="p-20 text-balance">
                <div className="flex flex-wrap justify-evenly">
                    <div>
                        <h4 className="text-3xl pb-3 text-green-500 font-semibold">Цель проекта</h4>
                        <div className="w-[400px] border-l-2 border-green-500 pl-5 ml-1">
                            <span className="text-base">
                                Проект был создан с целью показать разнообразие, красоту и многогранность культуры Кыргызстана. Наш проект — это платформа для тех, кто хочет узнать больше о Кыргызстане, поделиться своими впечатлениями или даже задуматься о путешествии в эту страну.
                            </span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl pb-3 text-green-500 font-semibold">Цель проекта</h4>
                        <div className="w-[400px] border-l-2 border-green-500 pl-5 ml-1">
                            <span className="text-base">
                                Проект был создан с целью показать разнообразие, красоту и многогранность культуры Кыргызстана. Наш проект — это платформа для тех, кто хочет узнать больше о Кыргызстане, поделиться своими впечатлениями или даже задуматься о путешествии в эту страну.
                            </span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl pb-3 text-green-500 font-semibold">Цель проекта</h4>
                        <div className="w-[400px] border-l-2 border-green-500 pl-5 ml-1">
                            <span className="text-base">
                                Проект был создан с целью показать разнообразие, красоту и многогранность культуры Кыргызстана. Наш проект — это платформа для тех, кто хочет узнать больше о Кыргызстане, поделиться своими впечатлениями или даже задуматься о путешествии в эту страну.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-evenly mt-14 relative">
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
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
