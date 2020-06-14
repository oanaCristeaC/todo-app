<template>
  <section class="main-section">
    <input id="toggle-all" type="checkbox" class="toggle-all" />
    <label for="toggle-all"></label>
    <ToDos :todos="tasks" />
  </section>
</template>
<script>
import ToDos from "@/components/ToDos.vue";

export default {
  name: "main-section",
  components: {
    ToDos
  },
  props: {
    newTask: {
      type: String
    }
  },
  data: function() {
    return {
      tasks: []
    };
  },
  methods: {
    createTodo: function() {
      this.tasks.push(this.newTask);
    }
  },
  watch: {
    newTask: function() {
      this.createTodo();
    }
  }
};
</script>
<style scoped>
.main-section {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}

.toggle-all {
  width: 1px;
  height: 1px;
  border: none;
  opacity: 0;
  position: absolute;
  right: 100%;
  bottom: 100%;
}

.toggle-all + label {
  width: 60px;
  height: 34px;
  font-size: 0;
  position: absolute;
  top: -52px;
  left: -13px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.toggle-all + label::before {
  content: "❯";
  font-size: 22px;
  color: #737373;
  padding: 10px 27px 10px 27px;
  /* background-image: url("../assets/img/arrow.svg");
  background-repeat: no-repeat;
  background-position: center left; */
}
</style>
