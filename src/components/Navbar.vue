<template>
     <div class="nav">
            <div class="logo">
                <img src="../assets/png/logo.png" style="height:40px; width:150px !important;">
            </div>
            <div class="links">
                <router-link to="/">Virus Korona</router-link>
                <router-link to="/information">Informasi</router-link>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>