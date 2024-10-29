<script setup>
import AppTopbar from './AppTopbar.vue';

</script>

<template>
    <div class="layout-wrapper">
        <app-topbar></app-topbar>
        <div class="layout-main-container">
            <div class="layout-main">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>