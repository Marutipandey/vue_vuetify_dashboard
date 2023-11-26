<template>
    <Header />
    <h1>Hello, Welcome to update Restorent Page</h1>
  </template>
  
  <script>
  // import Header from './Header.vue';
  import Header from './Header.vue';
  export default {
    name: "UpdateE",
    components: {
      Header // Use an object to specify components
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({ name: 'signUp' });
      }
    }
  }
  </script>
  