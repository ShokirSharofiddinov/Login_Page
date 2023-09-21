<template>
  <div class="page">
    <div class="container">
      <div class="boxes">
        <div class="box">
          <div class="iconDiv">
            <img src="../assets/phone.svg" alt="Icon" class="left-img" />
          </div>
          <div class="right-content">
            <h1>Give Us a Call</h1>
            <p>+91 098 098 8393</p>
          </div>
        </div>

        <div class="box">
          <div class="iconDiv">
            <img src="../assets/envelope.svg" alt="Icon" class="left-img" />
          </div>
          <div class="right-content">
            <h1>Send Us an Email</h1>
            <p>ecample@gmail.com</p>
          </div>
        </div>

        <div class="box">
          <div class="iconDiv">
            <img src="../assets/pin.svg" alt="Icon" class="left-img" />
          </div>
          <div class="right-content">
            <h1>Drop BY and Talk</h1>
            <p>
              Unit 8012- 8014, Chandaka Industrial Estate, K I, I T University,
              Patia, Bhubaneswar, Odisha 751024
            </p>
          </div>
        </div>
        <div class="iconsDiv">
          <div class="icon"><img src="../assets/Vector.svg" alt="" /></div>
          <div class="icon"><img src="../assets/Vector2.svg" alt="" /></div>
          <div class="icon"><img src="../assets/Vector3.svg" alt="" /></div>
          <div class="icon"><img src="../assets/Vector4.svg" alt="" /></div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="right">
        <div class="right-items">
          <div class="right-item-text">
            <p>STAY IN CAONTACT</p>
            <h1>Get in Touch</h1>
          </div>
          <div class="right-item-form">
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="MOBILE" />
            <input type="text" placeholder="EMAIL" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="MESSAGE"
            ></textarea>
            <router-link to="/second_login" class="button">SUBMIT</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans:wght@500&display=swap");

.page {
  display: flex;
  height: 100vh;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
}

.boxes {
  margin: auto;
}

.box {
  display: flex;
  margin-bottom: 40px;
}

.iconDiv {
  width: 25px;
  height: 25px;
  display: flex;
  padding: 33px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  border: 2px solid #a78768;
  margin-top: 17px;
}

.left-img {
  width: 23px;
  height: 23px;
}

.right-content {
  margin-left: 5%;
}

.box h1 {
  color: #a78768;

  font-family: "Encode Sans", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
}

.box p {
  color: #0a0a0a;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: capitalize;
}

p {
  font-size: 14px;
  width: 430px;
  margin: 0;
}

.iconsDiv {
  display: flex;
  padding: 0px 1px;
  align-items: center;
  gap: 22px;
  align-self: stretch;
}

.icon {
  display: flex;
  padding: 14px 13px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  border: 1.2px solid #8b7157;
}

.icon img {
  width: 30px;
  height: 26px;
}

/* right */

.right {
  width: 100%;
  display: flex;
  height: 100%;
  float: right;
  background: var(--foundation-painted-pony-normal, #b99674);
}

.right-items {
  display: flex;
  width: 531px;
  height: 657px;
  padding: 25px 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--foundation-light-white, #fff);
  margin-top: 99px;
  margin-left: 162px;
}
.right-item-text {
  margin-top: 50px;
}

.right-item-text p {
  color: var(--foundation-painted-pony-darker, #413529);
  text-align: center;
  font-family: "Encode Sans", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: -20px;
  line-height: 25px;
}

.right-item-text h1 {
  color: var(--foundation-painted-pony-darker, #413529);
  text-align: center;
  font-family: "Encode Sans", sans-serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
}

.right-item-form {
  margin-bottom: 50px;
}

.right-item-form input {
  outline: none;
  display: flex;
  width: 484px;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;
  border: 0.5px solid var(--foundation-dark-lighter, #b6b6b6);
}

.right-item-form textarea {
  outline: none;
  display: flex;
  width: 484px;
  padding: 20px 20px 70px 20px;
  align-items: center;
  height: 30px;
  gap: 10px;
  border: 0.5px solid var(--foundation-dark-lighter, #b6b6b6);
  margin-bottom: 20px;
  resize: none;
}

.right-item-form textarea::placeholder {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.right-item-form .button {
  display: flex;
  width: 484px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--foundation-painted-pony-normal-active, #94785d);
  color: var(--foundation-light-white, #fff);
  text-align: center;
  font-family: "Encode Sans", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 27.6px */
  border: none;
  text-decoration: none;
}

.right-item-form .button:hover {
  background: var(--foundation-painted-pony-normal-active, #fff);
  border: 1px solid #94785d;
  color: #94785d;
}
</style>
