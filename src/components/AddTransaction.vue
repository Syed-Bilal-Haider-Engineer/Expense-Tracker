<template>
  {{ amount }}
  <form id="form" class="form-new" data-test="subscribe-form">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" data-test="subscribe-title" placeholder="Enter text..." v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="text"
        id="amount"
        placeholder="Enter amount..."
        v-model="amount"
        data-test="subscibre-input"
      />
    </div>
    <button class="btn" data-test="subscribe-btn" @click="intercept">Add transaction</button>
  </form>
</template>

<script setup>
import { useToast } from 'vue-toastification';
import { ref } from 'vue';

const text = ref('');
const amount = ref('');

// Get toast interface
const toast = useToast();

const emit = defineEmits(['transactionSubmitted']);

const onSubmit = () => {
  if (!text.value || !amount.value) {
    // Display a toast error message if either field is empty
    toast.error('Both fields must be filled.');
    return;
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  emit('transactionSubmitted', transactionData);

  // Clear form fields
  text.value = '';
  amount.value = '';
};

const intercept = () => {
  console.log("call intercept")
  fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => {
              console.log("res==>",res)
              console.log("res.json()==>",res.json())
              return res.json()
})
            .then(json=>console.log(json))
}
</script>
