import {taskStructureTransform} from "../src/App.jsx";
// import CreateTask from "../src/CreateTask.jsx"
import Task from "../src/Task.jsx"
import React from "react";


//depth 1
const tasksTest1Object = [
    {
        text: "option 1",
        path: "0",
        key: "0",
        deleted: false,
        subtasks: []
    },
    {
        text: "option 2",
        path: "1",
        key: "1",
        deleted: false,
        subtasks: []
    },
    {
        text: "option 3",
        path: "2",
        key: "2",
        deleted: false,
        subtasks: []
    }
]
const tasksTest1Jsx = (
    <ul key="container">{[
        <Task text="option 1" path="0" key="0"/>,
        <Task text="option 2" path="1" key="1"/>,
        <Task text="option 3" path="2" key="2"/>
    ]}</ul>
);
const tasksTest1Object_deleted0 = [
    {
        text: "option 1",
        path: "0",
        key: "0",
        deleted: true,
        subtasks: []
    },
    {
        text: "option 2",
        path: "1",
        key: "1",
        deleted: false,
        subtasks: []
    },
    {
        text: "option 3",
        path: "2",
        key: "2",
        deleted: false,
        subtasks: []
    }
]
const tasksTest1Jsx_deleted0 = (
    <ul key="container">{[
        <Task text="option 2" path="1" key="1"/>,
        <Task text="option 3" path="2" key="2"/>
    ]}</ul>
);

//depth 2
const tasksTest2Object = [
    {
        text: "option 1",
        path: "0",
        key: "0",
        subtasks: [
            {
                text: "option 11",
                path: "0 0",
                key: "0 0",
                subtasks: []
            }
        ]
    },
    {
        text: "option 2",
        path: "1",
        key: "1",
        subtasks: [
            {
                text: "option 21",
                path: "1 0",
                key: "1 0",
                subtasks: []
            }
        ]
    },
    {
        text: "option 3",
        path: "2",
        key: "2",
        subtasks: [
            {
                text: "option 31",
                path: "2 0",
                key: "2 0",
                subtasks: []
            }
        ]
    }
]
const tasksTest2Jsx = (
    <ul key="container">{[
        <Task text="option 1" path="0" key="0"/>,
        <ul key="0 container">{[
            <Task text="option 11" path="0 0" key="0 0"/>
        ]}</ul>,
        <Task text="option 2" path="1" key="1"/>,
        <ul key="1 container">{[
            <Task text="option 21" path="1 0" key="1 0"/>
        ]}</ul>,
        <Task text="option 3" path="2" key="2"/>,
        <ul key="2 container">{[
            <Task text="option 31" path="2 0" key="2 0"/>
        ]}</ul>
    ]}</ul>
); 

//depth 3
const tasksTest3Object = [
    {
        text: "option 1",
        key: "0",
        path: "0",
        subtasks: [{
                text: "option 11",
                path: "0 0",
                key: "0 0",
                subtasks: [{
                    text: "option 111",
                    path: "0 0 0",
                    key: "0 0 0",
                    subtasks: []
                }]
        }]
    },
    {
        text: "option 2",
        path: "1",
        key: "1",
        subtasks: [
            {
                text: "option 21",
                path: "1 0",
                key: "1 0",
                subtasks: [{
                    text: "option 211",
                    key: "1 0 0",
                    path: "1 0 0",
                    subtasks: []
                }]
            }
        ]
    },
    {
        text: "option 3",
        path: "2",
        key: "2",
        subtasks: [
            {
                text: "option 31",
                path: "2 0",
                key: "2 0",
                subtasks: [{
                    text: "option 311",
                    path: "2 0 0",
                    key: "2 0 0",
                    subtasks: []
                }]
            }
        ]
    }
]

const tasksTest3Jsx = (
    <ul key="container">{[
        <Task text="option 1" path="0" key="0"/>,
        <ul key="0 container">{[
            <Task text="option 11" path="0 0" key="0 0"/>,
            <ul key="0 0 container">{[
                <Task text="option 111" path="0 0 0" key="0 0 0"/>
            ]}</ul>,
        ]}</ul>,
        <Task text="option 2" path="1" key="1"/>,
        <ul key="1 container">{[
            <Task text="option 21" path="1 0" key="1 0"/>,
            <ul key="1 0 container">{[
                <Task text="option 211" path="1 0 0" key="1 0 0"/>
            ]}</ul>,
        ]}</ul>,
        <Task text="option 3" path="2" key="2"/>,
        <ul key="2 container">{[
            <Task text="option 31" path="2 0" key="2 0"/>,
            <ul key="2 0 container">{[
                <Task text="option 311" path="2 0 0" key="2 0 0"/>
            ]}</ul>,
        ]}</ul>
    ]}</ul>
); 

describe("taskStructureTransform", ()=>{
    describe("[depth=1]", ()=>{
        test("taskStructureTransform should transform tasks object into jsx and return it", ()=>{
            expect(JSON.stringify(taskStructureTransform(tasksTest1Object))).toEqual(JSON.stringify((tasksTest1Jsx)))
        })
        describe("delete possibility, if property \"deleted\" is true", ()=>{
            test("path:\"0\" is deleted correctly", ()=>{
                expect(JSON.stringify(taskStructureTransform(tasksTest1Object_deleted0))).toEqual(JSON.stringify((tasksTest1Jsx_deleted0)))
            })
            test("path:\"1\" is deleted correctly", ()=>{
                expect(JSON.stringify(taskStructureTransform(tasksTest1Object_deleted0))).toEqual(JSON.stringify((tasksTest1Jsx_deleted0)))
            })
            test("path:\"2\" is deleted correctly", ()=>{
                expect(JSON.stringify(taskStructureTransform(tasksTest1Object_deleted0))).toEqual(JSON.stringify((tasksTest1Jsx_deleted0)))
            })
        })
        
    })
    
    test("taskStructureTransform should transform tasks object into jsx and return it[depth=2]", ()=>{
        expect(JSON.stringify(taskStructureTransform(tasksTest2Object))).toEqual(JSON.stringify(tasksTest2Jsx))
    })
    test("taskStructureTransform should transform tasks object into jsx and return it[depth=3]", ()=>{
        expect(JSON.stringify(taskStructureTransform(tasksTest3Object))).toEqual(JSON.stringify(tasksTest3Jsx))
    })
})

