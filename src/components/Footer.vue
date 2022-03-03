<template>
<footer class="text-center text-lg-start text-muted">
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <div class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Musa
          </h6>
          <p>
                  </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Site links
          </h6>
          <p>
            <a href="/" class="text-reset">Home</a>
          </p>
          <p>
            <a href="/products" class="text-reset">Products</a>
          </p>
          <p>
            <a href="/about" class="text-reset">About Us</a>
          </p>
          <p>
            <a href="/contact" class="text-reset">Help</a>
          </p>
          <p>
            <a href="/contact" class="text-reset">Contact Us</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> Cape Town, SA</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@musa.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 27 21 567 12288</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </div>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Musa.com</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->

</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  z-index: 202;
  bottom: 0;
  background: black;
}

p {
  color: white;
}
p:hover {
  color: rgb(59, 255, 232)
}

h6 {
  color: #2a9d8fff;
}

</style>
