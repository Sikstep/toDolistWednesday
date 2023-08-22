import {useState} from 'react';
import {todolistId1, todolistId2} from '../id-utils';
import {TodolistType} from '../App';

export const useTodolists = () => {

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ])
    return [todolists, setTodolists] as const

}