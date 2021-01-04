import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/bootstrap4.css'
import './assets/css/styles.css'
import './assets/css/box.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.config.productionTip = false

new Vue({
    created() {
        AOS.init()
    },
    router: router,
    render: h => h(App)
}).$mount('#app')