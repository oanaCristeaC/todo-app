<template>
  <ul class="filers">
    <MenuElement v-for="item in items" :key="item.index" :menuItem="item" />
  </ul>
</template>
<script>
import MenuElement from "@/components/MenuElement.vue";

export default {
  name: "footer-menu",
  components: {
    MenuElement
  },
  data: function() {
    return {
      items: ["All", "Active", "Completed"]
    };
  }
};
</script>
<style scoped>
#filers {
  margin: 0;
  padding: 0;
  list-style: none;
  right: 0;
  left: 0;
  list-style: none;
  list-style-position: initial;
  list-style-image: initial;
  list-style-type: none;
  position: absolute;
}

ul {
  display: inline;
}
</style>
