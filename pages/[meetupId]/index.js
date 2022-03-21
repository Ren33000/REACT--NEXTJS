import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from 'mongodb';

function MeetupDetails(props) {
    return (
        <MeetupDetail 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address= {props.meetupData.address}
            description= {props.meetupData.description}
        />
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb+srv://Ren33000:s2!cUEzz4qk3p8r@cluster0.dpggy.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: false ,
        paths: meetups.map(meetup => ({ params:{ meetupId: meetup._id.toString()}}))
        //  [
        //     { 
        //         params: {
        //             meetupId: 'm1',
        //         },
        //     },
        //     {
        //         params: {
        //             meetupId: 'm2',
        //         },
        //     },
        // ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect("mongodb+srv://Ren33000:s2!cUEzz4qk3p8r@cluster0.dpggy.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    }
}

export default MeetupDetails;