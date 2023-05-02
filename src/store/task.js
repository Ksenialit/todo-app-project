// /store/task.js
 
import { defineStore } from 'pinia';
import supabase from '../supabase.js';
 
export default defineStore('tasks', {
  state: () => ({
    tasks: null
  }),
  actions: {
    async fetchTasks () {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });

      this.tasks = tasks;
    },

    async addNewTask (newTask, userId) {
      const { data, error } = await supabase
        .from('tasks')
        .insert({ title: newTask, user_id: userId })
        .select()

      if(error) {
        console.error(error)
        return 
      }
      this.tasks.push(...data)
    },

    async deleteTask (index) {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', index)

        if(error) {
          console.error(error)
          return 
        }
        this.tasks = this.tasks.filter(task => task.id !== index)
    }
  }
});

// Here is a basic task store. We’ve only given you one action: fetchTasks. 
// You’ll need to create your own store actions to update, create and delete the tasks.
// create task (Create a record and return it): https://supabase.com/docs/reference/javascript/insert - done
// delete task: https://supabase.com/docs/reference/javascript/delete
// update task: https://supabase.com/docs/reference/javascript/update