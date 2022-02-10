import { createApp } from 'vue'
import App from './App.vue'

import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

import './src/assets/custom.scss'

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)

createApp(App).mount('#app')
