import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StarWarInfo = () => {
    
    let [starWarInfo, setStarWarInfo] = useState([]);
    const {resource, id} = useParams();
    let [APINotFound, setAPINotFound] = useState(false)
    console.log(`https://swapi.dev/api/${resource}/${id}`)

    useEffect(()=>{ //protects any code inside the useEffect callback from running again on the re-rendering of a component
        setAPINotFound(false)
        axios.get(`https://swapi.dev/api/${resource}/${id}`)
            .then(response=>{
                console.log(response.data)
                setStarWarInfo(response.data)
            })
            .catch((err)=>{
                setAPINotFound(true)
                console.log("we are having an error ", err)
            })
    },[resource, id])   //dependency array
    

    return (<>
        <section>
            {APINotFound === true?
                <div>
                    <h3>These aren't the droids you're looking for!</h3>
                </div>
            :resource === "films"?
                <section className='mt-3'>
                    <h3>Title: {starWarInfo.title}</h3>
                    <h3>Episode Id: {starWarInfo.episode_id}</h3>
                    <h3>Director: {starWarInfo.director}</h3>
                    <h3>Producer: {starWarInfo.producer}</h3>
                </section>
            :resource === "people"?
                <section className='mt-3'>
                    <h3>Name: {starWarInfo.name}</h3>
                    <h3>Height: {starWarInfo.height}</h3>
                    <h3>Hair Color: {starWarInfo.hair_color}</h3>
                    <h3>Skin Color: {starWarInfo.skin_color}</h3>
                </section>
            :resource === "planets"?
                <section className='mt-3'>
                    <h3>Name: {starWarInfo.name}</h3>
                    <h3>Orbital Period: {starWarInfo.orbital_period}</h3>
                    <h3>Diameter: {starWarInfo.diameter}</h3>
                    <h3>Climate: {starWarInfo.climate}</h3>
                </section>
            :resource === "species"?
                <section className='mt-3'>
                    <h3>Name: {starWarInfo.name}</h3>
                    <h3>Classification: {starWarInfo.classification}</h3>
                    <h3>Designation: {starWarInfo.designation}</h3>
                    <h3>Average Height: {starWarInfo.average_height}</h3>
                </section>
            :resource === "starships"?
                <section className='mt-3'>
                    <h3>Name: {starWarInfo.name}</h3>
                    <h3>Model: {starWarInfo.model}</h3>
                    <h3>Passengers: {starWarInfo.passengers}</h3>
                    <h3>Starship Class: {starWarInfo.starship_class}</h3>
                </section>
            :resource === "vehicles"?
                <section className='mt-3'>
                    <h3>Name: {starWarInfo.name}</h3>
                    <h3>Model: {starWarInfo.model}</h3>
                    <h3>Passengers: {starWarInfo.passengers}</h3>
                    <h3>Consumables: {starWarInfo.consumables}</h3>
                </section>
            : <h1>Please make a selection!!</h1>
            }
        </section>
        </>
    );
};

export default StarWarInfo;