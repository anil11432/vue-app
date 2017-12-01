<template>
    <div>
        <div class="row">
            <div class="col-md-5">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input v-model="itemName" type="text" class="form-control" id="name">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="amount">Amount</label>
                    <input v-model="amount" type="text" class="form-control" id="amount">
                </div>
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-success" @click="add()">Add</button>
            <button type="button" class="btn btn-primary">Clear</button>
        </div>
    </div>
</template>


<script>
export default {
    props:['parent','item'],
    data:{
        itemName: null
    },
    created(){
        this.parent.$on('itemEdit',function(item){
                console.log(item);
            });
    },
    methods:{
        add(){
            // console.log(this.itemName);
             this.parent.$emit('itemName', this.itemName);
              this.parent.$emit('itemAmount', this.amount);
        },
        new1(){
        }
    }
  
}
</script>
