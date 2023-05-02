<template>
  <section>
    <h1>Welcome back! <i class="bi bi-emoji-smile"></i></h1>
    <button @click="signOut">Log out</button>
    <div>

      <label>Add to do</label>
      <input type="text" v-model="newTask" @keydown.enter="handleNewTask(this.newTask, this.user.id)" placeholder="Write your to do">
      <button @click="$event => handleNewTask(this.newTask, this.user.id)">Create task</button>
      <div>
        <p>Incompleted task:</p>
        <ul>
          <TaskItem v-bind:task="task" v-for="task in incompletedTasks" :key="task.id" @edit="(title) => editTask(task.id, title)" @delete="deleteTask(task.id)" @update="updateTask(task.id, task.is_complete)"></TaskItem>
        </ul>
        <p>Completed task:</p>
        <ul>
          <TaskItem v-bind:task="task" v-for="task in completedTasks" :key="task.id" @delete="deleteTask(task.id)" @update="updateTask(task.id, task.is_complete)"></TaskItem>
        </ul>
      </div>
      
    </div>
  </section>
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
      ... mapState(UserStore, ['user']),
      completedTasks () {
        if(this.tasks) {
          return this.tasks.filter(task => task.is_complete)
        }
        return []
      }, 
      incompletedTasks () {
        if(this.tasks) {
          return this.tasks.filter(task => !task.is_complete)
        }
        return []
      }
    },
    methods: {
      ... mapActions(TasksStore, ['fetchTasks', 'addNewTask', 'deleteTask', 'updateTask', 'editTask']),
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
  