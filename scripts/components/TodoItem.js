export default {
    props : ['task', 'index'],
    template:   `<li class="collection-item">
                    <input v-model='task.isDone' type="checkbox" :id="index" :checked="task.isDone">
                    <label :for="index">{{ task.title }}</label>
                    <a href="#" @click.prevent="deleteTask(index)" class="link-delete" title="Supprimer cette tâche">
                        <i class="small material-icons">delete_forever</i>
                    </a>
                </li>`,
    methods: {
        deleteTask(i) {
            this.$emit('event-supress', i)
        }
    }
}
