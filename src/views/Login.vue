<template>
  <section>
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
        <router-link :to="{ name: 'Register' }">Create an account</router-link>
      </p>
    </form>
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
  background-image: url("https://picsum.photos/1920/1080");
  background-size: cover;
  height: 100vh;
}

form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.neu-border {
  border-radius: 30px;
  background: #f5f5f56b;
  box-shadow: 8px 8px 15px #616161, -8px -8px 15px #757575;
}

/* .neu-border {
    border-radius: 30px;
    background: #ffffff73;
    box-shadow: 8px 8px 15px #403f3f, -8px -8px 15px #716f6f;} */
.neu-border-inset {
  border-radius: 30px;
  background: #818181;
  box-shadow: inset 8px 8px 15px #5a5a5a, inset -8px -8px 15px #636262;
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
</style>
