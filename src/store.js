import { createStore } from "vuex";

export default createStore({
  state: {
    show: false,
    message: "Добро пожаловать в Vue.js!",
    formData: {
      name: "",
      email: "",
      message: "",
    },
    isLoading: false,
  },
  mutations: {
    toggleShow(state) {
      state.show = !state.show;
    },
    setFormData(state, { key, value }) {
      state.formData[key] = value;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    resetFormData(state) {
      state.formData = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
  actions: {
    async submitForm({ commit, state }) {
      commit("setLoading", true);
      try {
        const response = await fetch("/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state.formData),
        });
        if (response.ok) {
          alert("Форма успешно отправлена!");
          commit("resetFormData");
        } else {
          alert("Ошибка при отправке формы.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Ошибка: не удалось отправить форму.");
      } finally {
        commit("setLoading", false);
      }
    },
  },
});
