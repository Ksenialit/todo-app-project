<template>
    <li>
        <p>{{ task.title }}</p>
        <button @click="$emit('delete')" >Delete</button>
    </li>

</template>


<script>

export default{ 
    name: "TaskItem",
    props: ['task']
} 


</script>

<style scoped>

</style>