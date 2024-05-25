import React from "react";
import EaseInTransition from "src/client/animations/EaseInTransition";
import { Spotify } from "react-spotify-embed";
import AnimateContent from "src/client/animations/AnimateContent";

export default function index() {
    const lst = [
        'https://open.spotify.com/intl-pt/track/6kMMncBgOOVTW4WOvV697V?si=fb1bd269e2cd479b',
        'https://open.spotify.com/intl-pt/track/3TWTD3yFmYZ8JJD9Pginku?si=380b2276130643b1',
        'https://open.spotify.com/intl-pt/track/1o8UxTJVmCV1BnViAlU7fB?si=0c06e20ed0bd4ce3',
        'https://open.spotify.com/intl-pt/track/4uHeaqhDmq4MvYD95dDViT?si=31cf2a13dff547ae',
        'https://open.spotify.com/intl-pt/track/30CoKRENUWLcYloWhyDVFv?si=c7fcddec1aa54193',
        'https://open.spotify.com/intl-pt/track/76KlxKZGwi2EMdO1Pa5cnK?si=81f6b5a61a1a4d14',
        'https://open.spotify.com/intl-pt/track/78O1PPF4Fazp3lqnx8vzEc?si=6e566eadb05e4a7c',
        'https://open.spotify.com/intl-pt/track/2Ga7OhkfMSEUV7Z56teqRR?si=d2c0cfc448e241e0',
        'https://open.spotify.com/intl-pt/track/5VV4avxotHwjehJ0kFAjNS?si=f8034a433d894a71',
        'https://open.spotify.com/intl-pt/track/7Gb4ElwilUwjrhPkHF3AdO?si=5bc9a618b47144c6',
        'https://open.spotify.com/intl-pt/track/3aZz6DbS6RaYopsgFQheSJ?si=a378c3f2be7344ef',
        'https://open.spotify.com/intl-pt/track/3BgB5rVpqByorFnSv7y1fc?si=e856e8f86f284ff9',
        'https://open.spotify.com/intl-pt/track/1Xc71IYig8sPrYeAroSrUy?si=5c4ac4749f0f43b9',
        'https://open.spotify.com/intl-pt/track/3JU5T4BI23PlR5ZCPt1awh?si=0b0f3b2b56bc4c21',
        'https://open.spotify.com/intl-pt/track/2SZgem73bAu51C6uUfXTlC?si=82513882a367460a',
        'https://open.spotify.com/intl-pt/track/4GSUujhua9E0pyybu2JNqy?si=6fb9e164748e4538',
    ]

    return (
        <div className="py-32">
            <AnimateContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {lst.map((value, i) => (
                        <div className="m-8" >
                            <EaseInTransition key={i}>
                                <Spotify className="sm:hidden flex" wide link={value} />
                                <Spotify className="hidden sm:flex" link={value} />
                            </EaseInTransition>
                        </div>
                    ))}
                </div>
            </AnimateContent>
        </div>
    )
}
