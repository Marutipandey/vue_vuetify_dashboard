<template>
  <div>
    <Header />
    <h1>Hello, Welcome on Home Page</h1>
  </div>
</template>

<script>
import Header from './Header.vue'; 
// import Header from '@/components/Header.vue'; 

export default {
  name: "HomeE",
  components: {
    Header     
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
  }
}
</script>
