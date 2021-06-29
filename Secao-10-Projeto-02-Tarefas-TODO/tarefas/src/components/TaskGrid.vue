<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <Task
          v-for="(task, i) in tasks"
          :key="task.name"
          :task="task"
          @taskDeleted="$emit('taskDeleted', i)"
          @taskStateChange="$emit('taskStateChange', i)"
      >
      </Task>
    </template>
    <p v-else class="no-task">Sua Vida esta em dia! :) </p>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "TaskGrid",
  props: {
    tasks: {type: Array, required: true}
  },
  components: {
    Task
  },


}
</script>

<style scoped>
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.task-grid .task {
  margin: 10px;
}

.no-task {
  color: #AAA;
  font-size: 1.7rem;
}
</style>