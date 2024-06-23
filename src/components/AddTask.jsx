import React from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = () => {
    return ( 
        <div class="form__group field">
    <input type="input" class="form__field" placeholder="Name" required=""></input>
    <label for="name" class="form__label">New Task</label>
    <Button>+</Button>
</div>
     );
}
 
export default AddTask;