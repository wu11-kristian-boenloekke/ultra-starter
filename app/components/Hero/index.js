import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";


import styles from "./Hero.module.scss";

import { animateTitle, animateImage, revealMenu } from "./animations";

import Logo from "@/components/Logo";

const Hero = () => {
  //heroRef to context. - reference anything inside the context with classes, data-items etc. instead of creating refs for each element
  const heroRef = useRef(null)
  const timeline = useRef((gsap.timeline()))

  //hook to run hero animation indepently of home page useLayoutEffect
  useEffect(() => {
    const context = gsap.context(() => {

      const tl = timeline.current

      tl.add(animateTitle()).add(animateImage(), 0).add(revealMenu(), 0)
    }, heroRef)

      //cleanup animation code
    return () => context.revert()

  }, [])


  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.hero__top}>
        <div data-menu-item data-hidden>
          <Logo />
        </div>
        <span data-menu-item data-hidden>about</span>
        <span data-menu-item data-hidden>contact</span>
      </div>

      <h1 className={styles.hero__title}>
        <span data-title-first data-hidden>Ultra</span>
        <span data-hero-line className={styles.hero__line}></span>
        <span data-title-last data-hidden>agency</span>
      </h1>

      <div className={styles.hero__image}>
        <div data-image-overlay className={styles.hero__imageOverlay}></div>
        <Image
          data-image
          src="/images/blob.jpg"
          width={1728}
          height={650}
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Hero;
