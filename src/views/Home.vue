<template>
  <div class="wrapper">
    <Navbar/>
    <Landing/>
    <Konten/>
    <Info/>
    <Banner/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Landing from '@/components/Landing.vue'
import Konten from '@/components/Konten.vue'
import Info from '@/components/Info.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Landing,
    Konten,
    Info,
    Banner
  }
}
</script>
