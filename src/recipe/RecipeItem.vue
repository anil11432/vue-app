<template>
    <li class="list-group-item" @click="itemSelected">
        <h1 v-red>{{ recipe.name }}</h1>
        <p>{{ recipe.description }}</p>
        <img :src="recipe.image">
    </li>
</template>


<script>
export default {
    props: ['recipe'],
    methods: {
        itemSelected() {
            this.$emit('listClick', this.recipe)
        }
    }
}
</script>

<style scoped>
img{
    width: 50px;
    float: right;
    position: relative;
    top: -75px;
  }
</style>
