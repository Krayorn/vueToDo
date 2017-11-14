{
    'use strict'

    new Vue({
        el : '#app',
        data : {
            newTitle : '',
            tasks : [
                { title: 'Declencher Damien', isDone: true },
                { title: 'Embeter Cécile', isDone: true },
                { title: 'Manger Papou', isDone: false }
            ]
        },
        methods: {
            deleteTask(i) {
                return this.tasks.splice(i, 1)
            },
            addTask(title, e) {
                e.preventDefault();
                return this.tasks.push({title: title, isDone: false})
            }
        },
        computed: {
            remainingTasks(){
                return this.tasks.filter(task => !task.isDone)
            }
        }
    })
}
