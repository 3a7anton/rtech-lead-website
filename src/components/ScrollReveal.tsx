import React, { useEffect, useRef, useMemo } from 'react';
import type { ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const wordElements = el.querySelectorAll<HTMLElement>('.word');
      const scrollerElement = scrollContainerRef?.current;

      // Rotation animation
      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: rotationEnd,
            scrub: 1,
            markers: false,
            scroller: scrollerElement || undefined
          }
        }
      );

      if (wordElements.length > 0) {
        // Opacity animation
        gsap.fromTo(
          wordElements,
          { opacity: baseOpacity },
          {
            ease: 'none',
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              start: 'top bottom-=20%',
              end: wordAnimationEnd,
              scrub: 1,
              markers: false,
              scroller: scrollerElement || undefined
            }
          }
        );

        // Blur animation
        if (enableBlur) {
          gsap.fromTo(
            wordElements,
            { filter: `blur(${blurStrength}px)` },
            {
              ease: 'none',
              filter: 'blur(0px)',
              stagger: 0.05,
              scrollTrigger: {
                trigger: el,
                start: 'top bottom-=20%',
                end: wordAnimationEnd,
                scrub: 1,
                markers: false,
                scroller: scrollerElement || undefined
              }
            }
          );
        }
      }

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      // Kill all ScrollTriggers associated with this element
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el || (trigger.trigger && el.contains(trigger.trigger as Node))) {
          trigger.kill();
        }
      });
    };
  }, [enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, scrollContainerRef]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
