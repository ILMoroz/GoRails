<template>
  <router-view/>
</template>




<script>
export default {
  name: 'App',

}
</script>

<style>
@import url(assets/libs/bootstrap/css/bootstrap.css);
@import url(assets/css/lk.css);
@import url(assets/css/style.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

