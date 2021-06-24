import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero}/> //Se puede enviar cada argumento de hero por separado con el operador spread
                ))
            }
        </div>
    )
}
