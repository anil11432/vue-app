<template>
  <div>
    <button type="button" class="btn btn-success">New Recipe</button>
    <hr>
    <ul class="list-group">
      <recipe-item @listClick="item($event)" v-for="recipe in recipes" :key="recipe" :recipe="recipe"></recipe-item>
    </ul>
  </div>
</template>

<script>
import RecipeItem from './RecipeItem.vue';
export default {
  data() {
    return {
      recipes: [
        {
          name: 'Test recipe 1',
          description: '1 description',
          image: '/src/assets/logo.png'
        },
        {
          name: 'Test recipe 2',
          description: '2 description',
          image: '/src/assets/logo.png'
        }
      ]
    }
  },
  components: {
    RecipeItem
  },
  methods:{
    item: function(e){
      this.$emit('listClicked', e);
    }
  }
}
</script>

