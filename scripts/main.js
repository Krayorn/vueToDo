'use strict'

import jQuery from 'jquery'
import Materialize from 'materialize-css'
import Vue from 'vue/dist/vue.js'

import taskForm from './components/TaskForm'
import todoItem from './components/TodoItem'

Vue.component('add-task', taskForm)
Vue.component('todo-item', todoItem)

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
