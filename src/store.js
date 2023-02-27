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
        if (store.state.lang == "de") {
          var query_de = await axios.post(
            `https://chatbot12.herokuapp.com/translate2en?msg=${query}`
          );
          const response = await axios.post(
            `https://chatbot12.herokuapp.com/sendMsg?msg=${query_de.data}`
          );
          var response_de = await axios.post(
            `https://chatbot12.herokuapp.com/translate2de?msg=${response.data}`
          );
          return await response_de.data;
        } else {
          const response = await axios.post(
            `https://chatbot12.herokuapp.com/sendMsg?msg=${query}`
          );

          //console.log(await response.data);
          return await response.data;
        }
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
