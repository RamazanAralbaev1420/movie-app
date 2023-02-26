import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Carusel from "../components/Carusel/Carusel";
import { APIKEY } from "../context/context";
import { Wrap } from "../style/Styled";

function SingleMovie() {
    const api_key = useContext(APIKEY)
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [videoKey, setVideoKey] = useState("")
    const [actors, setActors] = useState([])
    useEffect(() => {
        window.scroll(0, 0)
        getSingleMovie('movie')
        getVideo()
        getActors()
    }, [])


    async function getSingleMovie(type = 'movie') {
        await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}&language=en-US`)
            .then(res => {
                console.log(res.data)
                setMovie(res.data)
            })
            .catch(err => {
                getSingleMovie('tv')
            })
    }

    async function getVideo() {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`)
            .then(res => {
                console.log(res.data)
                setVideoKey(res.data.results[0].key)
            })
            .catch(err => console.log(err))
    }

    async function getActors() {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`)
            .then(res => {
                console.log(res.data)
                setActors(res.data.cast)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="single_movie">
            <Wrap bg_url={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`} color="red">
                <div className=".wrap_content">
                    <Row>
                        <Col xs="12" xl="3" className="wrap_image">
                            <div className="content_image">
                                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="" />
                            </div>
                        </Col>
                        <Col xs="12" xl="9" className="wrap_info">
                            <div className="movie_header_title">
                                <h3>
                                    {
                                        movie.title
                                    }
                                </h3>
                            </div>
                            <div className="movie_details">
                                <article>
                                    {
                                        movie.vote_average
                                    }
                                </article>
                                <a className="btn" href={`https://www.youtube.com/watch?v=${videoKey}`}
                                    target={'_blank'}>
                                    Play Trailer
                                </a>
                            </div>
                            <div className="actors">
                                        <Carusel contents={actors} type="single" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Wrap>
        </div>
    )
}

export default SingleMovie