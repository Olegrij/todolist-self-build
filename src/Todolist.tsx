import React from "react";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>
}

export function Todolist(props: ToDoListPropsType) {
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {
                        props.tasks.map( (t) => {
                           return <li>
                                <input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
                               <button>x</button>
                            </li>

                        })
                    }
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}