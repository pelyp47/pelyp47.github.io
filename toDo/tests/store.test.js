import {reducer, initialState} from "../src/store"


let testInitialState = {
    tasks: {
        0:{
            text: "option 1",
            path: "0",
            subtasks: [{
                    text: "option 11",
                    path: "0 0",
                    subtasks: [{
                        text: "option 111",
                        path: "0 0 0",
                        subtasks: []
                    }]
            }]
        },
        1:{
            text: "option 2",
            path: "1",
            subtasks: [
                {
                    text: "option 21",
                    path: "1 0",
                    key: "1 0",
                    subtasks: [{
                        text: "option 211",
                        path: "1 0 0",
                        subtasks: []
                    }]
                }
            ]
        },
        2:{
            text: "option 3",
            path: "2",
            subtasks: [
                {
                    text: "option 31",
                    path: "2 0",
                    subtasks: [{
                        text: "option 311",
                        path: "2 0 0",
                        subtasks: []
                    }]
                }
            ]
        }
    }
}

let initialStateWithDeleted0 = {}

describe("Initial state value", ()=>{
    test("Initial state should be an object", ()=>{
        expect(initialState).toBeInstanceOf(Object)
    })
    test("Initial state should have a task property", ()=>{
        expect(Object.keys(initialState).includes("tasks")).toBe(true)
    })
    test("tasks should be an object", ()=>{
        expect(initialState.tasks).toBeInstanceOf(Object)
    })
    test("taksk should be empty", ()=>{
        expect(Object.keys(initialState.tasks).length).toEqual(0)
    })
})

describe("Reducer tests", ()=>{
    beforeEach(()=>{
        testInitialState = {
            tasks: {
                0:{
                    text: "option 1",
                    path: "0",
                    subtasks: [{
                            text: "option 11",
                            path: "0 0",
                            subtasks: [{
                                text: "option 111",
                                path: "0 0 0",
                                subtasks: []
                            }]
                    }]
                },
                1:{
                    text: "option 2",
                    path: "1",
                    subtasks: [
                        {
                            text: "option 21",
                            path: "1 0",
                            key: "1 0",
                            subtasks: [{
                                text: "option 211",
                                path: "1 0 0",
                                subtasks: []
                            }]
                        }
                    ]
                },
                2:{
                    text: "option 3",
                    path: "2",
                    subtasks: [
                        {
                            text: "option 31",
                            path: "2 0",
                            subtasks: [{
                                text: "option 311",
                                path: "2 0 0",
                                subtasks: []
                            }]
                        }
                    ]
                }
            }
        }
    })
    describe("delete action", ()=>{
        describe("[depth=1]", ()=>{
            test("path:0",()=>{
                let testInitialState_delete0 = {
                    tasks: {
                        0:{
                            text: "",
                            path: "0",
                            deleted: true,
                            subtasks: []
                        },
                        1:{
                            text: "option 2",
                            path: "1",
                            subtasks: [
                                {
                                    text: "option 21",
                                    path: "1 0",
                                    key: "1 0",
                                    subtasks: [{
                                        text: "option 211",
                                        path: "1 0 0",
                                        subtasks: []
                                    }]
                                }
                            ]
                        },
                        2:{
                            text: "option 3",
                            path: "2",
                            subtasks: [
                                {
                                    text: "option 31",
                                    path: "2 0",
                                    subtasks: [{
                                        text: "option 311",
                                        path: "2 0 0",
                                        subtasks: []
                                    }]
                                }
                            ]
                        }
                    }
                }
                expect(JSON.stringify(reducer(testInitialState,{type:"deleteTask", payload:{path:"0"}}))).toEqual(JSON.stringify(testInitialState_delete0))
            })
            test("path:0, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0"}}).tasks[0].text).toEqual("")
            })
            test("path:0, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0"}}).tasks[0].subtasks.length).toEqual(0)
            })
            test("path:1",()=>{
                let testInitialState_delete1 = {
                    tasks: {
                        0:{
                            text: "option 1",
                            path: "0",
                            subtasks: [{
                                    text: "option 11",
                                    path: "0 0",
                                    subtasks: [{
                                        text: "option 111",
                                        path: "0 0 0",
                                        subtasks: []
                                    }]
                            }]
                        },
                        1:{
                            text: "",
                            path: "1",
                            deleted: true,
                            subtasks: []
                        },
                        2:{
                            text: "option 3",
                            path: "2",
                            subtasks: [
                                {
                                    text: "option 31",
                                    path: "2 0",
                                    subtasks: [{
                                        text: "option 311",
                                        path: "2 0 0",
                                        subtasks: []
                                    }]
                                }
                            ]
                        }
                    }
                }
                expect(JSON.stringify(reducer(testInitialState,{type:"deleteTask", payload:{path:"1"}}))).toEqual(JSON.stringify(testInitialState_delete1))
            })
            test("path:1, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1"}}).tasks[1].text).toEqual("")
            })
            test("path:1, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1"}}).tasks[1].subtasks.length).toEqual(0)
            })
            test("path:2",()=>{
                let testInitialState_delete2 = {
                    tasks: {
                        0:{
                            text: "option 1",
                            path: "0",
                            subtasks: [{
                                    text: "option 11",
                                    path: "0 0",
                                    subtasks: [{
                                        text: "option 111",
                                        path: "0 0 0",
                                        subtasks: []
                                    }]
                            }]
                        },
                        1:{
                            text: "option 2",
                            path: "1",
                            subtasks: [
                                {
                                    text: "option 21",
                                    path: "1 0",
                                    key: "1 0",
                                    subtasks: [{
                                        text: "option 211",
                                        path: "1 0 0",
                                        subtasks: []
                                    }]
                                }
                            ]
                        },
                        2:{
                            text: "",
                            path: "2",
                            deleted: true,
                            subtasks: []
                        }
                    }
                }
                expect(JSON.stringify(reducer(testInitialState,{type:"deleteTask", payload:{path:"2"}}))).toEqual(JSON.stringify(testInitialState_delete2))
            })
            test("path:2, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2"}}).tasks[2].text).toEqual("")
            })
            test("path:2, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2"}}).tasks[2].subtasks.length).toEqual(0)
            })
        })    
    })
    describe("add action",()=>{

    })
})