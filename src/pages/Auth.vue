  <template>
    <div class="form-auth m-auto w-100 card">
      <RouterView />
    </div>
  </template>
  
  <script>
  import { RouterView } from 'vue-router'
  
  export default {
    name: "Auth",
    components: {
      RouterView
    }
  }
  
  </script>
  
  <style>
  .form-auth {
    max-width: 300px;
  }


  </style>
  