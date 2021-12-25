<template>
<div class="content">
        <h1 style="text-align:center">{{chu_de}}</h1>
        <section>
            <router-link :to="{name:'StoreCategory'}" class="btn btn-outline-success" style="margin:5px">Thêm mới Category</router-link>
        </section>
        <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">created_at</th>
                <th scope="col">updated_at</th>
                <th scope="col">action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="category in categories">
                <th scope="row">{{category.id}}</th>
                <td>{{category.title}}</td>
                <td>{{category.description}}</td>
                <td>{{category.created_at}}</td>
                <td>{{category.updated_at}}</td>
                <td>
                    <router-link :to="{name: 'UpdateCategory', params: {id : category.id}}" class="link_name">
                            Edit
                    </router-link>
                    <a class="link_name" @click= "deleteCategory(category.id)"
                    style="display:inline-block; margin-left:10px">
                        delete
                    </a>
                </td>
            </tr>
        </tbody>
        </table>
        <div>
              <Paginate :meta= "meta" :links= "links" v-on:click-showCategory="Change_uri" >
              </Paginate>  
        </div>

</div>




</template>
<script>
import Paginate from './Paginate.vue';
   export default{
       data(){
           return{
               categories:[],
               alert:'',
               chu_de: 'Danh sach category',
               links:{},
               meta:{},
               uri:"/api/category",
           }
       },
       created:function(){
           this.showCategory();
       },
       components:{
           Paginate,
       },
       methods:{
           showCategory(){
               this.axios.get(this.uri)
               .then((res)=>{
                   this.categories=res.data.data;
                   this.meta = res.data.meta;
                   this.links = res.data.links;
                })
               .catch((error)=>{this.alert=error});
           },
           deleteCategory(id){
               console.log(id);
               if(confirm('Are you sure?')){
                   this.axios.delete('/api/category/'+id)
                   .then((res)=>{
                       this.categories = res.data.data;
                       this.meta = res.data.meta;
                       this.links = res.data.links;
                    })
                   .catch((error)=>{this.alert=error});
               }
           },
           Change_uri(uri){
               this.uri = uri;
           },
        //    test(uri)
        //    {
        //        console.log(uri);
        //    }
       },
       watch:{
           uri(){
               this.axios.get(this.uri)
               .then((res)=>{
                   this.categories=res.data.data;
                   this.meta = res.data.meta;
                   this.links = res.data.links;
                })
               .catch((error)=>{this.alert=error});
           },           
       }
   }
</script>