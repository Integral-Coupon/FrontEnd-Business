<script setup lang="ts">

</script>

<template>
  <body>
  <div class="container">
    <h1>Sign Up</h1>
    <form action="signup-handler.php" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>

      <a href="dealPage.html" class="cta-button">Sign Up!</a>

    </form>
  </div>

  </body>

</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
.container {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 8px;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
input[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #0056b3;
}
.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}
.cta-button:hover {
  background-color: #0056b3;
}
</style>