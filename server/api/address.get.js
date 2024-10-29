export default defineEventHandler(async (event) => {
    const config  = useRuntimeConfig();
    const response = config.public.address;
    return response;
})