import React from 'react'

import styles from './styles/Task.css'

const Task = ({text, onComplete, completed, id}) => {
    const taskStyle = completed ? `${styles.task} ${styles.done}` : styles.task
    const completedButton = (completed) => {
        if (!completed) {
            return <button onClick={onComplete.bind(null, id)}>complete</button>
        }
    }

    return (
        <li className={taskStyle}>
            {completedButton(completed)}<p>{text}</p>
        </li>
    )
}

export default Task
