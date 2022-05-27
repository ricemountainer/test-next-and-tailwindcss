import type { NextApiRequest , NextApiResponse } from 'next';

type SleepType = {
    sleep: number
};

export type SleepAPIType = {
    data: SleepType
};

const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );

const SleepAPI = async function api(req:NextApiRequest , res:NextApiResponse) {
    try {
        const s = req.query ? Number(req.query.s)||0 : 0;
        await sleep(s * 1000);

        res.status(200).json({sleep: sleep});
    } catch(err) {
        res.status(503).json(err);        
    }
}

export default SleepAPI;
