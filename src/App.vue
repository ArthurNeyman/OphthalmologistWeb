<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
}
</script>
<style lang="scss">
body{
  margin: unset;
}
* {
  box-sizing: border-box;
}
#app{
  font-family: 'Roboto', sans-serif;
  height: calc(100vh - 20px);
}
</style>
