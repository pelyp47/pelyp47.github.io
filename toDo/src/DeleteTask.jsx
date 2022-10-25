import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

function DeleteTask (props) {
    let dispatch = useDispatch()
    function removeTask() {
        dispatch({type: "deleteTask", payload: {path:props.path}})
    }

    return (
        <input type="button" value="delete task" onClick={()=>{removeTask(props)}}/>
    )
}

export default DeleteTask