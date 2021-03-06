import { useState } from "react";
import { useDispatch } from "react-redux";
import {addItem, loadTodo } from '../actions';
const AddTodo = () => {
    const [ item, setItem] = useState("");
    const dispatch = useDispatch();
    return(
        <div>
            <input type="text" placeholder="Add a todo..." value={item} onChange={(e) => {
                setItem(e.target.value);
            }} />
            <button onClick={() =>{
                dispatch(addItem({
                    title:item,
                    done:false,
                }

                ));
                 setItem("");
                
                } }>Add</button>
                <button
                onClick ={() => 
                dispatch(loadTodo())}
                >Load Todo</button>
           
        </div>
    );
};

export default AddTodo;