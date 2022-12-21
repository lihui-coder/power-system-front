<template>
    <div class="person">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: 'Person',
    data(){
        return {
            msg: 'person'
        }
    }
}
</script>

<style>
.person {
    color: pink;
}
</style>