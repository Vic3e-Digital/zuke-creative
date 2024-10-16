import PropTypes from "prop-types";
import lightGallery from "lightgallery";
import { Link } from "react-router-dom";

import React, { Component, useEffect } from "react";
import { render } from "react-dom";
// import './style.css';
import LightGallery from "lightgallery/react";
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgVideo from 'lightgallery/plugins/video';
// import fjGallery from 'flickr-justified-gallery';

const PortfolioItem = ({ portfolio }) => {
    return (
        <div className="single-portfolio">
            <LightGallery
                group="any"
                src={process.env.PUBLIC_URL + portfolio.homeImage}
            >
                <div className="thumbnail">
                    <div className="overlay">
                        <img
                            src={process.env.PUBLIC_URL + portfolio.homeImage}
                            alt="portfolio"
                        />
                    </div>
                </div>
            </LightGallery>
            <div className="content">
                <h3 className="title">
                    <Link
                        to={
                            process.env.PUBLIC_URL +
                            `/portfolio-details/${portfolio.id}`
                        }
                    >
                        {portfolio.title}
                    </Link>
                </h3>
                <p className="desc">{portfolio.excerpt}</p>
            </div>
        </div>
    );
};

PortfolioItem.propTypes = {
    portfolio: PropTypes.object,
};

export default PortfolioItem;
