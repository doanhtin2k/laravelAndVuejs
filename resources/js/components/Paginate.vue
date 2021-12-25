<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
            <a class="page-link"  aria-label="Previous" @click="showCategory(links.prev)">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
            </li>
            <li class="page-item" v-for="n in meta.last_page"><a class="page-link" @click="showCategory('http://localhost/api/category?page='+n)">{{n}}</a></li>
            <li class="page-item">
            <a class="page-link" aria-label="Next" @click="showCategory(links.next)">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
         data(){
           return{
           }
       },
       created: function(){
           //console.log(meta);
       },
        props:{
            meta: Object,
            links: Object,
        },
        methods:{
           showCategory(uri){
               this.$emit("click-showCategory",uri);
           }
        },
    }
</script>
