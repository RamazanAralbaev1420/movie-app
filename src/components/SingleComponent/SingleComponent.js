
import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { unavailible } from "../../assets/assets";
import './SingleComponent.css'

function SingleComponent({ item }) {
    const rate = item.vote_average;

    return (

        <Link to={`/single-movie/${item.id}`} className="single_component">
            <div className="single_component-box">
                <div className="single_component-head">
                    <img src={
                        item.poster_path || item.profile_path ? (
                        `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path || item.profile_path}`) : ('https://www.movienewz.com/img/films/poster-holder.jpg')
                        } 
                        alt={item.title || item.name}>
                        </img>
                </div>
                <div className="single_component-body">
                    <span className={rate * 10 > 70 ? 'rate rate-trend' : rate * 10 < 45 ? 'rate rate-bad' : 'rate rate-medium'}>
                        {
                            Math.round(item.vote_average * 10) + '%'
                        }
                    </span>
                    <h3 className="titlef">
                        {
                            item.title || item.name
                        }
                    </h3>
                    <p className="date">
                        {
                            item.release_date || item.first_air_date
                        }
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default SingleComponent