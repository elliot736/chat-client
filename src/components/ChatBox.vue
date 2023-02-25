<template>
  <div
    class="flex flex-col bg-white lg:w-[22rem] lg:h-[25rem] rounded shadow-xl shadow-gray-500 border-4 border-black"
  >
    <div class="box" ref="messageContainer">
      <div class="ml-[1rem] my-[2rem]">
        <div class="bot-msg">
          <p class="text-sm">Hello, How can I help you today?</p>
        </div>
        <!-- <div class="hum-msg" v-for="i in items" :key="items.id">
          <p class="text-sm">{{ i.msg }}</p>
        </div>
        <div class="bot-msg" v-for="i in bot_items" :key="items.id">
          <p class="text-sm">{{ i.msg }}</p>
        </div> -->
        <div v-for="i in items" :key="i.id">
          <div class="bot-msg" v-if="i.isBot">
            <p class="text-sm display-n">{{ i.msg }}</p>
          </div>
          <div class="hum-msg" v-else>
            <p class="text-sm display-n">{{ i.msg }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bar flex mt-auto">
      <input
        type="text"
        v-model="text"
        class="pl-[1rem] w-full bg-gray-100 rounded-l focus:outline-none focus:ring-0 focus:border-transparent"
        placeholder="Type your message"
        @keyup.enter="addMsg"
      />
      <button class="bg-black text-white p-2" @click="addMsg">Send</button>
    </div>
  </div>
</template>
<script>
import store from "@/store";

export default {
  name: "ChatBox",
  data() {
    return {
      text: "",
      items: [],
      model: true,
    };
  },
  methods: {
    async addBotMsg() {
      this.items.push({
        id: this.text + 768,
        msg: await store.getters.getModel(this.text),
        isBot: true,
      });
      this.$nextTick(() => {
        this.$refs.messageContainer.scrollTop =
          this.$refs.messageContainer.scrollHeight;
      });
    },
    addMsg() {
      this.items.push({
        id: this.text + 768,
        msg: this.text,
        isBot: false,
      });
      this.$nextTick(() => {
        this.$refs.messageContainer.scrollTop =
          this.$refs.messageContainer.scrollHeight;
      });
      this.addBotMsg();
    },
  },
  setup() {},
};
</script>

<style>
/* media queries for mobile */

@media (max-width: 640px) {
  .bot-msg {
    width: 10rem;
  }
  .hum-msg {
    width: 10rem;
    /* margin-left: 6rem; */
  }
}
.box {
  overflow-x: hidden;
  overflow-y: scroll;
  min-height: 20rem;
  min-width: 16rem;
}
.bot-msg {
  max-width: 15rem;
  border-radius: 0.25rem;
  padding: 0.75rem;
  background-color: #c7c7c7;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  margin-top: 0.5rem;
  overflow-wrap: break-word;
}

.hum-msg {
  border-radius: 0.25rem;
  padding: 0.75rem;
  background-color: #e9e9e9;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  max-width: 15rem;
  margin-top: 0.5rem;
  margin-left: 4rem;

  overflow-wrap: break-word;
}
.display-n {
  white-space: pre-line;
}
</style>
