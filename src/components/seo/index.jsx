import PropTypes from "prop-types";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = ({ title }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="robots" content="noindex, follow" />
                <meta
                    name="description"
                    content="Alexis – Photography React JS Template"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Helmet>
        </HelmetProvider>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
};

export default SEO;
