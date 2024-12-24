<template>
  <form @submit.prevent="submitForm">
    <input
      type="text"
      v-model="name"
      placeholder="Ваше имя"
      required
    />
    <input
      type="email"
      v-model="email"
      placeholder="Ваш email"
      required
    />
    <textarea
      v-model="message"
      placeholder="Ваше сообщение"
      required
    ></textarea>
    <button type="submit" :disabled="isLoading">
      {{ isLoading ? "Отправка..." : "Отправить" }}
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: localStorage.getItem("name") || "", // LocalStorageからデータを取得
      email: localStorage.getItem("email") || "",
      message: localStorage.getItem("message") || "",
      isLoading: false, // ローディング状態
    };
  },
  methods: {
    saveToLocalStorage() {
      // 入力データをLocalStorageに保存
      localStorage.setItem("name", this.name);
      localStorage.setItem("email", this.email);
      localStorage.setItem("message", this.message);
    },
    async submitForm() {
      this.isLoading = true; // 送信中状態に設定
      try {
        const response = await fetch("/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });

        if (response.ok) {
          alert("Форма успешно отправлена!");
          this.name = "";
          this.email = "";
          this.message = "";
          localStorage.clear(); // 成功時にLocalStorageをクリア
        } else {
          alert("Ошибка при отправке формы.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Ошибка: не удалось отправить форму.");
      } finally {
        this.isLoading = false; // 状態をリセット
      }
    },
  },
  watch: {
    // フォームのデータが変更されたらLocalStorageに保存
    name: "saveToLocalStorage",
    email: "saveToLocalStorage",
    message: "saveToLocalStorage",
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

form input,
form textarea {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #993d3d;
  border-radius: 5px;
  font-size: 1rem;
}

form button {
  max-width: 400px;
  cursor: pointer;
}

form button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
