import { FC } from 'react'

import style from './Container.module.scss'

import Person from '../Person/Person'

import TPerson from '../../types/person'

interface Props {
    persons: TPerson[]
}

const Container: FC<Props> = (props) => {

    return (    
        <main className={style.container}>
            {
                props.persons.length !== 0 ?(
                props.persons.map((el: TPerson, ind: number) => (
                    <Person 
                    key={ind} 
                    name={el.name}
                    email={el.email}
                    picture={el.picture}
                    location={el.location}
                    phone={el.phone}
                    registered={el.registered}
                    />
                ))) :
                <p className={style.container__nomatch}>Nothing found :(</p>
            }
        </main> 
    )
}

export default Container