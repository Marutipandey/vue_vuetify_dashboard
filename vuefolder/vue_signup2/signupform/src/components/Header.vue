<template>
  <div class="nav">
    <a href="">Home</a>
    <a href="">Add Restorent</a>
    <a href="">Update Restorent</a>
    <a href="">Logout</a>
  </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderR',
    methods: {
      logout() {
        localStorage.clear();
        this.$router.push({name:'Login'})
      },
    }, 
  };
  </script>
  
  <style>
  .nav{
    background-color:#333;
    overflow: hidden;
  }
  </style>
  