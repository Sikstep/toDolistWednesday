import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'

import { Button } from './Button';
import {AddItemForm, AddItemFormPropsType} from '../AddItemForm/AddItemForm';
import {log} from 'util';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from '@mui/material';
import {AddBox} from '@mui/icons-material';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AddItemForm> = {
  title: 'TODOLISTS/AddItemForm',
  component: AddItemForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    addItem: {
      description: 'Button clicked insede form',
      // action: 'clicked' (1 variant)
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddItemForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const AddItemFormStory: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    addItem: action('Button clicked insede form')   // 2 varian Для Action
  }
};

export const AddItemFormStoryWithError = (args: AddItemFormPropsType) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>('Title is required')

    const addItem = () => {
      if (title.trim() !== "") {
        args.addItem(title);
        setTitle("");
      } else {
        setError("Title is required");
      }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if(error) {
        setError(null);
        if (e.charCode === 13) {
          addItem();
        }
      }

    }

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

}
