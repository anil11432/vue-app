<template>
  <div>
    <navbar @navChange="selectedHeader = $event;"></navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <recipe v-if="selectedHeader == 'recipe'"></recipe>
        </div>
        <div class="col-md-12">
          <shoping v-if="selectedHeader == 'shopping'"></shoping>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './header/Nav.vue';
import Recipe from './recipe/Recipe.vue';
import Shoping from './shoping/Shoping.vue';
export default {
  name: 'app',
  components: {
    Navbar, Recipe, Shoping
  },
  data () {
    return {
      selectedHeader: 'shopping'
    }
  }
}
</script>