import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions';

import { Button } from './Button';
import {TaskWithRedux} from '../TaskWithRedux';
import {TaskType} from '../TodolistWithRedux';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TaskWithRedux> = {
  title: 'TODOLISTS/TaskWithRedux',
  component: TaskWithRedux,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof TaskWithRedux>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const TaskIsNotDone: Story = {
  args: {
    tasks: {id: '12313jfdf', title: 'Lost', isDone: true},
    todolistID: 'a123dsad1'
  }
}
export const TaskisDone: Story = {
  // args: {
  //   label: 'Button'
  // }
}