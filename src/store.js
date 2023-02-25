import { reactive } from "vue";
import axios from "axios";

const store = {
  state: reactive({
    model: "bert",
    lang: null,
  }),
  getters: {
    async getModel(query) {
      try {
        const response = await axios.post(
          `https://chatbot12.herokuapp.com/sendMsg?msg=${query}`
        );
        // if (store.state.lang=="de") {
        // }
        console.log(await response.data);
        return await response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  setters: {
    setModel(model) {
      store.state.model = model;
    },
    setLang(lang) {
      store.state.lang = lang;
    },
  },
};

export default store;
