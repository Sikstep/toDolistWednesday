import React, {useCallback} from 'react';
import '../App.css';
import {TaskType} from '../Todolist';
import {AddItemForm} from '../AddItemForm/AddItemForm';
import AppBar from '@mui/material/AppBar/AppBar';
import {Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@mui/material';
import {Menu} from '@mui/icons-material';
import {AddTodolistAC} from '../state/todolists-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../state/store';
import {TodolistWithRedux} from '../TodolistWithRedux';


export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function AppWithRedux() {

    let todolists = useSelector<AppRootStateType, TodolistType[]>((state => state.todolists))

    const dispatch = useDispatch()

    const addTodolist = useCallback((title: string) => {
        const action = AddTodolistAC(title)
        dispatch(action)
    },[dispatch])

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News, news
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {

                            return <Grid key={tl.id} item>
                                <Paper style={{padding: '10px'}}>
                                    <TodolistWithRedux todolist={tl}/>
                                    {/*<Todolist*/}
                                    {/*    key={tl.id}*/}
                                    {/*    id={tl.id}*/}
                                    {/*    title={tl.title}*/}
                                    {/*    tasks={tasksForTodolist}*/}
                                    {/*    removeTask={removeTask}*/}
                                    {/*    changeFilter={changeFilter}*/}
                                    {/*    addTask={addTask}*/}
                                    {/*    changeTaskStatus={changeStatus}*/}
                                    {/*    filter={tl.filter}*/}
                                    {/*    removeTodolist={removeTodolist}*/}
                                    {/*    changeTaskTitle={changeTaskTitle}*/}
                                    {/*    changeTodolistTitle={changeTodolistTitle}*/}
                                    {/*/>*/}
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;
