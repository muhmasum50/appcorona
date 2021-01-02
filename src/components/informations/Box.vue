<template>
  <div class="konten">
    <div class="infoHeader" data-aos="fade-down" data-aos-duration="1000">
      <h1>
        Tetap Dirumah <br />
        <span style="color: #31428d">Data Live Virus Korona Global</span>
      </h1>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-sm-12 col-md-6 col-lg-6 col-xl-3"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="card bg-blue img-card box-primary-shadow">
            <div class="card-body">
              <div class="d-flex">
                <div class="text-white">
                  <p class="text-white mb-0">TOTAL POSITIF</p>
                  <img
                    src="https://gibei.stiesia.ac.id/uploads/images/spinner.gif"
                    v-if="loading"
                    width="50px"
                  />
                  <h2 v-else class="mb-0" style="font-size: 22px">
                    {{ positif.value }}
                  </h2>
                  <p class="text-white mb-0">ORANG</p>
                </div>
                <div class="ml-auto">
                  <img
                    src="../../assets/img/sedih.png"
                    width="50"
                    height="50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- COL END -->
        <div
          class="col-sm-12 col-md-6 col-lg-6 col-xl-3"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="card bg-blue-light img-card box-secondary-shadow">
            <div class="card-body">
              <div class="d-flex">
                <div class="text-white">
                  <p class="text-white mb-0">TOTAL SEMBUH</p>
                  <img
                    src="https://gibei.stiesia.ac.id/uploads/images/spinner.gif"
                    v-if="loading"
                    width="50px"
                  />
                  <h2 v-else class="mb-0" style="font-size: 22px">
                    {{ sembuh.value }}
                  </h2>
                  <p class="text-white mb-0">ORANG</p>
                </div>
                <div class="ml-auto">
                  <img
                    src="../../assets/img/ketawa.png"
                    width="50"
                    height="50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- COL END -->
        <div
          class="col-sm-12 col-md-6 col-lg-6 col-xl-3"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="card bg-dark img-card box-success-shadow">
            <div class="card-body">
              <div class="d-flex">
                <div class="text-white">
                  <p class="text-white mb-0">TOTAL MENINGGAL</p>
                  <img
                    src="https://gibei.stiesia.ac.id/uploads/images/spinner.gif"
                    v-if="loading"
                    width="50px"
                  />
                  <h2 v-else class="mb-0" style="font-size: 22px">
                    {{ meninggal.value }}
                  </h2>
                  <p class="text-white mb-0">ORANG</p>
                </div>
                <div class="ml-auto">
                  <img
                    src="../../assets/img/menangisparah.png"
                    width="60"
                    height="50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- COL END -->
        <div
          class="col-sm-12 col-md-6 col-lg-6 col-xl-3"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="card bg-red img-card box-success-shadow">
            <div class="card-body">
              <div class="d-flex">
                <div class="text-white">
                  <h2 class="mb-0" style="font-size: 23px">INDONESIA</h2>

                  <img
                    src="https://gibei.stiesia.ac.id/uploads/images/spinner.gif"
                    v-if="loading"
                    width="50px"
                  />
                  <p v-else class="text-white mb-0" style="font-size: 12px">
                    <b>{{ indo.positif }}</b> POSITIF,
                    <b>{{ indo.sembuh }}</b> SEMBUH,
                    <b>{{ indo.meninggal }}</b> MENINGGAL
                  </p>
                </div>

                <div class="ml-auto">
                  <img
                    src="https://kawalcorona.com/uploads/indonesia-PZq.png"
                    width="50"
                    height="50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- COL END -->
        <div
          class="col text-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p>Update terakhir : {{ tanggal.tanggal }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Box",
  props: ["indo", "positif", "meninggal", "sembuh", "loading", "tanggal"],
};
</script>