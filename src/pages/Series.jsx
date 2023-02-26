import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { APIKEY } from '../context/context';
import Pagination from '@mui/material/Pagination';
import CustomPagination from "../components/Pagintaion/CustomPagination";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "@mui/material";
import SingleComponent from "../components/SingleComponent/SingleComponent";
import { useParams } from "react-router";
import Filter from "../components/Filter/Filter";

function Series() {
    const api_key = useContext(APIKEY)
    const { page } = useParams()
    const [series, setSeries] = useState([])
    const [currentPage, setCurrentPage] = useState(page)
    const [selectedGenres, setSelectGenres] = useState([])
    const [totalPage, setTotalPage] = useState(0)


    useEffect(() => {
        getSeries()
    }, [currentPage, selectedGenres])

    async function getSeries() {
        await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${selectedGenres}`)
            .then(res => {
                console.log(res.data);
                setTotalPage(res.data.total_pages)
                setSeries(res.data.results)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="trend main">
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
                                series.length !== 0 ? (
                                    series.map((item, index) => {
                                        return (
                                            <Col
                                                key={index} xs="12" sm="6" md="6" lg="4" xl="3">
                                                <SingleComponent
                                                    key={index}
                                                    item={item}
                                                    index={index}
                                                />
                                            </Col>
                                        )
                                    })
                                ) : (<h1 className=" d-flex justify-content-center align-item-center">Loading. . .</h1>)
                            }
                        </Row>
                    </Col>
                </Row>
                            <CustomPagination
                                currentPage={+currentPage}
                                count={totalPage}
                                baseURL="discover/tv"
                                setCurrentPage={setCurrentPage}
                            />

            </Container>
        </div>
    )
}

export default Series;

