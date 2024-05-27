/* eslint-disable no-unused-vars */
const AddProducts = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };
    console.log(data);

    await fetch("http://localhost:3000/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      form.reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Add Products</h1>
      <div className="my-16">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-lime-500 focus:border-lime-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-lime-500 focus:border-lime-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-lime-500 focus:border-lime-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-lime-500 focus:border-lime-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image_url"
              placeholder="Image URL"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-lime-500 focus:border-lime-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ID
            </label>
            <input
              type="text"
              name="id"
              placeholder="ID"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-lime-500 focus:border-lime-500"
            />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="py-2 px-4 bg-lime-500 text-white font-semibold rounded-md shadow-md hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500  first-letter:"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
