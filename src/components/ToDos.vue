<template>
  <ul class="todo-list">
    <ToDos
      v-for="todo in todos"
      :key="todo.id"
      :task="todo"
      @setComplete="setComplete"
    />
  </ul>
</template>
<script>
import ToDos from "@/components/ToDo.vue";

export default {
  name: "todos",
  components: {
    ToDos
  },
  props: {
    todos: {
      type: Array
    }
  },
  methods: {
    setComplete: function(task) {
      this.$emit('setComplete', task)
    }
  }
};
</script>
<style scoped>
ul {
  padding: 0 10px;
  margin: 0;
}
</style>
