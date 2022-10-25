import React, { useState } from "react"
import CreateTask from "./CreateTask.jsx"
import Task from "./Task.jsx"
import { useSelector } from "react-redux"

const createTaskObject = function(text, key, ...subtasksFunctions) {
    return {
        text,
        key,
        subtasks: subtasksFunctions
    }
}

const taskStructureTransform = function(tasks) {
    let structure=[];
    for (const [key, value] of Object.entries(tasks)) {
        let {text, path, subtasks, deleted}=value
        
        if(deleted) continue

        structure.push(<Task text={text} path={path}/>);

        if(Object.entries(subtasks).length>0) {
            structure.push(taskStructureTransform(subtasks))
        }
    }
    return <ul>{structure}</ul>
}

const App = function(props) {
    let structure = useSelector((state)=>state.tasks)
    let [tasks, updateTasks]=useState(structure);
    return (
        <>
            <CreateTask path=""/>
            {taskStructureTransform(structure)}
        </>
    )
}

export {App as default, taskStructureTransform, createTaskObject}