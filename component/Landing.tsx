import { LandingPageStoryblok } from "@/component-types-sb";
import React from "react";

const Landing = ({ blok: { hero, title } }: LandingPageStoryblok) => {
    console.log(hero, title);
    return (
        <div>
            <h1 className="text-4xl text-black">{title}</h1>
            <img src={hero.filename} alt={hero.alt} />
        </div>
    );
};

export default Landing;
