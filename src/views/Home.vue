<template>
  <div class="wrapper">
    <Navbar/>
    <Landing/>
    <Konten/>
    <Information/>
    <Banner/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Landing from '@/components/Landing.vue'
import Konten from '@/components/Konten.vue'
import Information from '@/components/Information.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Landing,
    Konten,
    Information,
    Banner
  }
}
</script>
