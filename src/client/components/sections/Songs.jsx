import React from "react";
import EaseInTransition from "src/client/animations/EaseInTransition";
import { Spotify } from "react-spotify-embed";
import AnimateContent from "src/client/animations/AnimateContent";
import SlideInViewportTransition from "src/client/animations/SlideInViewportTransition";
import Link from "next/link";
import { motion } from "framer-motion";

export default function index() {
    const image = 'https://m.media-amazon.com/images/I/61RFXl932nL._UF1000,1000_QL80_.jpg';
    const lst = [
        { name: 'Shanghaied', link: 'https://open.spotify.com/intl-pt/track/6kMMncBgOOVTW4WOvV697V?si=fb1bd269e2cd479b', },
        { name: 'Burning Desire (Hacker)', link: 'https://open.spotify.com/intl-pt/track/3TWTD3yFmYZ8JJD9Pginku?si=380b2276130643b1', },
        { name: 'W4tched (Cinema)', link: 'https://open.spotify.com/intl-pt/track/1o8UxTJVmCV1BnViAlU7fB?si=0c06e20ed0bd4ce3', },
        { name: 'Haum Sweet Haum', link: 'https://open.spotify.com/intl-pt/track/4uHeaqhDmq4MvYD95dDViT?si=31cf2a13dff547ae', },
        { name: 'Cyber Driver', link: 'https://open.spotify.com/intl-pt/track/30CoKRENUWLcYloWhyDVFv?si=c7fcddec1aa54193', },
        { name: 'Amethyst', link: 'https://open.spotify.com/intl-pt/track/76KlxKZGwi2EMdO1Pa5cnK?si=81f6b5a61a1a4d14', },
        { name: 'Play N Go', link: 'https://open.spotify.com/intl-pt/track/78O1PPF4Fazp3lqnx8vzEc?si=6e566eadb05e4a7c', },
        { name: 'Eye For An Eye (Reprise)', link: 'https://open.spotify.com/intl-pt/track/2Ga7OhkfMSEUV7Z56teqRR?si=d2c0cfc448e241e0', },
        { name: 'Cyber Driver (Opera)', link: 'https://open.spotify.com/intl-pt/track/5VV4avxotHwjehJ0kFAjNS?si=f8034a433d894a71', },
        { name: 'Citrus', link: 'https://open.spotify.com/intl-pt/track/7Gb4ElwilUwjrhPkHF3AdO?si=5bc9a618b47144c6', },
        { name: 'Balance', link: 'https://open.spotify.com/intl-pt/track/3aZz6DbS6RaYopsgFQheSJ?si=a378c3f2be7344ef', },
        { name: 'Burning Desire', link: 'https://open.spotify.com/intl-pt/track/3BgB5rVpqByorFnSv7y1fc?si=e856e8f86f284ff9', },
        { name: 'Eye For An Eye', link: 'https://open.spotify.com/intl-pt/track/1Xc71IYig8sPrYeAroSrUy?si=5c4ac4749f0f43b9', },
        { name: 'Robot (Finale)', link: 'https://open.spotify.com/intl-pt/track/3JU5T4BI23PlR5ZCPt1awh?si=0b0f3b2b56bc4c21', },
        { name: 'Watch Dogs Theme', link: 'https://open.spotify.com/intl-pt/track/2SZgem73bAu51C6uUfXTlC?si=82513882a367460a', },
        { name: 'The Motherload', link: 'https://open.spotify.com/intl-pt/track/4GSUujhua9E0pyybu2JNqy?si=6fb9e164748e4538', },
    ]

    return (
        <div className="py-32">
            <AnimateContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {lst.map((lst, i) => (
                        <div className="m-8" key={i} >
                            <Spotify className="sm:hidden flex" wide link={lst.link} />
                            <div className="hidden sm:flex">
                                <EaseInTransition >
                                    <Link href={lst.link} target="_blank" aria-label="Check out song on Spotify" >
                                        <motion.img
                                            src={image}
                                            className={`cursor-none mx-auto my-auto shadow-xl object-cover w-full rounded-lg`}
                                        ></motion.img>
                                    </Link>
                                    <SlideInViewportTransition>
                                        <span className="uppercase">{lst.name}</span>
                                    </SlideInViewportTransition>
                                </EaseInTransition>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimateContent>
        </div>
    )
}
