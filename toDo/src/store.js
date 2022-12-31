import { configureStore } from "@reduxjs/toolkit";

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
                    return currTasks.map((v,iter)=>{
                        if (iter==Number(parentLocation.shift())) {
                            return {...v, subtasks:newStore(v.subtasks)}
                        }
                    })
                }
                else {
                    return [...currTasks, {text,path,deleted:false,subtasks:[]}]
                }
            }
            return {...state,
                tasks: newStore(state.tasks)
            }
        }

        case "deleteTask": {
            let {path} = {...action.payload};
            let parentLocation = path.trim().split(" ");
            let taskLocation = parentLocation.pop();
            let searchLocationAndAddTask = function(taskObject, parentLocation, taskLocation) {
                let result
                if(parentLocation.length!=0) {
                    let currentSearch = parentLocation.shift()
                    let currentTask = taskObject[currentSearch]
                    let currentSubtasks = currentTask.subtasks
                    result = {...taskObject,
                                [currentSearch]:{
                                    ...currentTask,
                                    subtasks: {
                                        ...searchLocationAndAddTask(currentSubtasks, parentLocation, taskLocation)
                                    }
                                }
                    }
                } else {
                result = {...taskObject,
                                [taskLocation]: {
                                    text:"", path, deleted: true,
                                    subtasks: []
                                }
                    }
                }
                return result
            }

            let newTasks = searchLocationAndAddTask(state.tasks, parentLocation, taskLocation);
            
            return {...state,
                tasks: newTasks}
        }

        default: 
            return state
    }
}

let store = configureStore({reducer:reducer})


export {store as default, reducer, initialState}