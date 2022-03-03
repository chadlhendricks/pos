<template>
  <div class="home">
    <Topbar />
    <Navbar />
    <ContactUs />

    <Footer />
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
import Navbar from "../components/Navbar.vue";
import FilterSidebar from "../components/FilterSidebar.vue";
import ContactUs from "../components/ContactUs.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Topbar, Navbar, FilterSidebar, Footer, ContactUs },
};
</script>
