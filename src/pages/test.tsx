//import App from '../components/App'
import type { NextApiRequest, NextApiResponse , GetStaticProps, GetStaticPaths, GetServerSideProps , NextPage } from 'next';
//import requestTest from '../modules/AxiosTest';
import ApiComponent from '../components/api-component';
import type { TestAPIType } from './api/test';
//export default (req: NextApiRequest, res: NextApiResponse) => {
//    res.status(200).json({ name: 'just test' })
//}
const Test: NextPage = () => {
    return ApiComponent('/api/test' , TestContent);
}

const TestContent: React.FC<TestAPIType>   = (props) => {
    const { data } = props;
    return (
        <>
            <div  className='text-center text-lg'>
                <p>this is test</p>
                <p>text = {data.text}</p>
                <p>テストだよーん</p>
            </div>
        </>
    );
};

/*
export const getServerSideProps: GetServerSideProps = async (context) => {
    //console.log(`query=${context.query.param}`);
    //const axiosResult = await requestTest('https://www.google.co.jp/');
    const data = {
        text: new Date().toISOString(),
        //body: axiosResult,
        body: 'test',
    };
    return {
        props: {
            data: data
        }
    };
}
*/
export default Test;
/*
export const getServerSideProps: GetServerSideProps = async (context) => {

    const firestore = require('../modules/Firestore.js');
    const testData = await firestore.getTest();

    const data = {
        text: 'this is test text for Static Site Generator',
        //axiosResponse: JSON.stringify(axiosResponse),
        datetime: testData.datetime,
        id: testData.id,
        memo3: testData.memo3,
        testdatetime: testData.testdatetime,
    };


    return {
        props: {
            data
        },
    };
}
*/