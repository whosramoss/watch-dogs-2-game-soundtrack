import React from "react";
import SlideinText from "../../animations/SlideInText";
import { setTextByDevice } from "../../shared/utils";

export default function index() {
    const DESCRIPTION = [
        "The Watch Dogs games are set in fictionalized versions ",
        "of real-life cities, at various points in time, and follow ",
        "different hacker protagonists who,while having different goals ",
        "to achieve, find themselves involved with the criminal ",
        "underworlds of their respective cities."
    ];

    return (
        <div className="h-screen grid grid-rows-4 section">
            <div className="row-span-3"></div>
            <div className="row-span-1">
                <div className="hidden sm:flex section-x lg:col-span-7 flex-col text-2xl justify-end pt-16 pb-24">
                    <SlideinText
                        delay={1} duration={1.5}
                        text={setTextByDevice('web', DESCRIPTION)}
                    />
                </div>
                <div className="flex sm:hidden col-span-12 md:col-span-7 md:pt-10 flex-col text-xl justify-end pb-24">
                    <SlideinText
                        delay={1} duration={1.5}
                        text={setTextByDevice('mobile', DESCRIPTION)}
                    />
                </div>
            </div>
        </div>
    );
}