import React from 'react';

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel m slide carousel-fade padd" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                {/* Add your carousel items here */}
                <div className="carousel-item active justify-content-center p-3">
                    <img src="https://images.saymedia-content.com/.image/t_share/MjA3MDQ1MTQzMTE3NzAyNjI3/four-major-shapes-for-home-architecture.jpg" className="cimage d-block" alt="..."/>
                    <div className="carousel-caption d-block">
                        <p>Find Your Perfect Rental Home</p>
                    </div>
                </div>
                {/* Add more items similarly */}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;
