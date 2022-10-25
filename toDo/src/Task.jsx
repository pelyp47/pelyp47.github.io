import React from "react"
import CreateTask from "./CreateTask.jsx"
import DeleteTask from "./DeleteTask.jsx"

function Task(props) {
    return (
        <li>
            <span>{props.text}</span>
            <CreateTask path={props.path}/>
            <DeleteTask path={props.path}/>
        </li>
    )
}


export default Task