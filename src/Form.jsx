import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Form = ({addItem}) => {
    let [newItem, setNewItem] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!newItem){
            toast.error('Please add something')
            return;
        }
        addItem(newItem)
        setNewItem('')
    }
    return (
            <form action="" onSubmit={handleSubmit}>
                <h4>Grocery Bud</h4>
                <div className='form-control'>
                    <input className='form-input' value={newItem} type="text" onChange={(e)=>setNewItem(e.target.value)}/>
                    <button className='btn'>Add Item</button>
                </div>
            </form>
    )
}

export default Form
