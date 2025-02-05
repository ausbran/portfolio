// THIS FIlE NEEDS ME TO BUY THE SMOOTH SCROLLER PACKAGE FROM GSAP.
// IT WOULD BE A MORE STREAMLINED EXPERIENCE AND WOULDNT HAVE TO USE LOCO SCROLL.

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
export default {
  mounted() {
    this.$nextTick(function () {
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ScrollSmoother);

      // create the smooth scroller FIRST!
      let smoother = ScrollSmoother.create({
        smooth: 1,   // seconds it takes to "catch up" to native scroll position
        effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.pin-container',
          start: "center center",
          end: "center center",
          pin: '.pin-container',
          scrub: 1,
          pinSpacing: true,
        }
      });

      let container = document.querySelector('.pin-container'),
          sections = gsap.utils.toArray(".pin-container > *"),
          scrollTween = gsap.to(sections, {
          x: () => -(container.scrollWidth - document.querySelector('.pin-container').clientWidth) + "px",
          ease: "none",
          duration: .1,
          scrollTrigger: {
            trigger: ".pin-container",
            pin: true,
            start: "center center",
            scrub: true,
            invalidateOnRefresh: true,
            end: `+=${container.offsetWidth}`,
          }
      });
    });
  }
}