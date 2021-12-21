<template>
  <div class="links">
    <transition appear name="slide-up">
      <kinesis-container>
        <kinesis-element :strength="20" type="depth">
          <router-link to="/design">
            <h1 class="link design">design</h1>
          </router-link>
        </kinesis-element>
      </kinesis-container>
    </transition>

    <transition appear name="slide-up">
      <kinesis-container>
        <kinesis-element :strength="20" type="depth">
          <router-link to="/code">
            <h1 class="link code">code</h1>
          </router-link>
        </kinesis-element>
      </kinesis-container>
    </transition>

    <transition appear name="slide-up">
      <kinesis-container>
        <kinesis-element :strength="20" type="depth">
          <router-link to="/motion">
            <h1 class="link motion">motion</h1>
          </router-link>
        </kinesis-element>
      </kinesis-container>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'navigationLinks',
  props: {
      name: String,
  }
};
</script>