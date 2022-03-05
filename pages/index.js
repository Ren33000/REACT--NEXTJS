import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: "A first Meetup",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Tharlam_Monastery_gathering.jpg/800px-Tharlam_Monastery_gathering.jpg',
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
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;