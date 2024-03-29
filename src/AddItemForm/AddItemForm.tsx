import React, {memo} from 'react';
import {IconButton, TextField} from '@mui/material';
import {AddBox} from '@mui/icons-material';
import {useAddItemForm} from './hooks/useAddItemForm';


export type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = memo((props: AddItemFormPropsType) => {
    console.log('AddItemForm Called')

const {title, onKeyPressHandler, onChangeHandler, addItem, error} = useAddItemForm(props.addItem)

    return <div>
        <TextField variant="outlined"
                   error={!!error}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   label="Title"
                   helperText={error}
        />
        <IconButton color="primary" onClick={addItem}>
            <AddBox />
        </IconButton>
    </div>
})
