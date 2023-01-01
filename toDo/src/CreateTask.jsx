import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

function CreateTask(props) {
    const path = props.path;
    const [currentSubtaskCounter, changeCurrentSubtaskCounter] = useState(" 0");
    const [text, changeText] = useState("");

    let tasks = useSelector((state)=>state.tasks)
    let dispatch = useDispatch()

    let submitTask = function(){
        if(!text) return
        let formatedPath = (path+currentSubtaskCounter).trim()
        dispatch({type: "addTask", payload: {path: formatedPath, text: text}});
        changeCurrentSubtaskCounter(" "+(Number(currentSubtaskCounter)+1));
        changeText("");
    }

    let updateText = function(event) {
        changeText(event.target.value)
    }

    return (
        <>
        <input type="text" className="" placeholder="create task" value={text} onChange={()=>{updateText(event)}}/>
        <input type="button" value="create" onClick={()=>{submitTask()}}/>
        </>
    )
}

export default CreateTask