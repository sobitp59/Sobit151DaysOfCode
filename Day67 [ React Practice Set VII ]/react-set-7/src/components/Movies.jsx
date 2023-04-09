import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../DB/movies';

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [select, setSelect] = useState('all')


    const loadMovies = async () => {
        const response = await fetchMovies('https://example.com/api/movies');
        if(response.status === 200){
            console.log(response.data);
            setMovies(response.data);
        }
    }

    useEffect(() => {
        loadMovies();
    }, [])


    const handleSearch = (e) => {
        setSelect(e.target.value);
    }

    const filteredData = select === 'all' ? movies : movies.filter(({year}) => year === Number(select))
    

    return (
    <div className='box'>
        <h1>movies</h1>
        <p>filter by year:</p>
        <select onChange={handleSearch}>
            <option value="all">all</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
        </select>
        <div>
            {
                filteredData.map((movie) => {
                    return <h2>{movie.title} - {movie.year}</h2>
                })
            }
        </div>
    </div>
  )
}

export default Movies