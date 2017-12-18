export default {
    data : function() {
        return {
            newTaskTitle : ''
        }
    },
    template:   `<fieldset>
                    <form v-on:submit.prevent="addTask" class="row">
                        <div class="input-field col m6 offset-m3">
                            <input v-model='newTaskTitle' type="text">
                            <label for="taskTitle">Intitulé de la tâche</label>
                        </div>
                        <div class="col m4 offset-m5">
                            <button :disabled="newTaskTitle == ''" class="waves-effect waves-light btn">Ajouter</button>
                        </div>
                    </form>
                </fieldset>`,
    methods : {
        addTask() {
            this.$emit('event-add-task', this.newTaskTitle)
            this.newTaskTitle = ''
        }
    }
}
