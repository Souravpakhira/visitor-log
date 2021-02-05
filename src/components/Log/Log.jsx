import React from 'react'

const Log = () => {
    let Lists=[];
    Lists = JSON.parse(localStorage.getItem('Logs'))
    console.log(Lists)

    return (

        <div>
            {Lists.map(list=>{
                return <li>{list.Name}</li> 
            })}
        </div>
    )
}

export default Log
