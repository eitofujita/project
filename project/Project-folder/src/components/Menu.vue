<template>
  <nav>
    <ul>
      <li><a href="#home">Главная</a></li>
      <li><a href="#about">О нас</a></li>
      <li><a href="#services">Услуги</a></li>
      <li><a href="#contact">Контакты</a></li>
    </ul>
  </nav>
</template>

<style>
nav ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    gap: 15px;
}

nav ul li a {
    text-decoration: none;
    font-size: 1.2rem;
    color: rgb(103, 34, 34);
    font-weight: bold;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #FFD700; /* ゴールドの色 */
}
</style>
