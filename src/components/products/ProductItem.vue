<template>
  <li class="product">
    <div class="card">
      <img :src="image" :alt="title" />
      <h1>{{ title }}</h1>
      <base-badge mode="highlight" :no-margin-left="true">
        <p class="price">${{ price }}</p>
      </base-badge>
      <p>{{ description }}</p>
      <p><button @click="addToCart">Add to Cart</button></p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'price', 'description'],
  methods: {
    addToCart() {
      this.$store.dispatch('carts/addToCart', {
        id: this.id,
      });
    },
  },
};
</script>

<style scoped>
li {
  padding: 1rem;
}

.card img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 15rem;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  font-size: 12px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #45006d;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>