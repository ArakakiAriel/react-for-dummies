import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import './HeroScreen.css';

export const HeroScreen = ({history}) => {
    
    const {hero_id} = useParams(); //custom hook que obtiene todos los parametros que mandemos por url

    const hero = useMemo(() => getHeroById(hero_id), [hero_id]);
    

    const handleReturn = (e) => {
        e.preventDefault();

        if(history.length <= 2){
            history.push("/");
        }else{
            history.goBack();
        }
    }

    if(!hero){
        return <Redirect to="/"/>
    }

    const {
        id,
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters} = hero;


    return (
        <div className="container">
            <div className="row equal ">
                <div className="col col-md-4">
                    <img className="img" src={`../assets/heroes/${id}.jpg`} alt={`${superhero} img`}/>
                </div>
                <div className="col col-md-8 ">
                        <div style={{height:"10%"}}>
                            <h2 className="card-title">{superhero}</h2>
                        </div>
                        <div style={{height:"80%"}}> 
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                                <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                                <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
                            </ul>
                            {
                                alter_ego !== characters &&
                                <div>
                                    <hr/>
                                    <h5 ><b>Characters: </b></h5>
                                    <h6>{characters}</h6>
                                    <hr/>
                                </div>
                                
                            }
                        </div>
                        
                        <div style={{height:"10%"}}>
                            <button className="btn btn-danger" onClick={handleReturn}>Return</button>
                        </div>
                            
                </div>
            </div>
        </div>
    )
}
