<template>
    <div>
      <h1>Home Component {{"Hello".length}}</h1>
      <p>Email {{ email }}</p>
      <h1>Mobile:{{mobile}}</h1>
      <h1>MOBILE:{{mobile=22222}}</h1>

      <h1>Name:{{getName()}}</h1>

    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeS',
    data(){
        return{
            email:'pp874765@gmail.com',
            mobile:'12345566543',
            getName:function(){
              return "km priyanka"
            }
        }
    }
   
  };
  </script>
  
  <style scoped>
  h1 {
    color: red;
  }
  </style>
  