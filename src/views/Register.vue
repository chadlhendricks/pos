<template>
  <section>
    <form @submit.prevent="register" class="form neu-border">
      <h2 class="form-heading">Register</h2>
      <input
        class="form-input neu-border-inset"
        type="text"
        v-model="name"
        placeholder="Name"
      />
      <input
        class="form-input neu-border-inset"
        type="email"
        v-model="email"
        placeholder="Email"
      />
      <input
        class="form-input neu-border-inset"
        type="text"
        v-model="contact"
        placeholder="Contact Number"
      />
      <input
        class="form-input neu-border-inset"
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <button type="submit" class="form-btn neu-border">Sign up</button>
      <!-- <div class="form-social-login">
        <button class="form-btn neu-border form-social-btn">
          <i class="fab fa-google"></i>
        </button>
        <button class="form-btn neu-border form-social-btn">
          <i class="fab fa-facebook-f"></i>
        </button>
      </div> -->

      <p>
        Already a member?
        <router-link :to="{ name: 'Login' }">Sign in</router-link>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      contact: "",
      password: "",
    };
  },
  methods: {
    register() {
      fetch("https://fente.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          contact: this.contact,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("jwt", json.jwt);
          alert("User is signed up");
          (this.name = ""),
            (this.email = ""),
            (this.contact = ""),
            (this.password = ""),
            this.$router.push({ name: "Login" });
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
  background-attachment: fixed;
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
  background: #b4b2b2;
  box-shadow: 8px 8px 15px #525151, -8px -8px 15px #5a5959;
}
.neu-border-inset {
  border-radius: 30px;
  background: #70cab309;
  box-shadow: inset 8px 8px 15px #9c9c9c, inset -8px -8px 15px #8a8989;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin-inline: auto;
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
