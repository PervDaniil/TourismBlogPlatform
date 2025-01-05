import React from "react";


export default function Header() {
    return (
        <header className="sticky top-0 w-full py-5 flex items-center justify-evenly bg-white bg-opacity-90 z-50">
            <h5 className="font-bold text-2xl text-black" style={{ fontFamily: 'Nexa' }}>Kg Tourism</h5>
            <nav className="flex flex-nowrap gap-10 text-gray-500 overflow-y-hidden text-nowrap">
                <a href="/">Главная</a>
                <a href="">О Кыргызстане</a>
                <a href="/blog">Галерея</a>
                <a href="">Культура</a>
                <a href="">Природа</a>
                <a href="">Контакты</a>
            </nav>
            <button className="bg-black rounded-full p-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button>
        </header>
    )
}