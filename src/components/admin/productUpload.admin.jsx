import React, { useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import {
  uploadFile,
  getFileDownloadURL,
  addProduct,
  fetchProducts,
} from "../../utils/firebase.util";
import ProductList from "./product-list.admin";

const ProductUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [imageURIs, setImageURIs] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [desc, setDesc] = useState("");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      console.log("Hit");
    };

    fetchProductsData();
  }, []);

  const onDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
  };

  const dropzoneRef = useRef(null);

  const openDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.click();
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  const handleUpload = async () => {
    try {
      const promises = uploadedFiles.map(async (file) => {
        await uploadFile(file);
        const downloadURL = await getFileDownloadURL(file.name);
        return downloadURL;
      });

      const urls = await Promise.all(promises);

      // Filter out duplicate image URIs
      const uniqueUrls = urls.filter((url) => !imageURIs.includes(url));

      // Add the unique image URIs to the state
      setImageURIs((prevImageURIs) => [...prevImageURIs, ...uniqueUrls]);

    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageURIs.length > 0 && title && price && desc && categories) {
      const product = {
        title,
        price,
        desc,
        imageURIs,
        categories: categories.split(",").map((category) => category.trim()),
        // Other product properties
      };

      // Call the function to update the database
      await addProduct(product);

      // Fetch the updated list of products
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);

      // Reset the form fields
      setTitle("");
      setPrice("");
      setDesc("");
      setImageURIs([]);
      setUploadedFiles([]);
      setCategories("");
    } else {
      console.log("Please fill in all the fields and upload an image");
    }
  };

  return (
    <div>
      <div className="flex py-12">
        <div className="w-1/2 pl-6 md:pl-16 lg:pl-24">
          <h1 className="text-2xl font-bold mb-4">Product Image</h1>
          <div
            {...getRootProps()}
            className={`flex justify-center items-center h-64 mb-4 border-2 border-dashed border-gray-300 ${
              isDragActive ? "bg-gray-100" : ""
            }`}
          >
            <input {...getInputProps({ ref: dropzoneRef })} />
            <p className="text-gray-500 text-center">
              {isDragActive
                ? "Drop the image here"
                : "Drag and drop an image here, or click browse"}
            </p>
          </div>
          {imageURIs.length > 0 && (
            <div className="flex justify-center">
              {imageURIs.map((uri, index) => (
                <img
                  key={index}
                  src={uri}
                  alt={`Uploaded ${index + 1}`}
                  className="w-24 h-24 mb-4 mr-2"
                />
              ))}
            </div>
          )}
          {uploadedFiles.length > 0 && (
            <div className="mb-4">
              <p>Selected files:</p>
              <ul>
                {uploadedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-4 mr-4"
            onClick={openDialog}
          >
            Browse
          </button>
          <button
            onClick={handleUpload}
            className={`${
              uploadedFiles.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white py-2 px-4 rounded-md`}
            disabled={!uploadedFiles}
          >
            Upload
          </button>
        </div>

        <div className="w-1/2 px-6 md:px-16 lg:px-24 mt-4 ">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="block mb-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />

            <label htmlFor="price" className="block mb-2">
              Price:
            </label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />

            <label htmlFor="categories" className="block mb-2">
              Categories (separated by comma):
            </label>
            <input
              type="text"
              id="categories"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />

            <label htmlFor="desc" className="block mb-2">
              Description:
            </label>
            <textarea
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />

            {/* <label htmlFor="desc" className="block mb-1">
              Product Info:
            </label>

            <label htmlFor="desc" className="block mb-1 italic">
              Constituents:
            </label>
            <textarea
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 mb-1 w-full"
            />

            <label htmlFor="desc" className="block mb-2 italic">
              Specifications:
            </label>
            <textarea
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 mb-4 w-full"
            /> */}

            <button
              type="submit"
              className={`${
                !imageURIs || !title || !price || !desc || !categories
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white py-2 px-4 rounded-md`}
              disabled={!imageURIs || !title || !price || !desc || !categories}
              title={
                !imageURIs || !title || !price || !desc || !categories
                  ? "Please fill in all the fields and upload an image"
                  : ""
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductUpload;
