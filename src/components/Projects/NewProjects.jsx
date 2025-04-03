import React, { useState } from "react";

const NewProjects = () => {
  const [showForm, setShowForm] = useState(false);
  const [startedProjects, setStartedProjects] = useState([]);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [measure, setMeasure] = useState("");

  const addProduct = () => {
    if (productName && quantity && measure) {
      setProducts([...products, { name: productName, quantity, measure }]);
      setProductName("");
      setQuantity("");
      setMeasure("");
    }
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleSubmit = (event, projectId) => {
    event.preventDefault();
    setStartedProjects([...startedProjects, projectId]);
    setShowForm(false);
    alert("Request sent successfully!");
  };

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Project Type</th>
              <th className="border border-gray-300 px-4 py-2">
                Type of Construction
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Number of Floors
              </th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {["1", "2", "3"].map((id) => (
              <tr key={id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  Construction
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  New home building
                </td>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">Kannur</td>
                <td className="border border-gray-300 px-4 py-2">
                  {startedProjects.includes(id) ? (
                    <span className="text-green-600 font-bold">
                      Project Started ✅
                    </span>
                  ) : (
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                      onClick={() => setShowForm(id)}
                    >
                      Take Project
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mt-20 ml-40">
            <h2 className="text-2xl font-bold text-center mb-4">
              Project Requirement
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => handleSubmit(e, showForm)}
            >
              <div>
                <label className="block font-medium">Start Date:</label>
                <input
                  type="date"
                  required
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block font-medium">End Date:</label>
                <input
                  type="date"
                  required
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
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
                {products.length > 0 && (
                  <ul className="mt-3 bg-gray-100 p-3 rounded-lg">
                    {products.map((product, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center py-2 px-3 bg-white rounded-lg shadow-sm mb-2"
                      >
                        <span>{product.name}</span>
                        <span className="font-semibold">
                          {product.quantity}
                        </span>
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
              <div>
                <label className="block font-medium">Labours Needed:</label>
                <input
                  type="number"
                  required
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProjects;
