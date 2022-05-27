import type { NextApiRequest , NextApiResponse } from 'next';

type TestType = {
    text: string
};

export type TestAPIType = {
    data: TestType
};

const TestAPI = async function api<TestType>(req:NextApiRequest , res:NextApiResponse) {
    try {
        const text = req.query ? String(req.query.text)||'(null)' : '(null)';

        res.status(200).json({text: text});
    } catch(err) {
        res.status(503).json(err);        
    }
}

export default TestAPI;
