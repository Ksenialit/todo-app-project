<template>
    <li>
        <button v-show="!isEditing" @click="$emit('update')" :class="taskClass">
            <i :class="squareClass"></i>{{ editingTask }}
        </button>
        <input v-show="isEditing" v-model="editingTask">

        <button v-show="!isEditing" @click="edit()"><i class="bi bi-pencil-square"></i></button>
        <button v-show="isEditing" @click="handleEdit()"><i class="bi bi-check-square"></i></button>
        <button @click="$emit('delete')" ><i class="bi bi-trash"></i></button>
    </li>

</template>


<script>

export default{ 
    name: "TaskItem",
    props: ['task'],
    data() {
        return {
            isEditing: false,
            editingTask: this.task.title
        }
    },
    computed: {
        taskClass() {
            let taskClass = ['toggle']
            if(this.task.is_complete) {
                taskClass.push('toggle-complete')
            }
            return taskClass.join(' ')
        },
        squareClass() {
            let squareClass = ["bi"]
            if(this.task.is_complete) {
                squareClass.push('bi-x-square')
            } else {
                squareClass.push('bi-square')
            }
            return squareClass.join(' ')
        }
        },
    methods: {
        edit() {
            this.isEditing = true
        },
        handleEdit() {
            this.$emit('edit', this.editingTask)
            this.isEditing = false
        }
    }
    }



</script>

<style scoped>
.toggle-complete {
    text-decoration: line-through;
}
</style>