export default defineEventHandler(async (event) => {    
    const config  = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const apiPassword = config.public.apiPassword;
    
    const requestUrl = `${apiUrl}/sync`;
    const requsetBody = { password: apiPassword};
    const response = await apiRequest(requestUrl, requsetBody);
    
    return response;
})