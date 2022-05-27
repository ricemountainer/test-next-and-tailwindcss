import useSWR from 'swr';
import { Loading } from './loading-component';

const fetcher = async (uri) => {
    const response = await fetch(uri);
    return response.json();
};

export default function ApiComponent(uri: string, RF: React.FC<any>) {
    const { data, error } = useSWR(uri, fetcher);
    if (error) {
        //console.error(`error happened! ${error.message}`);
        return (
        <div>sorry unexpected error had happened... please try again later. </div>
        )
    }
    //if (!data) return Loading();
    if (data === undefined) return Loading();
    //if (data === undefined) return <div>Loading...</div>;
    return <RF data = { data } />;
}