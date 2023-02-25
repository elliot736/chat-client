<script setup>
import Choose from "../components/Choose.vue";
import ChatBox from "../components/ChatBox.vue";
</script>

<template>
  <div class="flex flex-col mx-[10%]">
    <div class="flex mt-[5rem] lg:mt-[10rem]">
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
        <p class="text-center mt-[5rem]">
          Here are some example prompts to try
        </p>
        <ul class="text-center">
          <li>when I connect to wifi, it says password is wrong</li>
          <li>I cannot login to my computer</li>
          <li>My screen is black</li>
          <li>My screen says there's no signal</li>
        </ul>
      </div>
    </div>
    <div class="lg:my-[5rem] lg:mx-[40%] felx felx-col">
      <Choose />
      <ChatBox />
    </div>
  </div>
</template>
