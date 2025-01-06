import React from "react"


export default function MapSection() {
    return (
        <div className="h-[420px] lg:h-screen w-full">
            <div className="p-5 lg:p-20 h-full">
                <iframe className="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d711648.4547150119!2d74.5340928!3d42.860544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2skg!4v1736091250069!5m2!1sru!2skg" width="100%" height="100%" loading="lazy"></iframe>
            </div>
        </div>
    )
}