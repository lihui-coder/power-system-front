<template>
    <div class="home fontColor">
        <input type="text" v-model="password">
        <button @click="login">login</button>>
        <!-- <myInput></myInput> -->
    </div>
</template>

<script>
// import myInput from '../components/myInput.vue';
// import myInput from '@components/myInput.vue';
// import api from '../api/index'
import axios from 'axios'

export default {
    name: 'Home',
    // components: {myInput},
    data(){
        return {
            password: 123
        }
    },
    methods: {
        login(){
            if(this.password == 123){
                axios({
                    method: 'GET',
                    url: '/login',
                    params: {
                        password: this.password
                    }
                }).then(response => {
                    alert(response.data+'登陆成功');
                }).catch(error => {
                    alert(error+'登陆失败')
                })
        }
    }
}
}
</script>

<style>
.home {
    font-size: 18px;
}
</style>