import React, { useState } from "react";

const ProjectRequirment = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [measure, setMeasure] = useState("");

  // Function to add product to the list
  const addProduct = () => {
    if (productName && quantity && measure) {
      setProducts([...products, { name: productName, quantity, measure }]);
      setProductName("");
      setQuantity("");
      setMeasure("");
    }
  };

  // Function to delete product from the list
  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        Project Requirement
      </h2>

      <form className="space-y-4">
        {/* Start Date */}
        <div>
          <label className="block font-medium">Start Date:</label>
          <input
            type="date"
            required
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block font-medium">End Date:</label>
          <input
            type="date"
            required
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* Products Needed */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Products Needed:</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="border p-2 rounded-lg w-full"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border p-2 rounded-lg w-24"
            />
            <input
              type="text"
              placeholder="Measure"
              value={measure}
              onChange={(e) => setMeasure(e.target.value)}
              className="border p-2 rounded-lg w-20"
            />
            <button
              type="button"
              onClick={addProduct}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              +
            </button>
          </div>

          {/* Display added products */}
          {products.length > 0 && (
            <ul className="mt-3 bg-gray-100 p-3 rounded-lg">
              {products.map((product, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-2 px-3 bg-white rounded-lg shadow-sm mb-2"
                >
                  <span>{product.name}</span>
                  <span className="font-semibold">{product.quantity}</span>
                  <span>{product.measure}</span>
                  <button
                    onClick={() => deleteProduct(index)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Labours Needed */}
        <div>
          <label className="block font-medium">Labours Needed:</label>
          <input
            type="number"
            required
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectRequirment;
