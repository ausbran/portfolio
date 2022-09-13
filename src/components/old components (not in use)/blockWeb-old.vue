<template>
  <article class="project-block" :class="{ active: show }">
    <video
      :src="require('@/assets/' + name + '/tgrsite-film-proto.mp4')"
      autoplay muted playsinline loop
      ></video>
    <div
      class="project-image"
      @click="doSomething()">
        <img
          class="draggable"
          :src="require('@/assets/' + name + '/tgrsite-film-mock.jpg')"
          alt="">
    </div>
    <p class="long">
      The film page acts a landing point for all film specific info and content. Athletes, partners, descriptions, related articles and tour dates serve users everything they need in one place.
    </p>
    <aside>
      <h2>Film Page</h2>
      <toggleButtons @showMock="showMock" @hideMock="hideMock"/>
      <p>
        The film page acts a landing point for all film specific info and content.
        <span class="read-more" @click="show = true">
          Read More
        </span>
      </p>
    </aside>
  </article>
</template>

<script>
import toggleButtons from './toggleButtons'
export default {
  name: "blockWeb",
  props: {
    name: String,
  },
  data() {
     return {
         mock: false
     }
  },
  methods: {
     doSomething(value) {
         this.mock = value;
     }
     showMock(value) {
      $('.project-image, .switch-type a:nth-of-type(2)').addClass('active');
      $('.switch-type a:nth-of-type(1)').removeClass('active');
      var obj = $(this);
      obj.hide();
    },
    hideMock(value) {
      $('.project-image, .switch-type a:nth-of-type(2)').removeClass('active');
      $('.switch-type a:nth-of-type(1)').addClass('active');
    }
  }

// this was the methods instance that was used on the tgrsite component in order to make toggle buttons fire correctly
  // methods: {
  //   showMock(value) {
  //     $('.project-image, .switch-type a:nth-of-type(2)').addClass('active');
  //     $('.switch-type a:nth-of-type(1)').removeClass('active');
  //     var obj = $(this);
  //     obj.hide();
  //   },
  //   hideMock(value) {
  //     $('.project-image, .switch-type a:nth-of-type(2)').removeClass('active');
  //     $('.switch-type a:nth-of-type(1)').addClass('active');
  //   }
  // }
}
</script>