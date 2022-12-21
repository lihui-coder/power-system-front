import Vue from "vue";
import router from './router/index.js'
import VueRouter from "vue-router"
import './assets/css/common.css'

import app from './app.vue'

Vue.use(VueRouter)

new Vue({
    el: "#app",
    router,
    render: h => h(app)
})
console.log('test');


// const path = require("path")

// module.exports = {
//     entry: './src/main.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename:"index.bundle.js"
//     }
// }