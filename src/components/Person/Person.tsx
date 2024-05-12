import style from './Person.module.scss'

import { FC, useState } from 'react'

import TPerson from '../../types/person'

import { transformDate } from '../../utils/Utils'

const Person:FC<TPerson> = (props) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
    <div className={style.person}>     
        <ul className={style.person__list}>
            <li className={style.person__item}>
                <img 
                className={style.person__image} 
                src={props.picture.thumbnail} 
                alt={`'${props.name.first} ${props.name.last}'`}    
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}           
                />
            </li>
            <li className={isHovered ? `${style.person__item} ${style.person__item_visible}` : `${style.person__item} ${style.person__item_invisible}`}>
                <img 
                className={style.person__tooltip} 
                src={props.picture.large} 
                alt={`'${props.name.first} ${props.name.last}'`}
             
                />
            </li>
            <li className={style.person__item}>{props.name.first} {props.name.last}</li>
            <li className={style.person__item}>{props.location.state} {props.location.city}</li>
            <li className={style.person__item}>{props.email}</li>
            <li className={style.person__item}>{props.phone}</li>
            <li className={style.person__item}>{transformDate(props.registered.date)}</li>
        </ul>
    </div>
    )
}

export default Person