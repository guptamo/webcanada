import React from 'react'

import Task from './Task'

import styles from './styles/TaskList.css'

const TaskList = ({tasks, onComplete}) => {
    return (
        <ul className={styles.taskList}>
            {
                tasks.map(({text, id, completed}) => (
                    <Task text={text}
                        key={id}
                        id={id}
                        completed={completed}
                        onComplete={onComplete}/>
                ))
            }
        </ul>
    )
}


export default TaskList
