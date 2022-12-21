<template>
    <div id="app">
        <router-link to="/home">home</router-link>
        <router-link to="/person">person</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
</style>