
import React from 'react';
import Todo from './Todo.js';




function List(props) {
    let displayList = props.listItems.map( ( elm, i ) => {
        return (
            <Todo key={ i } todos={ elm } />
        )
    });

    return (
       <div>
           { displayList }
       </div> 
    );
}

export default List;

