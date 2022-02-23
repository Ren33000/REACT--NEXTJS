// our-domain.com/news

import { Fragment } from "react/cjs/react.production.min";
import Link from "next/link";

// Can be directly in the pages root (pages/news.js) or nested like here

function NewsPage(){
    return (
    <Fragment>
        <h1>The News</h1>
        <ul>
            <li><Link href="/news/nextjs-is-a-great-framework">NextJS is a Great Framework</Link></li>
            <li>Something else</li>
        </ul>
    </Fragment>
    );
}

export default NewsPage;