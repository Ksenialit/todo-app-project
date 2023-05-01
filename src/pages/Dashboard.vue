<template>
    <h1>Dashboard / HomeView</h1>
    <button @click="signOut">Log out</button>
    <div>

      <label>Add to do</label>
      <input type="text" v-model="newTask" @keydown.enter="handleNewTask(this.newTask, this.user.id)" placeholder="Write your to do">
      <button @click="$event => handleNewTask(this.newTask, this.user.id)">Create task</button>
      <div>
        <ul>
          <TaskItem v-bind:task="task" v-for="task in tasks" :key="task.id" @delete="deleteTask(task.id)"></TaskItem>
        </ul>
      </div>
      
    </div>
  </template>
  
  <script>
  import supabase from '../supabase.js'
  import { mapActions, mapState } from 'pinia'
  import TasksStore from '../store/task'
  import UserStore from '../store/user'
  import TaskItem from '../components/TaskItem.vue'

  export default {
    name: "Dashboard",
    components: {
      TaskItem
    },
    data() {
      return {
            newTask: ''
        }
    },
    computed: {
      ... mapState(TasksStore, ['tasks']),
      ... mapState(UserStore, ['user'])  
    },
    methods: {
      ... mapActions(TasksStore, ['fetchTasks', 'addNewTask', 'deleteTask']),
      ... mapActions(UserStore, ['signOut']),
      handleNewTask (newTask, userId) {
         this.addNewTask(newTask, userId)
         this.newTask = ''
      }
    },
    created() {
      this.fetchTasks()
    },
    mounted() {
      //this.addNewTask(this.newTask, this.userId)
    }
  }
  
  </script>
  
  <style scoped>
  
  </style>
  