/*import React, {useState , useEffect } from "react";

const asynmock = () => {

const [harrys, setHarrys] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c1a6fb9a7amshaad9e0344342abbp1b52eajsn45e5e1e653e0',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    
    
      

    useEffect(() => {
        fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
        .then(response => response.json())
        .then(response => setHarrys(response.results))
        .catch(err => console.error(err));
    }, [])

    console.log(harrys);

    return (
        <div></div>
    )
}

export default asynmock; */