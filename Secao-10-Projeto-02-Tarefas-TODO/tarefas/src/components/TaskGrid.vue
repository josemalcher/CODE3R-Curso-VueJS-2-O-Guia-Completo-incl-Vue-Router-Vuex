<template>
  <div class="tasks">
    <template>
      <div v-for="task in tasks" :key="task.name">{{task.name}}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "TaskGrid",
  props: {
    tasks: {type: Array, required: true}
  }
}
</script>

<style scoped>

</style>