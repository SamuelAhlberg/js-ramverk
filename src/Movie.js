import React from 'react'

export default function Movie(props){
    let star = [];
    for (var i = 0; i < parseInt(props.item.rating); i++) {
        star.push(<img src="star.png" alt="Star" />);
        }
    return(
        <div>
            <li className="movie-list-item">
                {props.item.title}
                <button className ="btn btn-sm btn-danger float-end" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
                {star}
            </li>
        </div>
    )
}
