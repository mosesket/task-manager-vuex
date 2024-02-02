# task-manager-vuex
This is the repository of task-manager using laravel 10 as the backend api and vue as the frontend

created laravel project using composer create-project laravel/laravel
created vue application using vite: npm create vite@latest

1. Laravel API 
created model, controller and migration for Task
setup database, run migration: php artisan migrate
using sanctum for authentication, in api.php
add route along with task controller methods
created a new postman collection, set base url as http://127.0.0.1:8000/api
created new postman request, upadte task model to accept fillable fields, created all task methods
add sanctum auth to api routes, create login and register api

link to postman documentation https://documenter.getpostman.com/view/15288726/2s9YyvBL4x


2. Vue Application
install bootstrap, vuex and axios
npm install bootstrap, npm install vuex, npm install axios