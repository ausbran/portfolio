import locomotiveScroll from "locomotive-scroll";
export default {
  mounted() {
    this.$nextTick(function () {
      gsap.registerPlugin(ScrollTrigger);

      const pageContainer = document.querySelector(".project-container");
      const pinWrap = document.querySelector(".pin-container");

      if (!pageContainer || !pinWrap) {
        return;
      }

      const scroller = new locomotiveScroll({
        el: pageContainer,
        smooth: true
      });
      
      scroller.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed"
      });

      // gsap horizontal function
      let pinWrapWidth = pinWrap.offsetWidth;
      let horizontalScrollLength = pinWrapWidth - window.innerWidth;

      gsap.to(pinWrap, {
        scrollTrigger: {
          scroller: pageContainer, //locomotive-scroll
          scrub: true,
          trigger: "#pin",
          pin: true,
          anticipatePin: 1,
          start: "top top",
          end: pinWrapWidth
        },
        x: -horizontalScrollLength,
        ease: "none"
      });

      // trying to figure out disable scroll on cat pages
      // let removeScroll = () => content.style.overflow = "visible"

      // ScrollTrigger.addEventListener("refresh", () => {
      //   var path = location.pathname.slice(1);
      //   if (path == 'design' || path == 'code' || path == 'motion') {
      //     removeScroll();
      //     requestAnimationFrame(removeScroll);
      //   } else {
      //     scroller.update()
      //   }
      // })

      ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

      ScrollTrigger.refresh();
    })
  }
};
