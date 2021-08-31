import React from 'react';
import type {NextPage} from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <h1>Main Section</h1>
            <p>
                Add your react component here as Child component.
            </p>
            <ul>
                <li>Layout Templating</li>
                <li>Scss</li>
                <li>Typescript</li>
                <li>Redux</li>
                <li>Add Express Server</li>
                <li>Local and live Environment file added</li>
                <li>SEO tag, OG, Meta tag added</li>
                <li>Test example code (Enzyme, jest, ReactUI)</li>
            </ul>
        </Layout>
    );
};

export default Home;
