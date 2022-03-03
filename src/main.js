import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as mdb from '../node_modules/mdb-ui-kit'
import 'mdb-ui-kit/css/mdb.min.css';
import '../src/assets/style/style.css';


createApp(App).use(router).mount('#app')
