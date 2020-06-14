<template>
  <li :class="{ active: selected }" id="filered">{{ menuItem }}</li>
</template>
<script>
export default {
  name: "menu-element",
  props: {
    menuItem: String,
    selected: Boolean
  },
  data: function() {
    return {};
  }
};
</script>
<style scopend>
#filered {
  display: inline;
  padding: 0 5px;
}
</style>
