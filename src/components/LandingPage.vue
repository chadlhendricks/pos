<template>
  <section>
    <div class="row">
      <div class="col-6" id="landingtitle">
        <h3 class="heading">Musa</h3>
        <p class="paragraph">When words fail, music speaks.</p>
      </div>

      <div class="col-6" id="landingform">
        <form @submit.prevent="login" class="form neu-border">
          <h2 class="form-heading">Login</h2>
          <input
            class="form-input neu-border-inset"
            type="email"
            v-model="email"
            placeholder="Email"
          />
          <input
            class="form-input neu-border-inset"
            type="password"
            v-model="password"
            placeholder="Password"
          />
          <button type="submit" class="form-btn neu-border">Sign in</button>
          <!-- <div class="form-social-login">
        <button class="form-btn neu-border form-social-btn">
          <i class="fab fa-google"></i>
        </button>
        <button class="form-btn neu-border form-social-btn">
          <i class="fab fa-facebook-f"></i>
        </button>
      </div> -->

          <p>
            Not a member?
            <router-link :to="{ name: 'Register' }"
              >Create an account</router-link
            >
          </p>
          <p>
            Closing your Account?
            <router-link :to="{ name: 'Delete' }">Delete User</router-link>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      fetch("https://fente.herokuapp.com/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.jwt) {
            localStorage.setItem("jwt", json.jwt);
            alert("User logged in");
            return this.$router.push({ name: "Products" });
          }
          alert("cannot login");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
section {
  width: 100vw;
  height: 100vh;
  margin: auto;
  background: linear-gradient(rgba(59, 19, 19, 0.5), rgba(54, 45, 45, 0.5)),
    url("../assets/images/logos/background.jpeg");
  background-size: cover;
  text-align: center;
  position: relative;
  z-index: 10;
}

#landingtitle {
  margin-top: 150px;
}

.heading {
  font-size: 100px;
  color: whitesmoke;
}

.paragraph {
  font-size: 28px;
  color: grey;
}

.row {
  text-align: center;
  padding-top: 270px;
  backdrop-filter: blur(5px);
  height: 100vh;
}

.neu-border {
  border-radius: 30px;
  background: #ffffff73;
}
.neu-border-inset {
  border-radius: 30px;
  background: #f5f5f5;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  margin-inline: auto;
  max-width: 600px;
}

.form-heading {
  text-align: center;
  text-transform: uppercase;
}

.form-input,
.form-btn {
  border: none;
  outline: none;
  padding: 20px;
}

.form-btn {
  cursor: pointer;
  transition: all 0.1s linear;
}

.form-btn:hover {
  transform: scale(1.05);
}

.form-social-login {
  display: flex;
  justify-content: space-between;
}

.form-social-btn {
  width: 45%;
  color: #333;
}

@media screen and (max-width: 500px) {
  .row {
    top: 0;
  }
}

#landingform {
  -webkit-animation: slide-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
  }
}
</style>
