<template>
  <ul class="todo-list">
    <ToDos v-for="todo in todos" :key="todo" :task="todo" />
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
  methods: {}
};
</script>
<style scoped>
ul {
  padding: 0 10px;
  margin: 0;
}
</style>
