import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <div className="mb-3 card-title">
                <h1>DC HEROES</h1>
            </div>

            <HeroList publisher={"DC Comics"}/>

        </div>
    )
}
