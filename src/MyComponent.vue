<template>
    <div>
        <h1>My name is {{ name }}</h1>
        <p>This is blue in color</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Anil'
            }
        }
    }
</script>

<style scoped>
    p {
        color:blue;
    }
</style>
