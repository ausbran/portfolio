<template>
  <div class="project-landing">
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
    <div class="client-date">
      <span class="client">
        Client
        <img
          :class="slug"
          :src="require('@/assets/logos/' + clientLogo)"
          :alt="clientName || ''"
        >
      </span>
      <span class="date">Date<span>{{ date }}</span></span>
    </div>
    <transition appear name="line">
      <hr>
    </transition>
    <span class="awards"
      v-if='awards'>
      {{ awards }}
    </span>
    <div class="project-details">
      <ul v-if="tasks && tasks.length" class="tasks">
        <span>Tasks</span>
        <li v-for="task in tasks" :key="task">
          {{ task }}
        </li>
      </ul>
      <ul v-if="roles && roles.length" class="roles">
        <span>Roles</span>
        <li v-for="role in roles" :key="role">
          {{ role }}
        </li>
      </ul>
      <div v-if="overview" class="overview">
        <span>Overview</span>
        <p>{{ overview }}</p>
      </div>
    </div>
    <video
      :src="require('@/assets/' + slug + '/' + slug + '.mp4')"
      autoplay muted playsinline loop />
  </div>
</template>

<script>
export default {
  name: 'ProjectLanding',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    roles: {
      type: Array,
      default: () => []
    },
    tasks: {
      type: Array,
      default: () => []
    },
    date: {
      type: String,
      default: ''
    },
    clientLogo: {
      type: String,
      required: true
    },
    clientName: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      required: true
    },
    awards: {
      type: String,
      default: ''
    },
    overview: {
      type: String,
      default: ''
    }
  }
}
</script>
