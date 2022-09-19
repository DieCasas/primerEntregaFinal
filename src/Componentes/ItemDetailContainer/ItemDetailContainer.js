import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {


	const [harry, setHarry] = useState([])

	let   {id}  = useParams();

	console.log(id);

   
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'c1a6fb9a7amshaad9e0344342abbp1b52eajsn45e5e1e653e0',
				'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
			}
		};
		
		useEffect(() => {
			fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes`, options)
			.then(response => response.json())
			.then(response => setHarry(response.results))
			.catch(err => console.error(err));
		}, [id])

		console.log(harry);

	return (
		<div id='gridCards' className='containerCards'>
			{harry.map((char) => {
				return (
					<div>
						<ItemDetail data={char} />
					</div>
				);
			})}
		</div>
	);
    }
    export default ItemDetailContainer ;

    