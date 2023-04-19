import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import React from 'react';

import { Button } from './Button';
import {TaskWithRedux} from '../TaskWithRedux';
import {TaskType} from '../TodolistWithRedux';
import {ReduxStoreProviderDecorator} from './ReduxStoreProviderDecorator';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../state/store';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TaskWithRedux> = {
  title: 'TODOLISTS/TaskWithRedux',
  component: TaskWithRedux,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    tasks: {id: 'sasdad', title: 'JS', isDone: true},
    todolistID: 'todolistId1'
  },
  decorators: [ReduxStoreProviderDecorator]
};

export default meta;
type Story = StoryObj<typeof TaskWithRedux>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TaskCopy = () => {
  const task = useSelector<AppRootStateType, TaskType>(state => state.tasks['todolistId1'][0])
  return <TaskWithRedux tasks={task} todolistID={'todolistId1'}/>
}

export const TaskWithReduxStory: Story = {
 render: () => <TaskCopy/>
}
