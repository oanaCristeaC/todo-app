<template>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Written by Ionela Cristea</p>
    <p></p>
  </footer>
</template>
<script>
export default {
  name: "footer-info"
};
</script>
<style scoped>
.info {
  margin: 65px auto 0;
  color: #bfbfbf;
  font-size: 10px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;
  top: 100%;
  left: 50%;
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
