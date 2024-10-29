<script setup>
import { defineEmits } from 'vue';
import { sendTransaction } from '@/commons/commonService';

const emit = defineEmits(['close']);

const toAddress = ref('');
const amount = ref('');
const password = ref('');

const onClickSend = async () => {
    try {
        const isSuccess = await sendTransaction(toAddress.value, amount.value, password.value);
        
        if (isSuccess) {
            alert('Transaction successful!');
            
            emit('close');
        } else {
            alert('Transaction failed');
        }
    } catch (error) {
        alert(error.message);
    }
};
</script>

<template>
    <div class="modal-overlay">
        <form class="sendForm card" @submit.prevent="onClickSend">
            <div class="form-header">
                <h1>Send FIL</h1>
                <button id="closeFormBtn" class="close-button" @click="emit('close')">X</button>
            </div>
            
            <div class="form-body">            
                <div class="input-group">
                    <label for="toInput">Recipient</label>
                    <textarea 
                        id="toInput" 
                        v-model="toAddress"
                        class="textarea-field"
                        placeholder="address"
                        required
                        rows="4"
                    ></textarea>
                </div>
        
                <div class="input-group">
                    <label for="amountInput">Amount</label>
                    <input
                        type="number"
                        id="amountInput"
                        v-model="amount"
                        class="input-field"
                        placeholder="0 FIL"
                        required
                    />
                </div>
    
                <div class="input-group">
                    <label for="passwordInput">Password</label>
                    <input
                        type="password"
                        id="passwordInput"
                        v-model="password"
                        class="input-field"
                        placeholder="password"
                        required
                    />
                </div>
        
                <button type="submit" id="submitTransactionBtn" class="submit-button">Send</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.card {
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    min-width: 350px;
    max-width: 640px;
    width: 100%;
}

.form-body {
    display: flex;
    flex-direction: column;
    padding: 15px;
}

.form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--surface-900);
    font-size: 1.5rem;
    font-weight: 800;
}

.close-button {
    background: none;
    border: none;
    border-radius: 50%;
    padding: 2px;
    width: 30px;
    height: 30px;
    font-size: 1.5r em;
    cursor: pointer;
    color: #555;
    transition: color 0.3s;
}

.close-button:hover {
    background: #d3d3d3;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 5px;
}

.input-group label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
}

.textarea-field {
    font-family: Arial, sans-serif;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    font-size: 1em;
    height: 100px;
    transition: border-color 0.3s;
    box-sizing: border-box;
}

.input-field {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    font-size: 1em;
    height: 40px;
    transition: border-color 0.3s;
    box-sizing: border-box;
}

.input-field:focus {
    border-color: #455bdd;
    outline: none;
}

.submit-button {
    background-color:  #455bdd;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 10px;
}

.submit-button:hover {
    background-color: #0056b3;
}
</style>