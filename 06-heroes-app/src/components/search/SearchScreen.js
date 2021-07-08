import React, { useState } from 'react';
import { HeroCard } from '../hero/HeroCard';
import queryString from "query-string";
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
export const SearchScreen = ({history}) => {
    const location = useLocation(); //Al igual que location.search, nos devuelve los parametros siguientes a nuestra ruta "padre" (EJ: ?q=blabla&exp=123)

    const {q = ''} = queryString.parse(location.search);
    const [formValues, handleInputChange, reset] =useForm({heroName: q});

    const {heroName} = formValues;


    const heroesFiltered = getHeroesByName(q);

    const handleSearch = async (e) => {
        e.preventDefault();
        history.push(`?q=${heroName}`);

    }

    return (
        <div>
            <h1>Find your Hero!</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input type="text"
                        placeholder="Heroes name"
                        className="form-control mb-3"
                        name="heroName"
                        value = {heroName}
                        onChange={handleInputChange}
                        />
                        <button className="btn  btn-block btn-warning">Submit</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        (q === '') && <div className="alert alert-warning">Search a hero</div>
                    }
                    {
                        
                        (heroesFiltered.length == 0 && q!='')?
                            <div className="alert alert-danger">No heroes found</div>:
                            
                            heroesFiltered.map(hero => (
                                (hero.superhero.toLowerCase().includes(q)) && <div className="mb-2"><HeroCard key={hero.id} {...hero}/></div>
                            ))
                        
                    }

                </div>
            </div>
        </div>
    )
}
