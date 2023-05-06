<template>
  <h2 class="font-monospace">Welcome back!</h2>
  <section class="card">
    <div>
      <h3 class="text-center font-monospace">To do list</h3>

      <div class="todo-input">
        <input type="text" v-model="newTask" @keydown.enter="handleNewTask(this.newTask, this.user.id)" placeholder="Write your to do">
        <button @click="$event => handleNewTask(this.newTask, this.user.id)"><i class="bi bi-plus-lg"></i></button>
      </div>

      <div>
        <ul>
          <TaskItem v-bind:task="task" v-for="task in incompletedTasks" :key="task.id" @edit="(title) => editTask(task.id, title)" @delete="deleteTask(task.id)" @update="updateTask(task.id, task.is_complete)"></TaskItem>
        </ul>
      </div>

      <div>
        <h4>Completed</h4>
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
  ul {
    padding: 0;
  }

  .todo-input {
    position: relative;
    margin: 0 0 30px;
  }
  .todo-input input[type=text] {
    width: 100%;
    height: 50px;
    font: 15px/1.4 Poppins,sans-serif;
    padding: 15px;
    background: #f3f3f3;
    color: #333;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: border .3s linear;
}
.todo-input button {
    background: none;
    border: none;
    color: #4ec5c1;
    font-size: 24px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}
  </style>
  