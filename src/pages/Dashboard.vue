<template>
    <h1>Dashboard / HomeView</h1>
    <div>
      <p v-for="todo in taskList" :key="todo.id"> {{ todo.title }}</p>
      <button @click="$event => addNewTask({ title: 'New task', userId: this.user.id})">Create task</button>
      <!-- añadir input y coger el valor de ese input y llamar a la action quees la función de la store-->
      <button @click="signOut">Log out</button>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'pinia'
  import { useTaskStore } from '../store/task'
  import UserStore from '../store/user'

  export default {
    name: "Dashboard",
    components: {},
    data() {
      return {
            newTaskTitle: ''
        }
    },
    computed: {
        ... mapState(useTaskStore, ['tasksList']),
        ... mapState(UserStore, ['user'])  
    },
    methods: {
        ... mapActions(useTaskStore, ['addNewTask', 'fetchTasks']),
        ... mapActions(UserStore, ['signOut'])
    },
    created() {
      this.fetchTasks()
    }
  }
  
  </script>
  
  <style scoped>
  
  </style>
  