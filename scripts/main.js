{
    'use strict'

    new Vue({
        el : '#app',
        data : {
            newTitle : '',
            tasks : JSON.parse(localStorage.getItem('data')) || []
        },
        methods: {
            deleteTask(i) {
                return this.tasks.splice(i, 1)
            },
            addTask() {
                this.tasks.push({title: this.newTitle, isDone: false})
                this.newTitle = ""
            }
        },
        computed: {
            remainingTasks(){
                return this.tasks.filter(task => !task.isDone)
            }
        },
        watch : {
            remainingTasks() {
                localStorage.setItem('data', JSON.stringify(this.tasks))
            }
          }
    })
}
