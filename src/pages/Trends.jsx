import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { APIKEY } from '../context/context';
import CustomPagination from "../components/Pagintaion/CustomPagination";
import { Col, Container, Row } from "react-bootstrap";
import SingleComponent from "../components/SingleComponent/SingleComponent";
import { useParams } from "react-router";

function Trends() {
    const api_key = useContext(APIKEY)
    const {page} = useParams()
    const [trends, setTrends] = useState([])
    const [currentPage, setCurrentPage] = useState(page)
    const [totalPage, setTotalPage] = useState(0)


    useEffect(() => {
        getTrends()
    }, [currentPage])

    async function getTrends() {
        await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${currentPage}`)
            .then(res => {
                setTotalPage(res.data.total_pages)
                setTrends(res.data.results)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="trend main">
            <Container >
                <Row className="gy-5 ">
                    {
                        trends.length !== 0 ? (
                            trends.map((item, index) => {
                                return (
                                    <Col
                                    key={index} xs="12" sm="6" md="4" lg="3" xl="2">
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
                <CustomPagination
                    currentPage={+currentPage}
                    count={totalPage}
                    baseURL="trends"
                    setCurrentPage={setCurrentPage}
                />

            </Container>
        </div>
    )
}

export default Trends;