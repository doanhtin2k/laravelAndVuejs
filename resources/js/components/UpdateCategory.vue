<template>
    <div class="">
        <form action="" method="post" @submit.prevent ="updateCategory">
        <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" class="form-control" placeholder="tên danh mục" name="title" v-model= "category.title">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Description</label>
            <textarea class="form-control" placeholder="mô tả" name="description" rows="10" v-model= "category.description"></textarea>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>
 
<script>
    export default {
        data(){
           return{
               category:{
                   title: "",
                   description: "",
               },
               alert:'',
               chu_de: 'Edit category',
           }
       },
        mounted() {
            console.log('Component mounted.')
        },
        created(){
            this.showCategory();
        },
        methods: {
            updateCategory(){
               console.log(this.$route);
               let uri = "/api/category/"+ this.$route.params.id;
               console.log(uri);
               this.axios.put(uri, this.category).
               then((res) => {
                   console.log("thanh cong");
                    this.$router.push({name: "Category"});
               }).
               catch((res) => {
                   this.alert = error;
                   console.log("error");
               });
            },
            showCategory(){
                let uri = "/api/category/"+ this.$route.params.id;
                   this.axios.get(uri).
                   then((res) => {
                       
                       this.category = res.data;
                   }).
                   catch((res) => {
                       this.alert = error;
                       console.log("error");
                   });
            }
        }
    }
</script>