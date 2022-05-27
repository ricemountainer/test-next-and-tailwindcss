import TestAPI , {TestAPIType} from '../pages/api/test';
import ApiComponent from "./api-component";

export const Test1 = (text:string) => {
    return ApiComponent(`/api/test?text=${text}` , TestContent);
};
export const Test2 = (text:string) => {
    return ApiComponent(`/api/test?text=${text}` , TestContent);
};

export const Test1and2 = () => {
    const test1 = Test1('test1');
    const test2 = Test2('test2');

    return (
        <>
            {test1}
            <p>&nbsp;</p>
            {test2}
        </>
    );

};

const TestContent:React.FC<TestAPIType> = (props) => {
    const { data } = props;
    //console.log(`text=${data}`);
    return (
        <>
            <p>call /api/test?text={data.text}</p>
        </>
    );
};