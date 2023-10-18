import React, { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert(
      `Name: ${formData.name}, Description: ${formData.description}, Category: ${formData.category}, Quantity: ${formData.quantity}, Price: ${formData.price}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="addProduct">
      <h3>Add Product Form</h3>
      <div className="input-group">
        <label className="addProduct__text" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="addProduct__input"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="addProduct__text" htmlFor="description">
          Description:
        </label>
        <input
          type="text"
          id="description"
          className="addProduct__input"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="addProduct__text" htmlFor="category">
          Category:
        </label>
        <input
          type="text"
          id="category"
          className="addProduct__input"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="addProduct__text" htmlFor="quantity">
          Quantity:
        </label>
        <input
          type="text"
          id="quantity"
          className="addProduct__input"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="addProduct__text" htmlFor="price">
          Price:
        </label>
        <input
          type="text"
          id="price"
          className="addProduct__input"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <button className="addProduct__button" type="submit">
        Submit
      </button>
    </form>
  );
}
