import React, {ChangeEvent, memo, useCallback} from 'react';
import {TodolistType} from './App/App';
import {AddItemForm} from './AddItemForm/AddItemForm';
import {EditableSpan} from './EditableSpan';
import IconButton from '@mui/material/IconButton/IconButton';
import {Delete} from '@mui/icons-material';
import {Button, Checkbox} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from './state/tasks-reducer';
import {ChangeTodolistFilterAC, ChangeTodolistTitleAC, RemoveTodolistAC} from './state/todolists-reducer';
import {TaskWithRedux} from './TaskWithRedux';


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolist: TodolistType
}

export const TodolistWithRedux = memo(({todolist}: PropsType) => {
    console.log('todolist')
    const {id, title, filter} = todolist
    let tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[id])
    const dispatch = useDispatch();
    const addTask = useCallback((title: string) => {
        dispatch(addTaskAC(title, id))
    },[id])

    const removeTodolist = () => {
        const action = RemoveTodolistAC(id)
        dispatch(action)
    }
    const changeTodolistTitle = useCallback((title: string) => {
        dispatch(ChangeTodolistTitleAC(id, title))

    },[id])

    const onAllClickHandler = () => dispatch(ChangeTodolistFilterAC(id, 'all'));
    const onActiveClickHandler = () => dispatch(ChangeTodolistFilterAC(id, 'active'));
    const onCompletedClickHandler = () => dispatch(ChangeTodolistFilterAC(id, 'completed'));

    if (filter === "active") {
        tasks = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasks = tasks.filter(t => t.isDone === true);
    }

    return <div>
        <h3> <EditableSpan value={title} onChange={changeTodolistTitle} />
            <IconButton onClick={removeTodolist}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                tasks.map(t => {

                    return (
                        <TaskWithRedux key={t.id} tasks={t} todolistID={id}/>
                    )
                })

            }
        </div>
        <div>
            <Button variant={filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'inherit'}
            >All
            </Button>
            <Button variant={filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})


