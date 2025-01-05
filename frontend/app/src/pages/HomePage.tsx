import React from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import HeroSection from "../components/HeroSection.tsx";
import AboutSection from "../components/AboutSection.tsx";
import MapSection from "../components/MapSection.tsx";


export default function HomePage() {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <MapSection />
            <Footer />
        </>
    )
}