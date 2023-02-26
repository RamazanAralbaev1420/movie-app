import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { APIKEY } from "../../context/context";
import './Filter.css'

function Filter({selectedGenres, setSelectGenres }) {
    const api_key = useContext(APIKEY)
    const [genresList, setGenresList] = useState([])

    useEffect(() => {
        getGenresList()
    }, [])

    function setSelectHandle(selectedGenre) {
        

        let newGenresList = genresList.map((item) => {
            if(item.id === selectedGenre.id && selectedGenre.selected) {
                item.selected = false;
            } else if(item.id === selectedGenre.id ) {
                item.selected = true
            }
            return item
        })
        setGenresList(newGenresList)
        
        let newSelectedGenres = genresList.filter(item => {
            return item.selected === true
        })

        let ids = newSelectedGenres.map((item, index) => {
            return item.id
        })
        setSelectGenres(ids)

        
    }


    function getGenresList() {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`)
            .then(res => {
                console.log(res)
                setGenresList(res.data.genres)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <ul className="genres_list">
                {
                    genresList.map((item, index) => {
                        return (
                            <li
                                className={`${item.selected ? 'genre  is_selected' : "genre"}`}
                                key={index}
                                onClick={() => setSelectHandle(item)}
                            >
                                {item.name}

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Filter