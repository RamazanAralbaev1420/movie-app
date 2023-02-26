import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Carusel from "../components/Carusel/Carusel";
import TypeTitle from "../components/TypeTitle/TypeTitle";
import { APIKEY } from "../context/context";

function Home() {
    const api_key = useContext(APIKEY)

    const [trends, setTrends] = useState([])
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])

    useEffect(() => {
        getTrends()
        getMovies()
        getSeries()
    }, [])

    async function getTrends() {
        await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=1`)
            .then(res => {
                setTrends(res.data.results)
            })
            .catch(err => console.log(err))
    }

    async function getMovies() {
        await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=1`)
            .then(res => {
                setMovies(res.data.results)
            })
            .catch(err => console.log(err))
    }

    async function getSeries() {
        await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=1`)
            .then(res => {
                console.log(res.data);
                setSeries(res.data.results)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="home main">
            <div className="wrap">
                <div className="wrap_content">
                    <h1>Welcome</h1>
                    <span>
                        Millions of movies, TV shows and people to discover. Explore now.
                    </span>
                </div>
            </div>
            <Container>
                <div className="category_box">
                    <TypeTitle title='Trending'/>
                    <Carusel contents={trends} type="home" /> 
                </div>
                <div className="category_box">
                    <TypeTitle title='Movies'/>
                    <Carusel contents={movies} type="home" />
                </div>
                <div className="category_box">
                    <TypeTitle title='Series'/>
                    <Carusel contents={series} type="home" />
                </div>
            </Container>

        </div>
    )
}

export default Home;