"use client";

import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";

const Home = () => {

  const [loaderFinished, setLoaderFinished] = useState(false)
  const [timeline, setTimeline] = useState(null)


  useLayoutEffect(() => {
    // gsap.context used to clean up all animation code after it has run
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true)
      })

      setTimeline(tl)
    })

    return () => context.revert()

  }, [])
  return (
    <main>
      {loaderFinished ? <Hero /> :  <Loader timeline={timeline}/>  }
     
    </main>
  );
};

export default Home;
