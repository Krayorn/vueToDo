{
    'use strict'

    Vue.component('todo-item', {
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
    })

    Vue.component('add-task', {
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
    })

    new Vue({
        el : '#app',
        data : {
            tasks : JSON.parse(localStorage.getItem('data')) || []
        },
        methods: {
            deleteTask(i) {
                this.tasks.splice(i, 1)
            },
            addTask(newTaskTitle) {
                this.tasks.push({title: newTaskTitle, isDone: false})
            }
        },
        computed: {
            remainingTasks(){
                return this.tasks.filter(task => !task.isDone).length
            }
        },
        watch : {
            remainingTasks() {
                localStorage.setItem('data', JSON.stringify(this.tasks))
            }
        },
        filters: {
            pluralize(val, word) {
                return val + ' ' + word + ( val > 1 ? 's' : '' )
            }
        }
    })
}
