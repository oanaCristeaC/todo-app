<template>
  <li :class="{ selected }" id="filered" @click="toAction">
    <a href="#" >{{ menuItem }}</a>
  </li>
</template>
<script>
export default {
  name: "menu-element",
  props: {
    menuItem: {
      type: String
    },
    selected: {
      type: Boolean
    }
  },
  data: function() {
    return {};
  },
  methods: {
    toAction: function() {
      console.log(this.menuItem)
    }
  }
};
</script>
<style scopend>
#filered {
  display: inline;
  padding: 0 5px;
}

a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

a.active {
  border-color: rgba(175, 47, 47, 0.2)
}
</style>
