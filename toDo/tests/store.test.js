import {reducer, initialState} from "../src/store"


let testInitialState = {
    tasks: [
        {
            text: "option 1",
            path: "0",
            key: "0",
            subtasks: [{
                    text: "option 11",
                    path: "0 0",
                    key: "0 0",
                    subtasks: [{
                        text: "option 111",
                        key: "0 0 0",
                        path: "0 0 0",
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
                        path: "1 0 0",
                        key: "1 0 0",
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
}
let testInitialState0 = {...testInitialState.tasks[0]}
let testInitialState00 = {...testInitialState.tasks[0], subtasks:[]}
let testInitialState000 = {...testInitialState.tasks[0].subtasks[0], subtasks:[]}
let testInitialState1 = {...testInitialState.tasks[1]}
let testInitialState10 = {...testInitialState.tasks[1], subtasks:[]}
let testInitialState100 = {...testInitialState.tasks[1].subtasks[0], subtasks:[]}
let testInitialState2 = {...testInitialState.tasks[2]}
let testInitialState20 = {...testInitialState.tasks[2], subtasks:[]}
let testInitialState200 = {...testInitialState.tasks[2].subtasks[0], subtasks:[]}

let initialStateWithDeleted0 = {}

describe("Initial state value", ()=>{
    test("Initial state should be an object", ()=>{
        expect(initialState).toBeInstanceOf(Object)
    })
    test("Initial state should have a task property", ()=>{
        expect(Object.keys(initialState).includes("tasks")).toBe(true)
    })
    test("tasks should be an object", ()=>{
        expect(Array.isArray(initialState.tasks)).toEqual(true)
    })
    test("taksk should be empty", ()=>{
        expect(Object.keys(initialState.tasks).length).toEqual(0)
    })
})

describe("Reducer tests", ()=>{
    beforeEach(()=>{
        testInitialState = {
            tasks: [
                {
                    text: "option 1",
                    path: "0",
                    key: "0",
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
                                path: "1 0 0",
                                key: "1 0 0",
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
        }
    })
    describe("delete action", ()=>{
        describe("[depth=1]", ()=>{
            test("path:0",()=>{
                let testInitialState_delete0 = {
                    tasks: [
                        {
                            text: "",
                            path: "0",
                            key: "0",
                            deleted: true,
                            subtasks: []
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
                                        path: "1 0 0",
                                        key: "1 0 0",
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
                }
                expect(reducer(testInitialState,{type:"deleteTask", payload:{path:"0"}})).toEqual(testInitialState_delete0)
            })
            test("path:0, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0"}}).tasks[0].text).toEqual("")
            })
            test("path:0, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0"}}).tasks[0].subtasks.length).toEqual(0)
            })
            test("path:0, deleted task should have \"deleted:true\"", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0"}}).tasks[0].deleted).toEqual(true)
            })
            test("path:0, other tasks(path:1) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0"}}).tasks[1]).toEqual(testInitialState1)
            })
            test("path:0, other tasks(path:2) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0"}}).tasks[2]).toEqual(testInitialState2)
            })
            test("path:1",()=>{
                let testInitialState_delete1 = {
                    tasks: [
                        {
                            text: "option 1",
                            path: "0",
                            key: "0",
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
                            text: "",
                            path: "1",
                            key: "1",
                            deleted: true,
                            subtasks: []
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
                }
                expect(reducer(testInitialState,{type:"deleteTask", payload:{path:"1"}})).toEqual(testInitialState_delete1)
            })
            test("path:1, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1"}}).tasks[1].text).toEqual("")
            })
            test("path:1, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1"}}).tasks[1].subtasks.length).toEqual(0)
            })
            test("path:1, deleted task should have \"deleted:true\"", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1"}}).tasks[1].deleted).toEqual(true)
            })
            test("path:1, other tasks(path:0) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1"}}).tasks[0]).toEqual(testInitialState0)
            })
            test("path:1, other tasks(path:2) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1"}}).tasks[2]).toEqual(testInitialState2)
            })
            test("path:2",()=>{
                let testInitialState_delete2 = {
                    tasks: [
                        {
                            text: "option 1",
                            path: "0",
                            key: "0",
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
                                        path: "1 0 0",
                                        key: "1 0 0",
                                        subtasks: []
                                    }]
                                }
                            ]
                        },
                        {
                            text: "",
                            path: "2",
                            key: "2",
                            deleted: true,
                            subtasks: []
                        }
                    ]
                }
                expect(reducer(testInitialState,{type:"deleteTask", payload:{path:"2"}})).toEqual(testInitialState_delete2)
            })
            test("path:2, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2"}}).tasks[2].text).toEqual("")
            })
            test("path:2, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2"}}).tasks[2].subtasks.length).toEqual(0)
            })
            test("path:2, deleted task should have \"deleted:true\"", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2"}}).tasks[2].deleted).toEqual(true)
            })
            test("path:2, other tasks(path:0) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2"}}).tasks[0]).toEqual(testInitialState0)
            })
            test("path:2, other tasks(path:1) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2"}}).tasks[1]).toEqual(testInitialState1)
            })
        })
        describe("[depth=2]", ()=>{
            test("path=0 0", ()=>{
                let testInitialState_delete00 = {
                    tasks: [
                        {
                            text: "option 1",
                            path: "0",
                            key: "0",
                            subtasks: [{
                                    text: "",
                                    path: "0 0",
                                    key: "0 0",
                                    deleted: true,
                                    subtasks: []
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
                                        path: "1 0 0",
                                        key: "1 0 0",
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
                }
                expect(reducer(testInitialState,{type:"deleteTask", payload:{path:"0 0"}})).toEqual(testInitialState_delete00)
            })
            test("path:0 0, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0"}}).tasks[0].subtasks[0].text).toEqual("")
            })
            test("path:0 0, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0"}}).tasks[0].subtasks[0].subtasks.length).toEqual(0)
            })
            test("path:0 0, deleted task should have \"deleted:true\"", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0"}}).tasks[0].subtasks[0].deleted).toEqual(true)
            })
            test("path:0 0, other tasks(path:1) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0"}}).tasks[1]).toEqual(testInitialState1)
            })
            test("path:0 0, other tasks(path:2) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0"}}).tasks[2]).toEqual(testInitialState2)
            })
            test("path:0 0, other tasks(path:0 only parent properties) shouldnt be changed", ()=>{
                expect({...reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0"}}).tasks[0], subtasks: []}).toEqual(testInitialState00)
            })
            test("path=1 0", ()=>{
                let testInitialState_delete10 = {
                    tasks: [
                        {
                            text: "option 1",
                            path: "0",
                            key: "0",
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
                                    text: "",
                                    path: "1 0",
                                    key: "1 0",
                                    deleted: true,
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
                }
                expect(reducer(testInitialState,{type:"deleteTask", payload:{path:"1 0"}})).toEqual(testInitialState_delete10)
            })
            test("path:1 0, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0"}}).tasks[1].subtasks[0].text).toEqual("")
            })
            test("path:1 0, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0"}}).tasks[1].subtasks[0].subtasks.length).toEqual(0)
            })
            test("path:1 0, deleted task should have \"deleted:true\"", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0"}}).tasks[1].subtasks[0].deleted).toEqual(true)
            })
            test("path:1 0, other tasks(path:0) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0"}}).tasks[0]).toEqual(testInitialState0)
            })
            test("path:1 0, other tasks(path:2) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0"}}).tasks[2]).toEqual(testInitialState2)
            })
            test("path:1 0, other tasks(path:1 only parent properties) shouldnt be changed", ()=>{
                expect({...reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0"}}).tasks[1], subtasks: []}).toEqual(testInitialState10)
            })
            test("path=2 0", ()=>{
                let testInitialState_delete20 = {
                    tasks: [
                        {
                            text: "option 1",
                            path: "0",
                            key: "0",
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
                                        path: "1 0 0",
                                        key: "1 0 0",
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
                                    text: "",
                                    deleted: true,
                                    path: "2 0",
                                    key: "2 0",
                                    subtasks: []
                                }
                            ]
                        }
                    ]
                }
                expect(reducer(testInitialState,{type:"deleteTask", payload:{path:"2 0"}})).toEqual(testInitialState_delete20)
            })
            test("path:2 0, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0"}}).tasks[2].subtasks[0].text).toEqual("")
            })
            test("path:2 0, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0"}}).tasks[2].subtasks[0].subtasks.length).toEqual(0)
            })
            test("path:2 0, deleted task should have \"deleted:true\"", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0"}}).tasks[2].subtasks[0].deleted).toEqual(true)
            })
            test("path:2 0, other tasks(path:0) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0"}}).tasks[0]).toEqual(testInitialState0)
            })
            test("path:2 0, other tasks(path:1) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0"}}).tasks[1]).toEqual(testInitialState1)
            })
            test("path:2 0, other tasks(path:2 only parent properties) shouldnt be changed", ()=>{
                expect({...reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0"}}).tasks[2], subtasks: []}).toEqual(testInitialState20)
            })
        })
        describe("[depth=3]", ()=>{
            test("path=0 0 0", ()=>{
                let testInitialState_delete000 = {
                    tasks: [
                        {
                            text: "option 1",
                            path: "0",
                            key: "0",
                            subtasks: [{
                                    text: "option 11",
                                    path: "0 0",
                                    key: "0 0",
                                    subtasks: [
                                        {
                                            text: "",
                                            path: "0 0 0",
                                            key: "0 0 0",
                                            deleted: true,
                                            subtasks:[]
                                        }
                                    ]
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
                                        path: "1 0 0",
                                        key: "1 0 0",
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
                }
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0 0"}})).toEqual(testInitialState_delete000)
            })
            test("path:0 0 0, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0 0"}}).tasks[0].subtasks[0].subtasks[0].text).toEqual("")
            })
            test("path:0 0 0, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0 0"}}).tasks[0].subtasks[0].subtasks[0].subtasks.length).toEqual(0)
            })
            test("path:0 0 0, deleted task should have \"deleted:true\"", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0 0"}}).tasks[0].subtasks[0].subtasks[0].deleted).toEqual(true)
            })
            test("path:0 0 0, other tasks(path:1) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0 0"}}).tasks[1]).toEqual(testInitialState1)
            })
            test("path:0 0 0, other tasks(path:2) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0 0"}}).tasks[2]).toEqual(testInitialState2)
            })
            test("path:0 0 0, other tasks(path:0 only parent properties) shouldnt be changed", ()=>{
                expect({...reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0 0"}}).tasks[0], subtasks: []}).toEqual(testInitialState00)
            })
            test("path:0 0 0, other tasks(path:0 0 only parent properties) shouldnt be changed", ()=>{
                expect({...reducer(testInitialState, {type:"deleteTask", payload:{path:"0 0 0"}}).tasks[0].subtasks[0], subtasks: []}).toEqual(testInitialState000)
            })
            test("path=1 0 0", ()=>{
                let testInitialState_delete100 = {
                    tasks: [
                        {
                            text: "option 1",
                            path: "0",
                            key: "0",
                            subtasks: [{
                                    text: "option 11",
                                    path: "0 0",
                                    key: "0 0",
                                    subtasks: [
                                        {
                                            text: "option 111",
                                            path: "0 0 0",
                                            key: "0 0 0",
                                            subtasks:[]
                                        }
                                    ]
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
                                        text: "",
                                        path: "1 0 0",
                                        key: "1 0 0",
                                        deleted: true,
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
                }
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0 0"}})).toEqual(testInitialState_delete100)
            })
            test("path:1 0 0, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0 0"}}).tasks[1].subtasks[0].subtasks[0].text).toEqual("")
            })
            test("path:1 0 0, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0 0"}}).tasks[1].subtasks[0].subtasks[0].subtasks.length).toEqual(0)
            })
            test("path:1 0 0, deleted task should have \"deleted:true\"", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0 0"}}).tasks[1].subtasks[0].subtasks[0].deleted).toEqual(true)
            })
            test("path:1 0 0, other tasks(path:0) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0 0"}}).tasks[0]).toEqual(testInitialState0)
            })
            test("path:1 0 0, other tasks(path:2) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0 0"}}).tasks[2]).toEqual(testInitialState2)
            })
            test("path:1 0 0, other tasks(path:1 only parent properties) shouldnt be changed", ()=>{
                expect({...reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0 0"}}).tasks[1], subtasks: []}).toEqual(testInitialState10)
            })
            test("path:1 0 0, other tasks(path:1 0 only parent properties) shouldnt be changed", ()=>{
                expect({...reducer(testInitialState, {type:"deleteTask", payload:{path:"1 0 0"}}).tasks[1].subtasks[0], subtasks: []}).toEqual(testInitialState100)
            })
            test("path=2 0 0", ()=>{
                let testInitialState_delete200 = {
                    tasks: [
                        {
                            text: "option 1",
                            path: "0",
                            key: "0",
                            subtasks: [{
                                    text: "option 11",
                                    path: "0 0",
                                    key: "0 0",
                                    subtasks: [
                                        {
                                            text: "option 111",
                                            path: "0 0 0",
                                            key: "0 0 0",
                                            subtasks:[]
                                        }
                                    ]
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
                                        path: "1 0 0",
                                        key: "1 0 0",
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
                                        text: "",
                                        path: "2 0 0",
                                        key: "2 0 0",
                                        deleted: true,
                                        subtasks: []
                                    }]
                                }
                            ]
                        }
                    ]
                }
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0 0"}})).toEqual(testInitialState_delete200)
            })
            test("path:2 0 0, deleted task should have empty text", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0 0"}}).tasks[2].subtasks[0].subtasks[0].text).toEqual("")
            })
            test("path:2 0 0, deleted task should have empty subtasks", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0 0"}}).tasks[2].subtasks[0].subtasks[0].subtasks.length).toEqual(0)
            })
            test("path:2 0 0, deleted task should have \"deleted:true\"", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0 0"}}).tasks[2].subtasks[0].subtasks[0].deleted).toEqual(true)
            })
            test("path:2 0 0, other tasks(path:0) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0 0"}}).tasks[0]).toEqual(testInitialState0)
            })
            test("path:2 0 0, other tasks(path:1) shouldnt be changed", ()=>{
                expect(reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0 0"}}).tasks[1]).toEqual(testInitialState1)
            })
            test("path:2 0 0, other tasks(path:2 only parent properties) shouldnt be changed", ()=>{
                expect({...reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0 0"}}).tasks[2], subtasks: []}).toEqual(testInitialState20)
            })
            test("path:2 0 0, other tasks(path:2 0 only parent properties) shouldnt be changed", ()=>{
                expect({...reducer(testInitialState, {type:"deleteTask", payload:{path:"2 0 0"}}).tasks[2].subtasks[0], subtasks: []}).toEqual(testInitialState200)
            })
        })    
    })
    describe("add action",()=>{
        describe("[depth=1]",()=>{
            test("adding path=3", ()=>{
                let testInitialState_add3 = {
                    tasks: [
                        {
                            text: "option 1",
                            path: "0",
                            key: "0",
                            subtasks: [{
                                    text: "option 11",
                                    path: "0 0",
                                    key: "0 0",
                                    subtasks: [{
                                        text: "option 111",
                                        key: "0 0 0",
                                        path: "0 0 0",
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
                                        path: "1 0 0",
                                        key: "1 0 0",
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
                        },
                        {
                            text: "option 4",
                            path: "3",
                            key: "3",
                            deleted: false,
                            subtasks: []
                        }
                    ]
                }
                expect(reducer(testInitialState,{type:"addTask", payload:{text:"option 4", path:"3"}})).toEqual(testInitialState_add3)
            })
            test("adding path=3, added task should be an Object", ()=>{
                expect(reducer(testInitialState, {type:"addTask", payload:{text:"option 4", path:"3"}}).tasks[3]).toBeInstanceOf(Object)
            })
            test("adding path=3, added task should be defined", ()=>{
                expect(reducer(testInitialState, {type:"addTask", payload:{text:"option 4", path:"3"}}).tasks[3]).not.toEqual(undefined)
            })
            test("adding path=3, added task should not be an Array", ()=>{
                expect(reducer(testInitialState, {type:"addTask", payload:{text:"option 4", path:"3"}}).tasks[3]).not.toBeInstanceOf(Array)
            })
            test("adding path=3, added task should not be a null", ()=>{
                expect(reducer(testInitialState, {type:"addTask", payload:{text:"option 4", path:"3"}}).tasks[3]).not.toEqual(null)
            })
            test("adding path=3, added task should have a \"option 4\" text", ()=>{
                expect(reducer(testInitialState, {type:"addTask", payload:{text:"option 4", path:"3"}}).tasks[3].text).toEqual("option 4")
            })
            test("adding path=3, added task should have a \"3\" path property", ()=>{
                expect(reducer(testInitialState, {type:"addTask", payload:{text:"option 4", path:"3"}}).tasks[3].path).toEqual("3")
            })
            test("adding path=3, added task should have a \"3\" key property", ()=>{
                expect(reducer(testInitialState, {type:"addTask", payload:{text:"option 4", path:"3"}}).tasks[3].key).toEqual("3")
            })
            test("adding path=3, added task should have a subtasks property as \"[]\"", ()=>{
                expect(reducer(testInitialState, {type:"addTask", payload:{text:"option 4", path:"3"}}).tasks[3].subtasks).toEqual([])
            })
        })
    })
})