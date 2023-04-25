// /store/task.js
 
import { defineStore } from 'pinia';
import { supabase } from '../supabase';
 
export const useTaskStore = defineStore('tasks', {
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
    }
  }
});

// Here is a basic task store. We’ve only given you one action: fetchTasks. 
// You’ll need to create your own store actions to update, create and delete the tasks.
// create task (Create a record and return it): https://supabase.com/docs/reference/javascript/insert
// delete task: https://supabase.com/docs/reference/javascript/delete
// update task: https://supabase.com/docs/reference/javascript/update