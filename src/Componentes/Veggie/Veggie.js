import React, {useState, useEffect} from 'react'
import Item from '../ItemListContainer/Item'


const Veggie = () => {

	const [veggies, setVeggies] = useState([])

    const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'c1a6fb9a7amshaad9e0344342abbp1b52eajsn45e5e1e653e0',
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
		}
	};
    
    
      

    useEffect(() => {
        fetch('https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=8138', options)
        .then(response => response.json())
        .then(response => setVeggies(response.results))
        .catch(err => console.error(err));
    }, [])


	

	const veggie = veggies.filter( user => user.yields === "Servings: 4" )
	//const harry = harrys.filter(user => user.id === 1)

	console.log(veggie);

	return (
		<div id='gridCards'>
            {veggie.map((user) => { 
                return < Item id="products" key={user.id} info={user} />;
                })}
        </div>
	);
};

export default Veggie;

