<template>
    <div class="mt-5 container">
        <h1 v-if="isLoadingPage">Task Edit page</h1>
        <div v-if="isLoadingPage" class="card">
            <div class="card-body" v-if="!isLoading">
                <div class="mb-3">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" v-model="task.title" />
                </div>
                <div class="mb-3">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" v-model="task.description" />
                </div>
                <div class="mb-3">
                    <button class="btn btn-success">Save</button>
                </div>
            </div>
            <div v-else>
                <h3>Saving Task...</h3>
            </div>
        </div>
        <div v-else>
            <h3>Retrieving Task</h3>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "EditTasks",
    props: ["id"],
    data() {
        return {
            task: {
                title: "",
                description: "",
            },
            isLoading: false,
            isLoadingPage: false,
        };
    },
    computed: {
        task() {
            return this.$store.state.task;
        },
    },
    mounted() {
        this.fetchTask();
    },
    methods: {
        async fetchTask() {
            this.isLoadingPage = true;
            await this.$store.dispatch("getTask", this.$route.params.id);
            this.task = { ...this.task };
            this.isLoadingPage = true;
        },
        async update() {
            this.isLoading = true;
            await this.$store.dispatch("updateTask", this.$route.params.id);
            this.isLoading = false;
        },
    },
};
</script>
  
<style></style>
  