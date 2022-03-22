import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

import Head from 'next/head';
import { Fragment } from 'react/cjs/react.production.min';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: "A first Meetup",
        image: 'https://d26toa8f6ahusa.cloudfront.net/wp-content/uploads/2020/11/17092527/iStock-1280526363.jpg',
        address: 'Gaspe Road 5, 12345 Tokyo'
    },
        {
        id: 'm2',
        title: "A second Meetup",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Grand_Gathering_.jpg/800px-Grand_Gathering_.jpg',
        address: 'Meguro 5, 12345 Tokyo'
    }
];

function HomePage(props) {
    return (
    <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta name="description" content="A huge list of React Meeetups!"/>
        </Head>
        <MeetupList meetups={props.meetups} />
    </Fragment>
    )
    
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // fetch data from API

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect("mongodb+srv://Ren33000:s2!cUEzz4qk3p8r@cluster0.dpggy.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    };
}

export default HomePage;

