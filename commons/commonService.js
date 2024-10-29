export const getAddress = async (loading, address) => {
    try {
        const response = await $fetch(`/api/address`, {
            method: 'GET',
        });

        if (response.error) {
            throw new Error(response.error);
        }
        address.value = response;

        if (loading.value) loading.value = false;
    } catch (error) {
        throw new Error('Failed to fetch address: ' + error.message);
    }
};


export const getBalance = async (loading, address, balance) => {
    try {
        const response = await $fetch(`/api/balance`, {
            method: 'POST',
            body: { 
                address: address.value,
            }
        });
        if (response.error) {
            throw new Error(response.error);
        }
        const balanceInFil = response.balance.result / Math.pow(10, 18);
        balance.value = balanceInFil.toFixed(4);

        if (loading.value) loading.value = false;
    } catch (error) {
        throw new Error('Failed to fetch balance: ' + error.message);
    }
};



export const checkSync = async (chainSync) => {
    try {
        const response = await $fetch(`/api/sync`, {
            method: 'GET',
        });
        if (response.error) {
            throw new Error(response.error);
        }
        chainSync.value = response.ok;
    } catch (error) {
        console.error('Sync failed:', error.message);
        chainSync.value = false;
    }
};


export const sendTransaction = async (toAddress, amount, apiPassword) => {
    try {
        const response = await $fetch(`/api/send`, {
            method: 'POST',
            body: { 
                password: apiPassword,
                toAddress: toAddress,
                amount: amount
            }
        });
        
        if (response.error) {
            throw new Error(response.error);
        }
        return response.ok;
    } catch (error) {
        throw new Error('Transaction failed: ' + error.message);
    }
};
