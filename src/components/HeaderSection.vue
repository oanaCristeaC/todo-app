<template>
  <div>
    <h1>todos</h1>
    <input
      autofocus="autofocus"
      autocomplete="off"
      placeholder="What needs to be done?"
      class="new-todo"
      v-model="value"
      v-on:keyup.enter="submit($event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: "header-section",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    submit: function(inputValue) {
      this.$emit("input", inputValue);
      this.value = "";
    }
  }
};
</script>
<style scoped>
h1 {
  position: absolute;
  top: -150px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
}

.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(163, 156, 156, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0);
  font-style: italic;
  color: inherit;
}

.new-todo {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 20px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  /* color: #999; */
  padding: 16px 16px 16px 55px;
  /* border: 1px solid #999; */
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
</style>
