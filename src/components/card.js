import React from 'react'
import avatar from '../../public/images/avatar.png'

export const Card = (props) => {
    return (
        <div className='card1'>

            <img src={avatar} />
            <div className='card-text'>
                <h1>{props.name}</h1>
                <h2>{props.descrip}</h2>
                <h2>{props.company}</h2>
                <button>Inurgize</button>
            </div>
        </div>
    )
}



export const SmallCard = () => {
    return (
        <div className='smallCard'>
            <i class="fab fa-react fa-3x"></i>
            <h5>category name</h5>
            <h5>1</h5>
        </div>
    )
}

export const ColoredSmallCard = () => {
    return (
        <div className='coloredSmallCard'>
            <i class="fab fa-react fa-3x"></i>
            <h5>category name</h5>
            <h5>1</h5>
        </div>
    )
}