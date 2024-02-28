<script setup lang="ts">

</script>

<template>
  <body>
  <header>
    <h1>Bee to Bee</h1>
    <nav>
      <a href="/prototype_v0/index.html">Home</a>
      <a href="dealEstablishment.html">Make a Deal</a>
    </nav>
  </header>

  <div class="container">
    <h1>Deals in Your Area</h1>

    <div class="deal">
      <h2>Restaurant Deals</h2>
      <p>Get great discounts at local restaurants!</p>
      <ul>
        <li>50% off at Pizza Palace</li>
        <li>Free dessert at Pasta House</li>
      </ul>
    </div>

    <div class="deal">
      <h2>Clothing Store Deals</h2>
      <p>Save big on your next shopping spree!</p>
      <ul>
        <li>Buy one, get one free at Fashionista Boutique</li>
        <li>20% off all items at Trendy Threads</li>
      </ul>
    </div>

    <div class="deal">
      <h2>Electronics Deals</h2>
      <p>Upgrade your gadgets for less!</p>
      <ul>
        <li>Save $100 on the latest smartphone at Tech Hub</li>
        <li>Special bundle deal at Gadget Emporium</li>
      </ul>
    </div>
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
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.deal {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}
.deal h2 {
  margin-top: 0;
}
.deal p {
  margin-bottom: 5px;
}
header {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  text-align: center;
}
nav {
  text-align: center;
  margin-bottom: 20px;
}
nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}
nav a:hover {
  text-decoration: underline;
}
</style>