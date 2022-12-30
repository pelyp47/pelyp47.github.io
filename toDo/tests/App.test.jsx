import {taskStructureTransform, createTaskObject} from "../src/App.jsx";
// import CreateTask from "../src/CreateTask.jsx"
import Task from "../src/Task.jsx"
import React from "react";


//depth 1
const tasksTest1 = [
    createTaskObject("option 1", "0"),
    createTaskObject("option 2", "1"),
    createTaskObject("option 3", "2")
];
const tasksTest1Object = [
    {
        text: "option 1",
        key: "0",
        subtasks: []
    },
    {
        text: "option 2",
        key: "1",
        subtasks: []
    },
    {
        text: "option 3",
        key: "2",
        subtasks: []
    }
]
const tasksTest1Jsx = (
    <ul>{[
        <Task text="option 1" key="0"/>,
        <Task text="option 2" key="1"/>,
        <Task text="option 3" key="2"/>
    ]}</ul>
);



//depth 2
const tasksTest2 = [
    createTaskObject("option 1", "0", createTaskObject("option 11", "00")),
    createTaskObject("option 2", "1", createTaskObject("option 21", "10")),
    createTaskObject("option 3", "2",  createTaskObject("option 31", "20"))
];
const tasksTest2Object = [
    {
        text: "option 1",
        key: "0",
        subtasks: [
            {
                text: "option 11",
                key: "00",
                subtasks: []
            }
        ]
    },
    {
        text: "option 2",
        key: "1",
        subtasks: [
            {
                text: "option 21",
                key: "10",
                subtasks: []
            }
        ]
    },
    {
        text: "option 3",
        key: "2",
        subtasks: [
            {
                text: "option 31",
                key: "20",
                subtasks: []
            }
        ]
    }
]
const tasksTest2Jsx = (
    <ul>{[
        <Task text="option 1" key="0"/>,
        <ul>{[
            <Task text="option 11" key="00"/>
        ]}</ul>,
        <Task text="option 2" key="1"/>,
        <ul>{[
            <Task text="option 21" key="10"/>
        ]}</ul>,
        <Task text="option 3" key="2"/>,
        <ul>{[
            <Task text="option 31" key="20"/>
        ]}</ul>
    ]}</ul>
);

describe("createTaskObject", ()=>{

    describe("createTaskObject pattern check", ()=>{
        let objectPattern = {
            text: "text",
            subtasks: []
        }
        test ("checking returned task Object structure", ()=>{
            expect(JSON.stringify(createTaskObject("text"))).toEqual(JSON.stringify(objectPattern))
        })
    })

    describe("createTaskObject depth check", ()=>{
        test("createTaskObject should create task object with any depth and return it in tasks array [depth=1]", ()=>{
            expect(JSON.stringify(tasksTest1)).toEqual(JSON.stringify(tasksTest1Object))
        })
        test("createTaskObject should create task object with any depth and return it in tasks array [depth=2]", ()=>{
            expect(JSON.stringify(tasksTest2)).toEqual(JSON.stringify(tasksTest2Object))
        })
    })

})

describe("taskStructureTransform", ()=>{
    test("taskStructureTransform should transform tasks object into jsx and return it[depth=1]", ()=>{
        expect(JSON.stringify(taskStructureTransform(tasksTest1Object))).toEqual(JSON.stringify((tasksTest1Jsx)))
    })
    test("taskStructureTransform should transform tasks object into jsx and return it[depth=2]", ()=>{
        expect(JSON.stringify(taskStructureTransform(tasksTest2Object))).toEqual(JSON.stringify(tasksTest2Jsx))
    })
})

