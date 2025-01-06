import React from "react";

export default function Footer() {
    return (
        <footer className="flex-col w-full py-20 px-10 bg-black text-white">
            <div className="flex flex-col lg:flex-row flex-wrap items-center justify-evenly gap-y-10">
                <div className="flex flex-col flex-wrap text-gray-400 text-xs lg:text-base">
                    <p className="text-white">Навигация</p>
                    <span><a>О нас</a></span>
                    <span><a>Статьи</a></span>
                    <span><a>Главная</a></span>
                    <span><a>Галерея</a></span>
                    <span><a>Контакты</a></span>
                </div>
                <div className="flex flex-col flex-wrap text-gray-400 text-xs lg:text-base">
                    <p className="text-white">Прочее</p>
                    <span><a>Права пользования</a></span>
                    <span><a>Политика конфиденциальности</a></span>
                </div>
                <div className="flex flex-col flex-wrap text-gray-400 text-xs lg:text-base">
                    <p className="text-white">Контакты</p>
                    <span><a>Номер: +996 700 123 369</a></span>
                    <span><a>Email: kg.blogtourism@email.com</a></span>
                </div>
            </div>
            <div className="text-center text-gray-400 pt-20 text-xs lg:text-base">
                <span>&copy; 2025 Kyrgyzstan Blog. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
