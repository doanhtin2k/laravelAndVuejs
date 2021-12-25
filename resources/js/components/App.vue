
<template>
     <div class="">
            <div class="sidebar close">
                <div class="logo-details">
                    <i class='bx bxl-c-plus-plus'></i>
                    <span class="logo_name">CodingLab</span>
                </div>
                <ul class="nav-links">
                    <li>
                        <a href="home">
                        <i class='bx bx-grid-alt' ></i>
                        <span class="link_name">Dashboard</span>
                        </a>
                        <ul class="sub-menu blank">
                            <li><a class="link_name" href="home">Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link :to="{name:'Category'}" class="btn btn-outline-success" style="margin:5px">
                        <i class='bx bx-collection' ></i>
                        <span class="link_name">Category</span>
                        </router-link>
                        <ul class="sub-menu blank">
                            <li><router-link :to="{name:'Category'}" class="link_name" style="margin:5px">Category</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <div class="iocn-link">
                            <a href="book">
                            <i class='bx bx-book-alt' ></i>
                            <span class="link_name">Book</span>
                            </a>
                            <i class='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul class="sub-menu">
                            <li><a class="link_name" href="book">Book</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="iocn-link">
                            <a href="user">
                            <i class='bx bx-book-alt' ></i>
                            <span class="link_name">User Manager</span>
                            </a>
                            <i class='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul class="sub-menu">
                            <li><a class="link_name" href="user">User Manager</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="iocn-link">
                            <a href="bill">
                            <i class='bx bx-book-alt' ></i>
                            <span class="link_name">Bill Manager</span>
                            </a>
                            <i class='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul class="sub-menu">
                            <li><a class="link_name" href="bill">Bill Manager</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="profile-details">
                            <div class="profile-content">
                            <!--<img src="image/profile.jpg" alt="profileImg">-->
                            </div>
                            <div class="name-job">
                            <div class="profile_name"><a href="logout">Logout</a></div>
                            </div>
                            <i class='bx bx-log-out' ></i>
                        </div>
                    </li>
                </ul>
            </div>
            <section class="home-section">
                <div class="home-content">
                    <i class='bx bx-menu' ></i>
                    <span class="text">Dashboard</span>
                </div>
                <div class="main container" style="padding-top:100px">
                 
                    <router-view></router-view>

                </div>
            </section>

     </div>
</template>

<style>
     .fade-enter-active, .fade-leave-active {
     transition: opacity .5s
    }
     .fade-enter, .fade-leave-active {
     opacity: 0
     }
</style>

<script>
     export default{
     }
</script>
