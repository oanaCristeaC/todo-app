<template>
  <footer class="footer-section">
    <span class="todo-count">{{ message }}</span>
    <FooterMenu />
  </footer>
</template>
<script>
import FooterMenu from "@/components/FooterMenu.vue";
import { todoStorage } from "@/helpers.js";

export default {
  name: "footer-section",
  components: {
    FooterMenu
  },
  computed: {
    message: function() {
      const noTasks = todoStorage.fetch().filter(task => !task.completed).length;
      return noTasks === 1 ? `${noTasks} item` : `${noTasks} items ` + "left";
    }
  }
};
</script>
<style scoped>
.footer-section {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  content: "";
  right: 0;
  bottom: 0;
  height: 20px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
  float: left;
  text-align: left;
}
</style>
