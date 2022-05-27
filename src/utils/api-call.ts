const apiCall = async <T>(uri:string): Promise<T> => {
    //const site = process.env['SITE_URL'];
    const response = await fetch(uri);
    const result:T = await response.json(); 
    return result;
};

export default apiCall;