<template>
  <div class="container">
    <div class="left">
      <div class="left-items">
        <div class="left-item-text">
          <p>STAY IN CONTACT</p>
          <h1>Get in Touch</h1>
        </div>
        <div class="left-item-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone No." />
          <input type="text" placeholder="Email'Id" />
          <input type="text" placeholder="Project Brief..." />
          <div class="checkbox">
            <input type="checkbox" />
            <span>Subscribe Newsletter</span>
          </div>
          <router-link to="/third_page" class="button"
            >Send Message</router-link
          >

        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-items">
        <img src="../assets/photo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans&family=Inter&display=swap");
.container {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
}

.left {
  width: 50%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  float: left;
}

.left-items {
  display: flex;
  width: 431px;
  height: 557px;
  padding: 75px;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--foundation-dark-normal, #5c5c5c);
  background: var(--foundation-light-white, #fff);
  box-shadow: 0px 8px 25px 0px #ece9f4;
}

.left-item-text p {
  color: var(--foundation-painted-pony-darker, #413529);
  text-align: center;
  font-family: "Encode Sans", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: -20px;
}

.left-item-text h1 {
  color: var(--foundation-painted-pony-darker, #413529);
  text-align: center;
  font-family: "Encode Sans", sans-serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
}

.left-item-form {
  margin-bottom: 50px;
  width: 450px;
}

.left-item-form input {
  outline: none;
  display: flex;
  width: 407px;
  padding: 15px 10px;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-family: "Encode Sans", sans-serif;
  flex: 1 0 0;
  border: none;
  margin-bottom: 20px;
  border-bottom: 0.7px solid var(--foundation-dark-normal, #5c5c5c);
  background: var(--foundation-light-white, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
}

.left-item-form input:nth-child(1),
.left-item-form input:nth-child(2) {
  display: flex;
  float: left;
  width: 38%;
}

.left-item-form input:nth-child(2) {
  display: flex;
  float: right;
}

.left-item-form input::placeholder {
  color: var(--foundation-dark-light-hover, #a7a7a7);
  font-family: "Encode Sans", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
}

.checkbox {
  margin-top: 50px;
}

.checkbox input {
  width: 20px;
  height: 20px;
  margin-top: -1px;
  margin-left: -70px;
  border: none;
  box-shadow: none;
}

.checkbox span {
  color: var(--foundation-dark-normal, #5c5c5c);
  text-align: center;
  font-family: "Encode Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 16.8px */
  margin-left: -65px;
}

.left-item-form .button {
  display: flex;
  width: 407px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 0.5px solid #c4c4c4;
  background: var(--foundation-dark-normal, #5c5c5c);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  color: #fff;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 24px */
  border: none;
  text-decoration: none;
  margin-top: 50px;
}

.left-item-form .button:hover {
  background: var(--foundation-painted-pony-normal-active, #fff);
  border: 1px solid #5c5c5c;
  color: #5c5c5c;
}

//===================== RIGHT SIDE ==================================
.right {
  width: 50%;
  display: flex;
  height: 100%;
  float: right;
}

.right-items img {
  width: 100%;
  height: 100%;
}
</style>
