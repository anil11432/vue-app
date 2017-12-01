<template>
        <ul class="list-group">
                <li v-for="(item, index) in items" @click="listItem($event)" :key="item" class="list-group-item">{{item.name}}({{item.amount}})
                        <button v-on:click="del(index)" class="btn btn-danger btn-xs right">Delete</button>
                </li>
        </ul>
</template>


<script>
import ShoppingEdit from './ShoppingEdit.vue';
export default {
        data(){
                return{
                        items:[
                                {
                                name:'apple',
                                amount:10
                                 },
                                {
                                name:'mango',
                                amount: 20
                                }
                        ]
                }
        },
        props:['parent'],

        created(){
                var root =this;
                var n
                this.parent.$on('itemName',function(a){
                        console.log(a);
                        n=a;
                });
                this.parent.$on('itemAmount',function(b){
                        // console.log(b);
                        console.log('n var',n);
                        root.items.push( {name: n , amount : b});
                });
        },
        methods:{
                del:function(index){
                        this.items.splice(index,1);
                },
                listItem:function(e){
                        console.log(this.e);
                        this.parent.$emit('itemEdit',this.item);
                }
        }
}
</script>

<<style scoped>
.right{
        float: right;
}
</style>


