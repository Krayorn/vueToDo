{
    'use strict'

    new Vue({
        el : '#app',
        data : {
            newTaskTitle : '',
            tasks : JSON.parse(localStorage.getItem('data')) || []
        },
        methods: {
            deleteTask(i) {
                this.tasks.splice(i, 1)
            },
            addTask() {
                this.tasks.push({title: this.newTaskTitle, isDone: false})
                this.newTaskTitle = ""
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
