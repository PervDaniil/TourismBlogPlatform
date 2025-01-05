import React from 'react';


export default function HomePage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Purpose />
            <FeaturedArticles />
            <TravelTips />
            <Culture />
            <Nature />
            <Gallery />
            <Testimonials />
            <Newsletter />
            <Footer />
        </div>
    )
}


const Header = () => {
    return (
        <header className="sticky top-0 shadow-lg z-50 bg-white bg-opacity-80">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-5">
                <div className="text-2xl font-bold text-green-600">Кыргызстан Туризм</div>
                <nav>
                    <ul className="flex space-x-6 text-gray-700">
                        <li><a href="#home" className="hover:text-green-600">Главная</a></li>
                        <li><a href="#about" className="hover:text-green-600">О Кыргызстане</a></li>
                        <li><a href="#guides" className="hover:text-green-600">Путеводители</a></li>
                        <li><a href="#culture" className="hover:text-green-600">Культура</a></li>
                        <li><a href="#nature" className="hover:text-green-600">Природа</a></li>
                        <li><a href="#contact" className="hover:text-green-600">Контакты</a></li>
                    </ul>
                </nav>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md">Поиск</button>
            </div>
        </header>
    );
};



const HeroSection = () => {
    return (
        <section className="h-screen bg-cover bg-center relative object-cover object-center" style={{ backgroundImage: 'url("https://wallpapercat.com/w/full/c/a/a/627248-1920x1080-desktop-full-hd-kyrgyzstan-wallpaper-image.jpg")' }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
                <h1 className="text-5xl font-bold">Откройте для себя Кыргызстан</h1>
                <p className="mt-4 text-xl">Путешествуйте, исследуйте и наслаждайтесь уникальной культурой и природой</p>
                <div className="flex-row">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md mx-5">Подробнее</button>
                    <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md mx-5">Начать</button>
                </div>
            </div>
        </section>
    );
};


const Purpose = () => {
    return (
        <section id="purpose" className="py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-semibold">Наша цель</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Этот блог создан для того, чтобы познакомить вас с уникальной природой, культурой и традициями Кыргызстана. Мы стремимся вдохновить вас на путешествия и помочь вам открыть для себя эту удивительную страну.
            </p>
        </section>
    );
};



const FeaturedArticles = () => {
    return (
        <section id="articles" className="py-16">
            <h2 className="text-3xl text-center font-semibold">Популярные статьи</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="/path-to-article-image.jpg" alt="Article 1" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Заголовок статьи 1</h3>
                        <p className="text-gray-600 mt-2">Краткое описание статьи...</p>
                        <button className="mt-4 text-green-600 hover:text-green-800">Читать далее</button>
                    </div>
                </div>
                {/* Repeat for other articles */}
            </div>
        </section>
    );
};



const TravelTips = () => {
    return (
        <section id="tips" className="py-16 bg-gray-50">
            <h2 className="text-3xl text-center font-semibold">Советы для путешественников</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white p-6 shadow-md rounded-lg text-center">
                    <img src="/path-to-icon.jpg" alt="Transport" className="mx-auto h-12 w-12 mb-4" />
                    <h3 className="font-semibold">Транспорт</h3>
                    <p className="text-gray-600 mt-2">Как добраться до Кыргызстана и путешествовать внутри страны.</p>
                </div>
                {/* Repeat for other tips */}
            </div>
            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md">Узнать больше</button>
        </section>
    );
};


const Culture = () => {
    return (
        <section id="culture" className="py-16">
            <h2 className="text-3xl text-center font-semibold">Культура Кыргызстана</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <img src="/path-to-image.jpg" alt="Tradition" className="w-full h-48 object-cover mb-4" />
                    <h3 className="font-semibold">Традиции</h3>
                    <p className="text-gray-600">Открытие культуры Кыргызстана...</p>
                </div>
                {/* Repeat for other culture highlights */}
            </div>
        </section>
    );
};


const Nature = () => {
    return (
        <section id="nature" className="py-16 bg-gray-100">
            <h2 className="text-3xl text-center font-semibold">Природа и приключения</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white shadow-md rounded-lg">
                    <img src="/path-to-nature-image.jpg" alt="Nature 1" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="font-semibold">Горы Кыргызстана</h3>
                        <p className="text-gray-600">Описание горных маршрутов...</p>
                        <button className="mt-4 text-green-600 hover:text-green-800">Исследовать природу</button>
                    </div>
                </div>
                {/* Repeat for other nature spots */}
            </div>
        </section>
    );
};


const Gallery = () => {
    return (
        <section id="gallery" className="py-16">
            <h2 className="text-3xl text-center font-semibold">Галерея Кыргызстана</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                <img src="/path-to-gallery-image.jpg" alt="Gallery Image 1" className="w-full h-48 object-cover" />
                {/* Repeat for other images */}
            </div>
        </section>
    );
};


const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 bg-gray-50">
            <h2 className="text-3xl text-center font-semibold">Отзывы путешественников</h2>
            <div className="mt-8 space-y-8">
                <div className="flex items-center">
                    <img src="/path-to-avatar.jpg" alt="Traveler 1" className="w-16 h-16 rounded-full" />
                    <div className="ml-4">
                        <p className="text-gray-600">"Прекрасная страна с невероятной природой!"</p>
                        <p className="text-gray-500">Иван, Россия</p>
                    </div>
                </div>
                {/* Repeat for other testimonials */}
            </div>
        </section>
    );
};


const Newsletter = () => {
    return (
        <section id="newsletter" className="py-16 bg-green-600 text-white text-center">
            <h2 className="text-3xl font-semibold">Подписывайтесь на новости</h2>
            <form className="mt-6">
                <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="p-2 rounded-md w-1/3"
                />
                <button type="submit" className="mt-4 bg-white text-green-600 px-6 py-2 rounded-md">
                    Подписаться
                </button>
            </form>
        </section>
    );
};


const Footer = () => {
    return (
        <footer className="bg-green-600 text-white py-8">
            <div className="max-w-screen-xl mx-auto text-center">
                <div className="space-y-4">
                    <div>
                        <a href="#about" className="text-white hover:text-green-600">О нас</a>
                        <span className="mx-4">|</span>
                        <a href="#privacy" className="text-white hover:text-green-600">Политика конфиденциальности</a>
                        <span className="mx-4">|</span>
                        <a href="#terms" className="text-white hover:text-green-600">Условия использования</a>
                    </div>
                    <div className="mt-4">
                        <a href="#" className="text-white mx-2">Facebook</a>
                        <a href="#" className="text-white mx-2">Instagram</a>
                        <a href="#" className="text-white mx-2">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

