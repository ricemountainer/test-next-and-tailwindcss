import type { NextApiRequest , NextApiResponse } from 'next';

type InfinityTestType = [
    {
        page: number,
        name: string
    }
];

export type InfinityTestAPIType = {
    data: InfinityTestType
};

const API = async function api<InfinityTestType>(req:NextApiRequest , res:NextApiResponse) {
    try {
        const page = req.query ? Number(req.query.page) || 0 : 0;
        let list = [];
        if (page < 10) {
            for (let i=0; i < 10; i++) {
                list.push({page: page, name:`No.${page}-${i}`});
            }
        }

        res.status(200).json(list);
    } catch(err) {
        res.status(503).json(err);        
    }
}

export default API;
