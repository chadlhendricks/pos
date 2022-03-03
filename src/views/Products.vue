<template>
  <Navbar2 />
  <Navbar/>
  <ProductsNav />
  <ProductPage />
  <Footer />
</template>

<script>
import ProductPage from "../components/ProductPage.vue";
import ProductsNav from "../components/ProductsNav.vue";
import Navbar2 from "../components/Navbar2.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { ProductPage, ProductsNav, Navbar2, Footer },
};
</script>

<style></style>
