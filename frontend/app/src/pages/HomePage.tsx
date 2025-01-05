import React from "react";
import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx";
import AboutSection from "../components/AboutSection.tsx";
import Footer from "../components/Footer.tsx";
import ArticlesSection from "../components/ArticlesSection.tsx";
import MapSection from "../components/MapSection.tsx";


export default function HomePage() {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            {/* <ArticlesSection /> */}
            <MapSection />
            <Footer />
        </>
    )
}