<template>
  <div>
    <shopping-edit :parent="this"></shopping-edit>
    <hr>
    
    <shopping-list :parent="this"></shopping-list>
  </div>
</template>

<script>
import ShoppingEdit from './ShoppingEdit.vue';
import ShoppingList from './ShoppingList.vue';
export default {
    components: {
        ShoppingEdit, ShoppingList
    }
}
</script>

<style scoped>
    #name{
        width: 300px;
    }
    #amount{
        width: 50px;
    }
</style>

