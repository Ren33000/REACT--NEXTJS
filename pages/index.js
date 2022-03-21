import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

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
    return <MeetupList meetups={props.meetups} />
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
    MongoClient.connect();
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    };
}

export default HomePage;

