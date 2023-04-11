import React, { useEffect, useState } from 'react';
import { fetchMovieGenre } from '../DB/moviegenre';

const MoviesGenre = () => {
    const [movies, setMovies] = useState([])
    const [selectedGenre, setSelectedGenre] = useState('all')
    
    const loadMovie = async () => {
        const response = await fetchMovieGenre('https://example.com/api/movies');
        console.log(response.data);
        setMovies(response.data);
    }

    useEffect(() => {
        loadMovie()
    }, [])

    const filterMovieByGenre = (e) => {
        setSelectedGenre(e.target.value)
    }

    const movieFilter = selectedGenre === 'all' ? movies : movies.filter(({genre}) => genre === selectedGenre);

    return (
    <div className='box'>
        <h1>movie genre</h1>
        <div>
            <select onChange={filterMovieByGenre}>
                <option value="all">all</option>
            {
                movies.reduce((category, {genre}) => {

                    let isDuplicate = false;

                    for(let movieGenre of category){
                        if(movieGenre === genre){
                            isDuplicate = true;
                            break;
                        }
                    }

                    if(!isDuplicate){
                        category.push(genre);
                    }
                    

                    return category
                }, []).map((genre) => (
   
                <option value={genre}>{genre}</option>
                ))
            }
            </select>
        </div>
        <div>
            { movieFilter.map(({title, year, genre}) => {
                return(
                    <>  
                        <h2>{title}</h2>
                        <p><strong>year</strong> : {year}</p>
                        <p><strong>genre</strong> : {genre}</p>
                        <hr />
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default MoviesGenre