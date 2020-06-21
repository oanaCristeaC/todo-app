<template>
  <li class="todo" :class="{ completed }" @click="toComplete">
    <div class="view">
      <input type="checkbox" class="toggle" />
      <label for="toggle">{{ task }}</label>
      <button class="destroy"></button>
    </div>
  </li>
</template>
<script>
export default {
  name: "todo",
  props: {
    task: {
      type: String
    }
  },
  data: function() {
    return {
      completed: false
    };
  },
  methods: {
    toComplete: function() {
      console.log(this.task)
      this.completed = !this.completed;
    }
  }
};
</script>
<style scoped>
.todo {
  margin: 0;
  padding: 0;
  list-style: none;
}

.destroy {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
}

li {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

li .toggle {
  text-align: center;
  width: 35px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  -webkit-appearance: none;
}

li label {
  word-break: break-all;
  padding: 15px 15px 15px 50px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}

li .toggle {
  background-image: url("../assets/img/unchecked-box.svg");
  background-repeat: no-repeat;
  background-position: center left;
}

li.completed label {
  color: #d9d9d9;
  text-decoration: line-through;
  text-decoration-line: line-through;
  text-decoration-style: initial;
  text-decoration-color: initial;
}

li.completed .toggle {
  background-image: url("../assets/img/checked-box.svg");
  background-repeat: no-repeat;
  background-position: center left;
}
</style>
