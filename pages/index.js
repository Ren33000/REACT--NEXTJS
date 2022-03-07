import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

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

function HomePage() {
    const [loadedMeetup, setLoadedMeetup] = useState([]);
    useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetup(DUMMY_MEETUPS);
    }, []);
    return <MeetupList meetups={loadedMeetup} />
}

export default HomePage;