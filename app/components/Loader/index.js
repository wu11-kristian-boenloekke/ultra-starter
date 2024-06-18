import React, { useEffect, useRef } from "react";
import { words } from "./data";
import { gsap } from "gsap";
import styles from "./Loader.module.scss";

import { collapseWords, introAnimation, progressAnimation } from "./animations";

const Loader = ({timeline}) => {

  const loaderRef = useRef(null)
  const progressRef = useRef(null)
  const progressNumberRef = useRef(null)
  const wordGroupsRef = useRef(null)

  useEffect(() => {
    //timeline state passed down from main page
    timeline &&
    //add the timelines of intro and progress animation to the master timeline
    timeline
      .add(introAnimation(wordGroupsRef))
      .add(progressAnimation(progressRef, progressNumberRef), 0)
      .add(collapseWords(loaderRef), "-=1")

    //Timeline method
    // const tl = gsap.timeline()
    // //to overlap the two animation we add '-=2', to overlap by two seconds - timeline feature
    // tl.add(introAnimation()).add(progressAnimation(), '-=2')
  }, [timeline])

  return (
    <div className={styles.loader__wrapper} >
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>0</span>
      </div>
      <div className={styles.loader} ref={loaderRef}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRef}>
            {words.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
