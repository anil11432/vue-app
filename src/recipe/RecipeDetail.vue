<template>
  <div>
      <div class="row">
            <h1>{{ recipe.name }}</h1>
            <img class="col-md-8" :src="recipe.image" alt="...">
            <div class="btn-group col-md-12">
                <div class="dropdown" v-dropdown>
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <p>{{ recipe.description }}</p>
  </div>
</template>

<script>
export default {
    props: ['recipe'],
    methods:{
        new(){
            console.log(recipe);
        }
    }
}
</script>
