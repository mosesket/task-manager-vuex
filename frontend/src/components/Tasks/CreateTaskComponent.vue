<script>
import axios from "axios";
export default {
    name: "CreateTaskComponent",

    data() {
        return {
            results: "",
            tasks: {
                title: "",
                description: "",
            },
            isLoading: false,
            isLoadingTitle: "Loading",
        };
    },

    methods: {
        createTask() {
            if (this.tasks.description == "") {
                this.$toast.warning("The body Field is required");
            } else if (this.tasks.title == "") {
                this.$toast.warning("The title Field is required");
            } else {
                this.isLoading = true;
                this.isLoadingTitle = "Saving Task";
                this.$store.dispatch("createTask", this.tasks);
                this.$router.push({ name: "AllTasks" });
            }
        },
    },
};
</script>

<template>
    <div class="mt-5 container">
        <h1>Task create page</h1>
        <div class="card">
            <div class="card-body">
                <div v-if="isLoading">
                    <h3>Saving Task...</h3>
                </div>
                <div v-else>
                    <form @submit.prevent="createTask()">
                        <div class="mb-3">
                            <label for=""> Title</label>
                            <input type="text" class="form-control" v-model="tasks.title" />
                        </div>
                        <div class="mb-3">
                            <label for=""> Body</label>
                            <input type="text" class="form-control" v-model="tasks.description" />
                        </div>
                        <div class="mb-3">
                            <button class="btn btn-success">save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>