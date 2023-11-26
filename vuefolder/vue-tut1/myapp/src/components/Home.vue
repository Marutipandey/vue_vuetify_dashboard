<template>
    <div>
      <h1>Get Input Field Values</h1>
      <input type="text" placeholder="Enter Email" v-model="email" />
      <br /><br />
      <input type="password" placeholder="Enter Password" v-model="password" />
      <br /><br />
      <button @click="getdata" type="button">Get Value</button>
      <div>
        <strong>Email:</strong> {{ email }}
      </div>
      <div>
        <strong>Password:</strong> {{ password }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomeA",
    data() {
      return {
        email: "", // Data property to store email input
        password: "", // Data property to store password input
      };
    },
    methods: {
      getdata() {
        console.warn("Function called");
        console.log("Email:", this.email);
        console.log("Password:", this.password);
      },
    },
  };
  </script>
  