import React from "react";
import SlideinText from "../../animations/SlideInText";
import AnimateBackground from "../../animations/AnimateBackground";
import AnimateTitle from "../../animations/AnimateTitle";
import AnimateBottom from "../../animations/AnimateBottom";
import { setTextByDevice } from "../../shared/utils";
import * as Icons from 'src/client/components/icons/index'

export default function index({ controls, contentControls }) {
    const value = ["Game", "Soundtrack"]
    return (
        <div className="h-screen flex flex-col justify-between section">
            <div className="flex justify-between items-center  md:space-x-10 z-0">
                <div className="space-x-4">
                    <SlideinText delay={1} duration={2} text={setTextByDevice('mobile', value)} />
                </div>
                <div className=" space-x-4 flex justify-between">
                    <Icons.IconSpotify />
                    <Icons.IconInstagram />
                </div>
            </div>
            <AnimateBackground src={"./banner.webp"} controls={contentControls} />
            <AnimateTitle title={'WATCH DOGS 2'} controls={controls} />
            <AnimateBottom controls={contentControls}>
                <SlideinText delay={1} duration={2} text={setTextByDevice('web', value)} />
            </AnimateBottom>
        </div>
    );
}

