<template>
  <div>
        <div class="row">
            <div class="col-md-4">
                <recipe-list @listClicked="clicked($event)"></recipe-list>
            </div>
            <div class="col-md-8">
                <recipe-detail :recipe="selectedRecipe" v-if="selectedRecipe"></recipe-detail>
            </div>
        </div>
        <button @click="Linegraph()" class="btn btn-success">Line graph</button>
        <button @click="Bargraph()" class="btn btn-success">Bar graph</button>
        <button @click="Piegraph()" class="btn btn-success">Pie Graph</button>
    <div class="container-fluid">
        <div style="width: 500px" class="col-md-4"><canvas id="myLine" width="200" height="200"></canvas></div>
        <div style="width: 500px" class="col-md-4"><canvas id="myBar" width="200" height="200"></canvas></div>
        <div style="width: 500px" class="col-md-4"><canvas id="myPie" width="200" height="200"></canvas></div>
    </div>
    
  </div>
</template>

<script>
import RecipeList from './RecipeList.vue';
import RecipeDetail from './RecipeDetail.vue';
import Chart from "Chart.js";
export default {
    data() {
        return {
            selectedRecipe: null,
            asdf:[],
            dates: []
        }
    },
    components: {
        RecipeList, RecipeDetail
    },
    methods:{
        clicked : function(e){
            this.selectedRecipe = e;
        },
        Linegraph: function(){
            var ctx = document.getElementById("myLine");
            var root = this;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: root.dates,
                    datasets: [{
                        label: 'temperature of Balrampur',
                        data: root.asdf,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:false
                            }
                        }]
                    }
                }
            });
            

            var x;
            var v = 4;
            var Dt;
            var root = this;
            this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q=balrampur&APPID=93a133ca00e58b0111679ca85d4fcc19',
            {}).then(response=>{
                for(x=0; x<5; x++){
                    console.log(response.body.list[v].dt_txt);
                    Dt = response.body.list[v].dt_txt;
                    Dt =  Dt.split(" ", 2);
                    Dt = Dt[0];
                    root.dates.push(Dt);
                    var d = response.body.list[v].main.temp;
                    root.asdf.push(d-274.15);
                    Dt = 0;
                    v = v+8;
                    myChart.update();   
                } 
                root.dates = [];
                root.asdf = [];
            });
        },
        Bargraph: function(){
            var ctxB = document.getElementById("myBar");
            var root = this;
            var myBar = new Chart(ctxB, {
                type: 'bar',
                data: {
                    labels: root.dates,
                    datasets: [{
                        label: 'temperature of Noida',
                        data: root.asdf,
                        
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
            var x;
            var v = 4;
            var Dt;
            var root = this;
            this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q=noida&APPID=93a133ca00e58b0111679ca85d4fcc19',
            {}).then(response=>{
                for(x=0; x<5; x++){
                    console.log(response.body.list[v].dt_txt);
                    Dt = response.body.list[v].dt_txt;
                    Dt =  Dt.split(" ", 2);
                    Dt = Dt[0];
                    root.dates.push(Dt);
                    var d = response.body.list[v].main.temp;
                    root.asdf.push(d-274.15);
                    Dt = 0;
                    v = v+8;
                    myBar.update();   
                } 
                root.dates = [];
                root.asdf = [];
            });
        },
        Piegraph: function(){
            var ctx1 = document.getElementById("myPie");
            var root = this;
            var myPie = new Chart(ctx1, {
                type: 'doughnut',
                data: {
                    labels: root.dates,
                    datasets: [{
                        label: 'temperature of Mumbai',
                        data: root.asdf,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    // scales: {
                    //     yAxes: [{
                    //         ticks: {
                    //             beginAtZero:true
                    //         }
                    //     }]
                    // }
                }
            });
            var x;
            var v = 4;
            var Dt;
            var root = this;
            this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q=mumbai&APPID=93a133ca00e58b0111679ca85d4fcc19',
            {}).then(response=>{
                for(x=0; x<5; x++){
                    console.log(response.body.list[v].dt_txt);
                    Dt = response.body.list[v].dt_txt;
                    Dt =  Dt.split(" ", 2);
                    Dt = Dt[0];
                    root.dates.push(Dt);
                    var d = response.body.list[v].main.temp;
                    root.asdf.push(d-274.15);
                    Dt = 0;
                    v = v+8;
                    myPie.update();   
                } 
                root.dates = [];
                root.asdf = [];
            });

        }
        
    },


    mounted(){
    }
}

</script>