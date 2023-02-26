import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SingleComponent from '../SingleComponent/SingleComponent';


const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 2
    },
    768: {
        items: 3
    },
    992: {
        items: 4
    },
    1024: {
        items: 5,
        itemsFit: 'contain'
    },
    1200: {
        items: 6,
        itemsFit: 'contain'
    },
};


const Carusel = ({ contents, type }) => {
    let items = []
    if (type == "home") {
        items = contents.map((item, index) => {
            return <SingleComponent key={index} item={item} />
        })
    } else {
        items = contents.map((item, index) => {
            return (
                <div className='single_movie_item' key={index}>
                    <img src={
                        item.profile_path ?
                            `https://www.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`
                            : (
                                'https://www.movienewz.com/img/films/poster-holder.jpg'
                            )
                    } />
                    <p>
                        {item.character}
                    </p>
                    <span>
                        {item.original_name}
                    </span>

                </div>
            )
        })
    }


    return (
        <>
            {
                type === "home" ? (
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        autoPlay
                        autoPlayInterval={1500}
                        disableButtonsControls
                        infinite
                    />
                ) : (
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        autoPlay
                        autoPlayInterval={500}
                        disableButtonsControls
                        disableDotsControls
                        infinite
                    />
                )
            }
        </>
    );
}

export default Carusel