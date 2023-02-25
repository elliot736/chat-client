<script setup>
import Choose from "../components/Choose.vue";
import ChatBox from "../components/ChatBox.vue";
</script>

<template>
  <div class="flex flex-col">
    <div class="flex mt-[10rem] mx-[25%]">
      <div class="flex flex-col text-black font-mono">
        <p>
          Hello, I'm a chat app, I was trained to answer your questions about
          very specific topics. My architecture is based on Entity and Intent
          Classification. This means when you give me a question, I try to guess
          what Entity you are asking about. And what Intent you have behind your
          question. Then I look in my data base for the answer that best fits
          your question.
        </p>

        <p>My data was generated using the Davinci 003 Model</p>
        <p class="text-center mt-[5rem]">Do you like to Try?</p>
      </div>
    </div>
    <div class="my-[5rem] mx-[40%] felx felx-col">
      <Choose />
      <ChatBox />
    </div>
  </div>
</template>
