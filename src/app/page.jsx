"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, useAnimation } from "framer-motion";
import * as Section from "src/client/components/sections/index";
import AnimateSection from "src/client/animations/AnimateSection";
import { bodyVariantState } from "src/client/animations/variants/bodyVariantState";
import Link from "next/link";


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    setTimeout(() => {
      setIntroAnimation(true);
    }, 2000);
  }, []);

  const setIntroAnimation = (v) => {
    setIsOpen(v);
    if (v) {
      controls.start(bodyVariantState.textopen);
      contentControls.start(bodyVariantState.contentopen);
    } else {
      controls.start(bodyVariantState.textclose);
      contentControls.start(bodyVariantState.contentclose);
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <AnimateSection >
            <Section.SectionDescription />
            <div className="section-x -pt-4">
              <Section.SectionSongs />
              <Link
                href={'https://github.com/whosramoss'}
                target="_blank"
                className="flex pt-10 pb-6 justify-center text-primary font-semibold">
                Build by WHOSRAMOSS
              </Link>
            </div>
          </AnimateSection>
        )}
      </AnimatePresence>
      <Section.SectionLoader
        controls={controls}
        contentControls={contentControls}
      />
    </>
  );
}

