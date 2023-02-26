import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { APIKEY } from '../context/context';
import CustomPagination from "../components/Pagintaion/CustomPagination";
import { Col, Container, Row } from "react-bootstrap";
import SingleComponent from "../components/SingleComponent/SingleComponent";
import { useParams } from "react-router";
import Filter from "../components/Filter/Filter";

function Movies() {
    const api_key = useContext(APIKEY)
    const { page } = useParams()
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(page)
    const [selectedGenres, setSelectGenres] = useState([])
    const [totalPage, setTotalPage] = useState(0)


    useEffect(() => {
        getMovies()
    }, [currentPage, selectedGenres])

    async function getMovies() {
        await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${selectedGenres}`)
            .then(res => {
                setTotalPage(res.data.total_pages)
                setMovies(res.data.results)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="movie main">
            <Container >
                <Row>
                    <Col xl="3">
                        <Filter
                            selectedGenres={selectedGenres}
                            setSelectGenres={setSelectGenres}
                        />
                    </Col>
                    <Col xl="9">
                        <Row className="gy-5 ">
                            {
                                movies.length !== 0 ? (
                                    movies.map((item, index) => {
                                        return (
                                            <Col
                                                key={index} xs="12" sm="6" md="6" lg="4" xl="3">
                                                <SingleComponent
                                                    key={index}
                                                    item={item}
                                                    // baseURL="moves"
                                                    index={index}
                                                />
                                            </Col>
                                        )
                                    })
                                ) : (<h1 className=" d-flex justify-content-center align-item-center">Loading. . .</h1>)
                            }
                            <CustomPagination
                                currentPage={+currentPage}
                                count={totalPage}
                                baseURL="movies"
                                setCurrentPage={setCurrentPage}
                            />
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Movies;