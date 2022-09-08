import React, {useState, useEffect} from 'react'


import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [harrys, setHarrys] = useState([])

    useEffect(() => {
        fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes')
        .then(response => response.json())
        .then((data) => setHarrys(data));
    }, [])

    

    const harry = harrys.filter(user => user.id === 1)
    

    return (
            
            <div>
                {harry.map((user) => { 
                return < ItemDetail key={user.id} info={user} />;
                })}
                
                
            </div>
        )
    }
    export default ItemDetailContainer ;