<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <button @click="toggleComponents">
      {{ show ? "Скрыть меню и форму" : "Показать меню и форму" }}
    </button>
    <div v-if="show">
      <Menu />
      <ContactForm />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Menu from "./components/Menu.vue";
import ContactForm from "./components/ContactForm.vue";

export default {
  components: {
    Menu,
    ContactForm,
  },
  computed: {
    ...mapState(["show", "message"]),
  },
  methods: {
    ...mapMutations(["toggleShow"]),
    toggleComponents() {
      this.toggleShow();
    },
  },
};
</script>

  





  
  <style scoped>
/* 全体のレイアウト */
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f8ff; /* 淡い青の背景 */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 見出しのスタイル（MenuやContactForm内のものに適用） */
h1, h2 {
  font-family: Arial, sans-serif;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

/* ボタンのスタイル */
button {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
  background-color: #003d82;
}

/* フォームのスタイル（ContactForm 用） */
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
}

form input,
form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

form input:focus,
form textarea:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* メニューのスタイル（Menu 用） */
nav {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  color: #007bff;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #0056b3;
}
</style>

  