import React from 'react';
import { Helmet } from "react-helmet-async";

const PageMeta = ({ title, description }) => (
    <Helmet>
        <title>{title} | Coffee Export</title>
        <meta name="description" content={description} />
    </Helmet>
);

export default PageMeta;
