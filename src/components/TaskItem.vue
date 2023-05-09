<template>
    <li class="update-tasks">
        <div class="update-input">
            <button class="input-button" v-show="!isEditing" @click="$emit('update')" :class="taskClass">
                <i :class="squareClass"></i>{{ editingTask }}
            </button>
            <input v-show="isEditing" v-model="editingTask" @keydown.enter="handleEdit()">
        </div>
        <div class="update-buttons">
            <button v-show="!isEditing" @click="edit()"><i class="bi bi-pencil-square"></i></button>
            <button v-show="isEditing" @click="handleEdit()"><i class="bi bi-check-square"></i></button>
            <button @click="$emit('delete')" ><i class="bi bi-trash"></i></button>
        </div>    
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
.update-tasks {
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
}

.update-input {
    max-width: 300px;
}

.update-buttons {
    display: flex;
}

.input-button {
    text-overflow: ellipsis;
}

button {
    background: none;
    border: none;
    padding: 0;
    text-align: left;
}

i {
    margin: 10px;
}

.toggle-complete {
    text-decoration: line-through;
}
</style>