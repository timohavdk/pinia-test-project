import {createApp} from "vue";
import App from "./components/app/app.vue";
import {createPinia} from "pinia";

const container = document.createElement('div');
container.id = 'app';
document.body.appendChild(container);

const app = createApp(App);
const pinia = createPinia();
app
    .use(pinia)
    .mount('#app');

