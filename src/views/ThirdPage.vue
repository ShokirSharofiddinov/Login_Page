<template>
  <div class="container mt-5">
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct" style="margin-bottom: 20px">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="newProduct.name"
          required
        />
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input
          type="number"
          class="form-control"
          id="year"
          v-model="newProduct.year"
          required
        />
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="newProduct.price"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea
          class="form-control"
          id="description"
          v-model="newProduct.description"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add to Table</button>
    </form>

    <h2>Product List</h2>
    <table class="table" style="margin-bottom: 20px">
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.year }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newProduct: {
        name: "",
        year: "",
        price: "",
        description: "",
      },
      products: [],
    };
  },
  methods: {
    addProduct() {
      this.products.push({ ...this.newProduct });
      this.newProduct = {
        name: "",
        year: "",
        price: "",
        description: "",
      };
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

textarea.form-control {
  resize: vertical;
  height: 120px; /* Adjust the height as needed */
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: #f2f2f2;
  font-weight: bold;
}
</style>
