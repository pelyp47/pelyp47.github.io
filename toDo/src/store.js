import { configureStore, current } from "@reduxjs/toolkit";

let initialState = {
    tasks: [],
}

const reducer = function(state = initialState, action) {
    switch (action.type) {
        case "addTask" : {
            let {path, text} = {...action.payload};
            let parentLocation = path.split(" ");
            let taskLocation = parentLocation.pop()
            let newStore = function(currTasks) {
                if (parentLocation.length>0){
                    let curIter = parentLocation.shift()
                    return currTasks.map((v,iter)=>{
                        if (iter==Number(curIter)) {
                            return {...v, subtasks:newStore(v.subtasks)}
                        }
                        else {
                            return v
                        }
                    })
                }
                else {
                    return [...currTasks, {text,path, key:path,deleted:false,subtasks:[]}]
                }
            }
            return {...state,
                tasks: newStore(state.tasks)
            }
        }

        case "deleteTask": {
            let {path} = {...action.payload};
            let parentLocation = path.split(" ");
            let taskLocation = parentLocation.pop();
            let newStore = function(currTasks) {
                let curIter = parentLocation.shift()
                if (curIter){
                    return currTasks.map((v,iter)=>{
                        if (iter==curIter) {
                            return {...v, subtasks:newStore(v.subtasks)}
                        }
                        else {
                            return v
                        }
                    })
                }
                else {
                    return currTasks.map((v, i)=>{
                        if (i == taskLocation) {
                            return {...v, text:"", deleted: true, subtasks:[]}
                        }
                        else {
                            return v
                        }
                    })
                }
            }
            return {...state,
                    tasks: newStore(state.tasks)
            }
        }

        default: 
            return state
    }
}

let store = configureStore({reducer:reducer})


export {store as default, reducer, initialState}