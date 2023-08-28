import {ChangeEvent, KeyboardEvent, useState} from 'react';

export const useAddItemForm = () => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
        // props zamenit'
    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
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

    return {
        title,
        onKeyPressHandler,
        onChangeHandler,
        addItem,
        error

}