import ReactDOM from 'react-dom'
import React from 'react'

import TaskList from './TaskList'

import styles from './styles/App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: "",
            tasks: this.fetchTasks()
        }

        this.updateNewTask = this.updateNewTask.bind(this)
        this.addNewTask = this.addNewTask.bind(this)
        this.completeTask = this.completeTask.bind(this)
    }

    fetchTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'))

        if (tasks) {
            return tasks
        }
        localStorage.setItem('tasks', JSON.stringify([]))

        return []
    }

    updateNewTask(event) {
        this.setState({newTask: event.target.value})
    }

    addNewTask(event) {
        event.preventDefault()
        const nextId = this.state.tasks.length ?  Math.max(...this.state.tasks.map(task => task.id)) + 1 : 1
        const newTaskList = [
            ...this.state.tasks,
            {
                id: nextId,
                text: this.state.newTask,
                completed: false
            }
        ]

        if (this.state.newTask) {
            this.setState({
                newTask: "",
                tasks: newTaskList
            })
            localStorage.setItem("tasks", JSON.stringify(newTaskList))
        }
    }

    completeTask(id, event) {
        const newTaskList = this.state.tasks.map(task => {
            if (task.id === id) {
                task.completed = true
                return task
            }
            return task
        })

        this.setState({
            newTask: "",
            tasks: newTaskList
        })
        localStorage.setItem("tasks", JSON.stringify(newTaskList))
    }

    render() {
        return (
            <div className={styles.todoList}>
                <h1>Todo List</h1>
                <form action="">
                    <input type="text"
                        className={styles.input}
                        value={this.state.newTask}
                        onChange={this.updateNewTask}/>
                    <button onClick={this.addNewTask}>Add Task</button>
                </form>

                <div className={styles.listContainer}>
                    <div>
                        <h2>Outstanding Tasks</h2>
                        <TaskList
                            tasks={this.state.tasks.filter(task => !task.completed)}
                            onComplete={this.completeTask}
                        />
                    </div>
                    <div>
                        <h2>Completed Tasks</h2>
                        <TaskList
                            tasks={this.state.tasks.filter(task => task.completed)}
                            onComplete={this.completeTask}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))
