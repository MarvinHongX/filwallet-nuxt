export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const password = body.password;
    const toAddress = body.toAddress;
    const amount = body.amount;

    const config  = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    
    const requestUrl = `${apiUrl}/send`;
    const requsetBody = { 
        password: password,
        toAddress: toAddress,
        amount: amount
    };
    const response = await apiRequest(requestUrl, requsetBody);
    
    return response;
})