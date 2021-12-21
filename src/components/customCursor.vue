<template>
  <div class="custom-cursor">
    <div class="custom-cursor__circle" :style="circleStyle" ref="customCursorCircle"></div>
    <div class="custom-cursor__dot" :style="dotStyle" ref="customCursorDot"></div>
  </div>
</template>

<script>
export default {
  name: "customCursor",
  props: {
    targets: Array,
    circleColor: String,
    circleColorHover: String,
    dotColor: String,
    dotColorHover: String,
    hoverSize: Number
  },
  data() {
    return {
      scale: 1,
      x: null,
      y: null,
      circlePosX: null,
      circlePosY: null,
      dotPosX: null,
      dotPosY: null,
      circleStyle: null,
      dotStyle: null
    };
  },
  methods: {
    customCursor(e) {
      // cursor pos
      this.x = e.clientX;
      this.y = e.clientY;

      // cursor circle
      const circle = this.$refs.customCursorCircle;
      this.circlePosX = this.x - circle.clientWidth / 2;
      this.circlePosY = this.y - circle.clientWidth / 2;

      // cursor circle
      const dot = this.$refs.customCursorDot;
      this.dotPosX = this.x - dot.clientWidth / 2;
      this.dotPosY = this.y - dot.clientHeight / 2;

      //change style when hovering on selected targets
      if (
        (this.targets.length > 0 &&
          this.targets.includes(e.target.tagName.toLowerCase())) ||
        this.targets.includes(e.target.className.toLowerCase())
      ) {
        this.scale = this.hoverSize;
        this.circleStyle = { borderColor: this.circleColorHover };
        this.dotStyle = { backgroundColor: this.dotColorHover };
      } else {
        this.scale = 1;
        this.circleStyle = { borderColor: this.circleColor };
        this.dotStyle = { backgroundColor: this.dotColor };
      }

      //move custom cursor
      circle.style.transform = `translate(${this.circlePosX}px,${this.circlePosY}px) scale(${this.scale})`;
      dot.style.transform = `translate(${this.dotPosX}px,${this.dotPosY}px)`;
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.customCursor);
  }
};
</script>

<style lang="scss" scoped>
$ease: cubic-bezier(0.23, 1, 0.32, 1);

.custom-cursor {
  cursor: none;
  pointer-events: none;
  * {
    z-index: 9999;
  }
  .custom-cursor__circle {
    position: fixed;
    cursor: none;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border: 1px solid $white;
    border-radius: 50%;
    transform: translate(-100%, -100%);
    transition: transform 0.4s $ease;
  }
  .custom-cursor__dot {
    position: fixed;
    cursor: none;
    top: 1px;
    left: 1px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: $white;
    transform: translate(-100%, -100%);
    transition: transform 0.2s $ease;
  }
  // &.x {
  //   .custom-cursor__circle {
  //     border: 1px solid $black;
  //   }
  //   .custom-cursor__dot{
  //     background: black;
  //     height: 20px;
  //     position: relative;
  //     width: 1px;
  //     border-radius: 0;
  //   }
  //   .custom-cursor__dot:after {
  //     background: $black;
  //     content: "";
  //     height: 1px;
  //     left: -10px;
  //     position: absolute;
  //     top: 9px;
  //     width: 21px;
  //   }
  // }
  &.x {
    .custom-cursor__circle {
      border: none;
    }
    .custom-cursor__dot{
      background: url('~@/assets/x.svg') no-repeat;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
