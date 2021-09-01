import React, {FC, ReactElement} from 'react';
import Head from "next/head";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./includes/Header";
import Copyright from "./includes/Copyright";
import Box from "@material-ui/core/Box";

type LayoutProps = {
    children: ReactElement,
    title: string,
    tags: string,
    description: string,
    imageUrl: string,
    url: string
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        backgroundColor: 'rgb(247, 249, 252) none repeat scroll 0% 0%',
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    }
}));

const Layout: FC<any> = ({children, title, tags, description, imageUrl, url}: LayoutProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Head>
                <title>{title || 'boilerplate'}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="author" content="codermahadi"/>
                <meta name="description"
                      content={description || "No Description found!"}/>
                <meta name="keywords"
                      content={tags || "react, nextJs, redux, sass, typescript"}/>
                <meta name='subtitle' content='sub title here'/>

                <meta name='fb:page_id' content='fb id'/>
                <meta name='og:title'
                      content={title || 'boilerplate'}/>
                <meta name='og:type' content='admin'/>
                <meta name='og:url'
                      content={url || 'https://example.com'}/>
                <meta property="og:image"
                      content={imageUrl || "https://live-technologies-vod.akamaized.net/cinematic/assets/preview/6a28c1ad39e8b0967f96689526520210114104321932_landscape.jpg"}/>
                <meta name='og:site_name' content='boilerplate'/>
                <meta name='og:description'
                      content={description || 'NO DESCRIPTION'}/>

                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <CssBaseline/>
            <Header/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                    {children}
                <Box pt={4}>
                    <Copyright/>
                </Box>
            </main>
        </div>
    )
};

export default Layout;
