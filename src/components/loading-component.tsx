import Image from 'next/image';
import { formatDate } from '../utils/common-util';

const LoadingImage = () => {
    /*
        // GAE上で謎のエラーが発生するのでnext/imageの利用を断念
        <Image 
            src="/img/loading.gif"
            width={88}
            height={88}
            quality={100}
            alt="loading"
        />
    */
    return (
        <img src="/img/loading.gif" className='inline-block' width={88} height={88} />
    );
};

export const Loading = () => {
    return (
        <div className="w-full text-center">
            {LoadingImage()}
        </div>
    );
};

export const LoadingWithKey = () => {
    const yyyyMMddHHmmssSSS = formatDate(new Date() , 'yyyyMMddHHmmssSSS');
    return (
        <div className="w-full text-center" key={yyyyMMddHHmmssSSS}>
            {LoadingImage()}
        </div>
    );
};