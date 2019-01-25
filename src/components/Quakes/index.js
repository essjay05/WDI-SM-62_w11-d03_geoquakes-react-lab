import React from 'react';


export default ({ quake }) => {

    
    if (!quake) return <h1> not saving to quake state </h1>

    return (
        <div className="container">
            {quake.map(( quake, i )=> {
                return<ul className="quakeList">
                    <li key={i}>{quake.properties.title}</li>
                </ul>
            })}
        </div>
    )    
}