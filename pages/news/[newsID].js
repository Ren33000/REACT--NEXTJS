// our-domain.com/news/something-important/
// dynamic page with [] in the name

import { useRouter}  from 'next/router';

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    return <h1>The Details</h1>
}

export default DetailPage;