import React, {FC, ReactElement} from 'react';
import Head from "next/head";

type LayoutProps = {
    children: ReactElement,
    title: string,
    tags: string,
    description: string,
    imageUrl: string,
    url: string
}

const Layout: FC<any> = ({children, title, tags, description, imageUrl, url}: LayoutProps) => {
    return (
        <div>
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
            <header>
                <h1>Your Header section</h1>
            </header>
            <main>{children}</main>
            <footer><h2>
                Footer Section
            </h2></footer>
        </div>
    )
};

export default Layout;
