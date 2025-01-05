import React from "react";


export default function Header() {
    return (
        <header className="sticky top-0 w-full py-5 flex items-center justify-evenly bg-gray-200 bg-opacity-90 z-50">
            <h5 className="font-bold text-2xl text-green-500">Кыргызстан Туризм</h5>
            <nav className="flex gap-10 text-gray-500">
                <a href="">Главная</a>
                <a href="">О Кыргызстане</a>
                <a href="">Галерея</a>
                <a href="">Культура</a>
                <a href="">Природа</a>
                <a href="">Контакты</a>
            </nav>
            <button className="bg-green-500 rounded-md px-5 py-2 text-white">Поиск</button>
        </header>
    )
}