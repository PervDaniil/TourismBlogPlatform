import React from "react";


export default function HeroSection() {
    return (
        <section className="h-screen w-full bg-black">
            <div className="relative w-full h-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("https://wallpapercat.com/w/full/c/a/a/627248-1920x1080-desktop-full-hd-kyrgyzstan-wallpaper-image.jpg")' }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="w-full text-center mb-10 z-10">
                    <h5 className="text-4xl scale-90 lg:scale-100 lg:text-6xl font-bold text-white pb-3">Откройте для себя Кыргызстан</h5>
                    <div className="flex">
                        <div className="m-auto w-[320px] lg:w-[720px]">
                            <span className="text-xs lg:text-base text-gray-400">«Если вы ищете уникальное место для приключений, впечатлений и незабываемых пейзажей, то Кыргызстан — именно то, что вам нужно. Наша страна, скрытая в самом сердце Центральной Азии, очарует вас горными вершинами, прозрачными озерами, древними традициями и теплым гостеприимством местных жителей»</span>
                        </div>
                    </div>
                    <div className="space-x-10">
                        <button className="bg-green-500 rounded-md py-3 px-6 my-10 text-white hover:bg-green-600">Подробнее</button>
                        <button className="bg-green-500 rounded-md py-3 px-6 my-10 text-white hover:bg-green-600">Начать</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
