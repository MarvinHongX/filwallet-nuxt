<script setup>
const { logoUrl } = useImg();

</script>

<template>
    <div class="layout-topbar-container">
        <div class="layout-topbar">
            <NuxtLink to="/" class="layout-topbar-logo">
                <NuxtImg format="webp" :src="logoUrl" alt="logo" class="layout-topbar-logo-img" />
                <span class="layout-topbar-logo-name">
                    Fil Wallet
                </span>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
</style>