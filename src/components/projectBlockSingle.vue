<img :path="image.path" :class={ active: mock} />
<toggleButtons @toggled=changeImageState />

<script>
export default {
  name: "toggleButtons",
  props: [image],
  data() {
    mock: ''
  },
  methods: {
    changeImageState(event) {
      this.mock = event
    }
  }
};
</script>