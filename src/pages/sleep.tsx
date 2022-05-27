//import App from '../components/App';
//import { Test1 , Test2 , Test1and2 } from '../components/test-component';
//import type { NextPage } from 'next';
import ApiComponent from '../components/api-component';
import { useState } from 'react';
import type { SleepAPIType } from './api/sleep';

const SleepContent:React.FC<SleepAPIType> = (props) => {
    const { data } = props;
    return (
        <>
            <div className='text-center w-full'>
                waited for {data.sleep} secondd
            </div>
        </>
    );
}

export default function Sleep() {
    const [inputS, setInputS] = useState<Number>(0);
    const inputSleepTime = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputS(Number(e.target.value));
    };
    const [actualS, setActualS] = useState<Number>(0);
    const goSleep = () => {
        setActualS(inputS);
    }
    return (
        <>
                <input type="number" placeholder='input number' min={0} max={60} onChange={inputSleepTime}/>
                <button onClick={goSleep}>go sleep</button>
                {ApiComponent(`/api/sleep?s=${actualS}` , SleepContent)}
        </>
    );
};
