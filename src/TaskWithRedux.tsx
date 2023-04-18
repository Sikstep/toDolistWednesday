import React, {ChangeEvent, memo} from 'react';
import {useDispatch} from 'react-redux';
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from './state/tasks-reducer';
import {Checkbox} from '@mui/material';
import {EditableSpan} from './EditableSpan';
import IconButton from '@mui/material/IconButton/IconButton';
import {Delete} from '@mui/icons-material';
import {TaskType} from './TodolistWithRedux';

type TaskWithReduxType = {
    tasks: TaskType
    todolistID: string
}

export const TaskWithRedux: React.FC<TaskWithReduxType> = memo(({tasks, todolistID}) => {
    console.log('Tasks Called')

    const dispatch = useDispatch()
    const onClickHandler = () => dispatch(removeTaskAC(tasks.id, todolistID))
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(tasks.id, newIsDoneValue, todolistID));
    }
    const onTitleChangeHandler = (newValue: string) => {
        dispatch(changeTaskTitleAC(tasks.id, newValue, todolistID));
    }

    return (
        <div>
            <div className={tasks.isDone ? "is-done" : ""}>
                        <Checkbox
                            checked={tasks.isDone}
                            color="primary"
                            onChange={onChangeHandler}
                        />

                        <EditableSpan value={tasks.title} onChange={onTitleChangeHandler} />
                        <IconButton onClick={onClickHandler}>
                            <Delete />
                        </IconButton>
                    </div>

        </div>
    );
});

