export const useImg = () => {
    const logoUrl = computed(() => {
        return `/layout/images/logo.png`;
    });

    return {
        logoUrl,
    };
};