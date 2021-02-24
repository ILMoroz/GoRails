<template>
    <div class="wrapper">
        <SideBar />
        <div id="content">
            <router-view />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/lk/SideBar.vue'

export default {
  name: 'Home',
  components: {
    SideBar
  }
}
</script>
