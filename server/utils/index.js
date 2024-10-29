export const rpcRequest = async (url, method, params) => {
    const body = {
        jsonrpc: "2.0",
        id: "1",
        method: method,
        params: params
    };

    return await $fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


export const apiRequest = async (url, body) => {
    return await $fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
};