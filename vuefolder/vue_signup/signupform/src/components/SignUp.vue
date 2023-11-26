<template>
    <img src='../assets/download.png' alt="" class="logo">
    <h1>Signup</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="name"/>
        <input type="text" placeholder="Enter Email" v-model="email"/>
        <input type="password" placeholder="Enter Password" v-model="password"/>
        <button v-on:click="signUp">Sign Up</button>
    </div>
</template>



<script>
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async signUp() {
      console.warn('signup', this.name, this.email, this.password);
      let result = await axios.post('http://localhost:3000/user', {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        alert('Sign Up Done');

      }
      localStorage.setItem("user-info",JSON.stringify(result.data))
    },
  },
};
</script>


<style>
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;

}


.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color:skyblue ;
    cursor: pointer;

}


</style>