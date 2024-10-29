export const formatAddress = (address) => {
    return address.slice(0, 16) + '...' + address.slice(-16);
};

export const validateAmount = (amount, balance) => {
    return amount > 0 && amount <= balance;
};
