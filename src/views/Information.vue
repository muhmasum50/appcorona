<template>
  <div class="wrapper">
    <Navbar />
    <Box :indo="indo" :positif="positif" 
      :sembuh="sembuh" :meninggal="meninggal" 
      :loading="loading" :tanggal="tanggal" />

    <Info/>
    <InformasiKonten/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navbar from "@/components/Navbar.vue"
  import Box from "@/components/informations/Box.vue"
  import InformasiKonten from "@/components/informations/InformasiKonten.vue"
  import Info from '@/components/Info.vue'
  import axios from "axios";

  export default {
    name: "Information",
    components: {
      Navbar,
      Box,
      InformasiKonten,
      Info,
    },
    data: function () {
      return {
        indo: '',
        positif: '',
        meninggal: '',
        sembuh: '',
        tanggal:'',
        loading: true,
      };
    },
    methods: {
      setIndo(data) {
        this.indo = data
      },
      setPositif(data) {
        this.positif = data
      },
      setMeninggal(data) {
        this.meninggal = data
      },
      setSembuh(data) {
        this.sembuh = data
      },
      setTanggal(data) {
        this.tanggal = data
      }
    },
    mounted() {

      this.loading =true;

      axios.get("https://nggonepixel.com/api/corona/indonesia")
        .then((response) => this.setIndo(response.data))
        .catch((error) => console.log(error));

      axios.get("https://nggonepixel.com/api/corona/positif")
        .then((response) => this.setPositif(response.data))
        .catch((error) => console.log(error));

      axios.get("https://nggonepixel.com/api/corona/sembuh")
        .then((response) => this.setSembuh(response.data))
        .catch((error) => console.log(error));

      axios.get("https://nggonepixel.com/api/corona/meninggal")
        .then((response) => this.setMeninggal(response.data))
        .catch((error) => console.log(error));

      axios.get('https://nggonepixel.com/api/corona/tglindonesia')
      .then((response) => this.setTanggal(response.data))
        .catch((error) => console.log(error));

      setTimeout(() => {
        this.loading = false;
      },1500)
    },
  };
</script>
