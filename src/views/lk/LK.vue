<template>
    <NavBar />
    <router-view />
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/lk/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>