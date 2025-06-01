"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Image from "next/image";
import styles from "./CardSection.module.css";
import "./global.css";

const marqueeItems = [
  { text: " Experience & Projects ", img: "/images/image1.png" },
  { text: " Creative Works ", img: "/images/image1.png" },
  { text: " Experience & Projects ", img: "/images/image1.png" },
];

const CardSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const cards = cardsRef.current;
    const totalScrollHeight = window.innerHeight * 3;

    const positions = window.innerWidth < 768
      ? [10, 30, 50, 70]
      : [14, 38, 62, 86];
    const rotations = window.innerWidth < 768
      ? [-10, -5, 5, 10]
      : [-15, -7.5, 7.5, 15];

    // Pin cards section
    ScrollTrigger.create({
      trigger: `.${styles.cards}`,
      start: "top top",
      end: () => `+=${totalScrollHeight}`,
      pin: true,
      pinSpacing: true,
    });

    // Spread cards
    cards.forEach((card, index) => {
      gsap.to(card, {
        left: `${positions[index]}%`,
        rotation: `${rotations[index]}deg`,
        ease: "none",
        scrollTrigger: {
          trigger: `.${styles.cards}`,
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
          id: `spread-${index}`,
        },
      });
    });

    // Rotate and flip cards with staggered effect
    cards.forEach((card, index) => {
      const frontEl = card.querySelector(`.${styles.flipCardFront}`) as HTMLElement;
      const backEl = card.querySelector(`.${styles.flipCardBack}`) as HTMLElement;

      const staggerOffset = index * 0.05;
      const startOffset = 1 / 3 + staggerOffset;
      const endOffset = 2 / 3 + staggerOffset;

      ScrollTrigger.create({
        trigger: `.${styles.cards}`,
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        scrub: 1,
        id: `rotate-flip-${index}`,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= startOffset && progress <= endOffset) {
            const animationProgress = (progress - startOffset) / (1 / 3);
            const frontRotation = -180 * animationProgress;
            const backRotation = 180 - 180 * animationProgress;
            const cardRotation = rotations[index] * (1 - animationProgress);

            if (frontEl && backEl) {
              frontEl.style.transform = `rotateY(${frontRotation}deg)`;
              backEl.style.transform = `rotateY(${backRotation}deg)`;
              card.style.transform = `translate(-50%, -50%) rotate(${cardRotation}deg)`;
            }
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      {/* Cards Section */}
      <section className={styles.cards}>
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className={styles.card}
            id={`card-${id}`}
            ref={(el) => {
              if (el) cardsRef.current[id - 1] = el;
            }}
          >
            <div className={styles.cardWrapper}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <Image
                    src={`/images/img${id === 1 ? '10' : id === 2 ? '10' : id === 3 ? '10' : '10'}.jpg`}
                    alt="Card"
                    width={400}
                    height={300}
                  />
                </div>
                <div className={styles.flipCardBack}>
                  {id === 1 || id === 2 ? (
                    <Image
                      src={`/images/img${id === 1 ? '15' : '16'}.gif`}
                      alt="logo"
                      width={100}
                      height={100}
                      className={styles.cardLogo}
                    />
                  ) : (
                    <Image
                      src={`/images/img${id === 3 ? '17' : '18'}.gif`}
                      alt=""
                      width={200}
                      height={200}
                      className={styles.fullImg}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <section className={styles.footer}>
        <div className={styles.marquee}>
          <div className={styles.marqueeInner}>
            {[...Array(3)].map((_, i) => (
              <div className={styles.marqueeContent} key={i}>
                {marqueeItems.map((item, index) => (
                  <React.Fragment key={`${i}-${index}`}>
                    <span>{item.text}</span>
                    <Image
                      src={item.img}
                      alt="Marquee Image"
                      width={50}
                      height={50}
                    />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;
