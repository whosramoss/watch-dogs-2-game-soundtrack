import { Questrial } from "next/font/google";
import localFont from "next/font/local";

export const fontQuestrial = Questrial({
    subsets: ["latin"],
    display: "block",
    weight: ["400"],
});

export const fontHacked = localFont({
    src: [
        {
            path: "./HACKED.woff2",
            weight: "400",
            style: "normal",
        },
    ],
});


export const HackedFont = ({ children }) => {
    return <div className={`${fontHacked}`}>
        {children}
    </div>
}