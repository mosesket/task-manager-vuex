<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="#">Task Management System</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link text-white" href="/create-task">Create Task</a>
                        <a class="nav-link text-white" href="/">All Task</a>
                        <a class="btn btn-danger text-white" href="/" @click.prevent="logout">Logout</a>
                    </div>
                </div>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>
  
<script>
import axios from "axios";
export default {
    name: "Dashboard",

    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("auth_t");
    },

    methods: {
        logout() {
            localStorage.getItem("auth_t");
            localStorage.removeItem("auth_t");
            window.location.reload();
        },
    },
};
</script>
  
