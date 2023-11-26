import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Ensure the path is correct

const app = createApp(App);

app.use(vuetify);

app.mount('#app');
