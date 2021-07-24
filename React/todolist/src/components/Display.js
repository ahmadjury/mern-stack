import React from 'react'

const Display = (props) => {
    const {tasks,changeCompleted,deleteTask} = props;
    return (
        <>
            {
                tasks.map(
                    (task,index)=> {
                        return(<p style={task.completed?{color:"blue",textDecoration:"line-through"}:{}} key={index}>
                                    {task.text}
                                    <input type="checkbox" checked = {task.completed} onChange={(e)=> changeCompleted(e,index)} />
                                    <button onClick = {(e) => deleteTask(e,index)}> delete</button>
                                </p>)
                    }
                )
            }
        </>
    )
}

export default Display
