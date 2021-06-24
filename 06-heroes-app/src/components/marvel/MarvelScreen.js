import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
    return (
        <div style={{backgroundColor: "transparent"}}>
            <div className="mb-3 card-title"  >
                <h1>MARVEL HEROES</h1>
            </div>

            
            <HeroList publisher="Marvel Comics"/>
        </div>
    )
}
