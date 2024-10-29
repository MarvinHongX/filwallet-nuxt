export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const address = body.address;

    const config  = useRuntimeConfig();
    const apiUrl = config.public.addressApiUrl;
    
    const rpcUrl = `${apiUrl}/rpc/v0`;
    const rpcMethod = "Filecoin.WalletBalance";
    const rpcParams = [address];
    const response = await rpcRequest(rpcUrl, rpcMethod, rpcParams);
    
    return {
        address,
        balance: response
    }
})