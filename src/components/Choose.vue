<template>
  <!-- <div class="ml-[1rem] flex w-[20rem] mb-[2rem]">
    <RadioGroup v-model="model" class="flex flex-row justify-between w-full">
      <RadioGroupOption v-slot="{ checked }" value="bert">
        <span
          :class="[checked ? '   bg-opacity-75  ' : '']"
          class="bg-black text-white relative flex cursor-pointer rounded-lg px-5 py-2 shadow-md focus:outline-none"
          @click="store.state.model = 'bert'"
          >Bert</span
        >
      </RadioGroupOption>
      <RadioGroupOption v-slot="{ checked }" value="svm">
        <span
          :class="[checked ? '  bg-opacity-75   ' : '']"
          class="bg-black text-white relative flex cursor-pointer rounded-lg px-5 py-2 shadow-md focus:outline-none"
          @click="store.state.model = 'svm'"
          >SVM</span
        >
      </RadioGroupOption>
    </RadioGroup>
  </div> -->
  <div class="ml-[1rem] flex lg:w-[20rem] mb-[2rem]">
    <RadioGroup v-model="lang" class="flex flex-row justify-between w-full">
      <RadioGroupOption v-slot="{ checked }" value="en">
        <span
          :class="[checked ? '   bg-opacity-75   ' : '']"
          class="bg-black text-white relative flex cursor-pointer rounded-lg px-5 py-2 shadow-md focus:outline-none"
          @click="store.state.lang = 'en'"
          >English</span
        >
      </RadioGroupOption>
      <RadioGroupOption v-slot="{ checked }" value="de">
        <span
          :class="[checked ? '  bg-opacity-75 ' : '']"
          class="bg-black text-white relative flex cursor-pointer rounded-lg px-5 py-2 shadow-md focus:outline-none"
          @click="store.state.lang = 'de'"
          >Deutsch</span
        >
      </RadioGroupOption>
    </RadioGroup>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import store from "@/store";
const model = ref("bert");
const lang = ref("en");
</script>
