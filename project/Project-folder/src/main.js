import { createApp } from 'vue';
import App from './App.vue';
import Menu from './components/Menu.vue';
import ContactForm from './components/ContactForm.vue';
import store from "./store"; 

const app = createApp(App);
app.component('Menu', Menu);
app.component('ContactForm', ContactForm);
app.use(store);
app.mount('#app');
