<script setup>
import { ref, onMounted } from 'vue';
import { getAddress, getBalance, checkSync } from '@/commons/commonService';

const loading1 = ref(false);
const loading2 = ref(false);
const address = ref("");
const balance = ref(null);
const chainSync = ref(true);
const copied = ref(false);
const showSendForm = ref(false); 

onMounted(async () => {
    checkSync(chainSync);
    await getAddress(loading1, address);
    await getBalance(loading2, address, balance);
});

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(address.value);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};
const toggleSendForm = () => {
    showSendForm.value = !showSendForm.value;
};
</script>

<template>
    <div class="info">
        <div class="chain-sync">
            <span>Chain Sync</span>
            <div :class="['light-indicator', chainSync ? 'green-light' : 'red-light']"></div>
        </div>


        <!-- Display Balance -->
        <div class="balance">
            <span id="balance">{{ balance }}</span>
            <span id="unit">&nbsp;FIL</span>
        </div> <!-- Default balance -->

        <!-- Address Input with Copy Icon -->
        <div class="address-container">
            <p id="toAddress" class="to-address">{{ formatAddress(address) }}</p>
            <template v-if="!copied">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="copy-button"
                    @click="copyToClipboard"
                >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
            </template>
            <template v-else>
                <span  class="text-900 line-height-3">&nbsp;&nbsp;Copied!</span>
            </template>
        </div>

        <!-- Action Buttons -->
        <div class="button-container">
            <button id="sendBtn" class="circle-button" @click="toggleSendForm">Send</button>
            <button id="receiveBtn" class="circle-button" disabled>Receive</button>
        </div>
    </div>

    <!-- Modal for SendForm -->
    <div v-if="showSendForm" class="modal-overlay">
        <SendForm @close="toggleSendForm" />
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
}

.balance {
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.balance #balance {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: end;
    height: 100%;
    font-size: 50px;
    font-weight: 550;
}

.balance #unit {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    height: 100%;
    font-size: 35px;
    font-weight: 500;
}

.address-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    /* font-size: 14px; */
    margin-top: 10px;
    color: #6a737d;
}

.to-address {
    width: 240px;
    margin: 0px;
}

.copy-button {
    cursor: pointer;
    border: none;
    background-color: transparent;
}

.button-container {
    padding: 5px;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.circle-button {
    padding: 15px;
    background-color: #455bdd;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.circle-button:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
}

.circle-button:hover {
    background-color: #0056b3;
}

.chain-sync {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 10px;
    gap: 10px;
}

.light-indicator {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: grey;
}

.green-light {
    background-color: #28a745; /* Green light for true */
}

.red-light {
    background-color: #dc3545; /* Red light for false */
}

</style>