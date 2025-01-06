import React from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Gallery from "../components/Gallery.tsx";


export default function BlogPage() {
    return (
        <div className="bg-white">
            <Header />
            <div className="bg-gray-200">
                <Gallery />
                <Footer />
            </div>
        </div>
    )
}