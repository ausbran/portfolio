<template>
  <div class="project-landing">
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
    <div class="client-date">
      <span class="client">Client<img :src="require('@/assets/' + name + '/' + client)" alt=""></span>
      <span class="date">Date<span>{{ date }}</span></span>
    </div>
    <transition appear name="line">
      <hr>
    </transition>
    <span class="awards">{{ awards }}</span>
    <div class="project-details">
      <ul class="tasks">
        <span>Tasks</span>
        <li v-for="task in tasks">
          {{ task.task }}
        </li>
      </ul>
      <ul class="roles">
        <span>Roles</span>
        <li v-for="role in roles">
          {{ role.role }}
        </li>
      </ul>
      <div class="overview">
        <span>Overview</span>
        <p>{{ overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projectLanding',
  props: {
    title: String,
    description: String,
    roles: Array,
    tasks: Array,
    date: String,
    client: String,
    name: String,
    awards: String,
    overview: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
template{}
</style>