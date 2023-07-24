import React, { useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import {
  uploadFile,
  getFileDownloadURL,
  addProduct,
  updateProduct,
  fetchProducts,
} from "../../utils/firebase.util";
import ProductList from "./product-list.admin";
import ProductUpdate from "./productUpdate.admin";

const ProductUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [imageURIs, setImageURIs] = useState([]);

  const [docID, setDocID] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [outOfStock, setOutOfStock] = useState(false);
  const [desc, setDesc] = useState("");
  const [prodInfo, setProdInfo] = useState([]);

  const [products, setProducts] = useState([]);

  const fetchProductsData = async () => {
    const fetchedProducts = await fetchProducts();
    setProducts(fetchedProducts);
    console.log("Hit");
  };

  useEffect(() => {
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
    // Call the function to add the product to the database
    const docID = await addProduct();

    // Update the state with the docID
    setDocID(docID);

    try {
      const promises = uploadedFiles.map(async (file) => {
        await uploadFile(docID, file);
        const downloadURL = await getFileDownloadURL(docID, file.name);
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

    if (imageURIs.length > 0 && title && price && categories) {
      const product = {
        title,
        price,
        discountedPrice,
        desc,
        outOfStock,
        imageURIs,
        categories: categories.split(",").map((category) => category.trim()),
        prodInfo: prodInfo.split(",").map((prodInfo) => prodInfo.trim()),
      };

      // Call the function to update the database
      await updateProduct(docID, product);

      // Fetch the updated list of products
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);

      // Reset the form fields
      setTitle("");
      setPrice("");
      setDiscountedPrice("");
      setDesc("");
      setImageURIs([]);
      setUploadedFiles([]);
      setCategories([]);
      setProdInfo([]);
      setOutOfStock(false);
    } else {
      alert(
        "Make sure you uploaded all the images and filled all the necessary fields!"
      );
    }
  };

  return (
    <div>
      <div className="flex py-12">
        <div className="w-2/5 pl-6 md:pl-16 lg:pl-24">
          <h1 className="text-2xl font-bold mb-4">Product Image:</h1>
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

        <div className="w-3/5 px-6 md:px-16 lg:px-24 mt-3">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="block text-lg font-semibold mb-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />

            <label htmlFor="price" className="block text-lg font-semibold mb-2">
              Price:
            </label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />

            <label htmlFor="price" className="block text-lg font-semibold mb-2">
              Discounted Price:
            </label>
            <input
              type="text"
              id="discountedPrice"
              value={discountedPrice}
              onChange={(e) => setDiscountedPrice(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />

            <label
              htmlFor="categories"
              className="block text-lg font-semibold mb-2"
            >
              Categories (separated by comma):
            </label>
            <input
              type="text"
              id="categories"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />

            <label htmlFor="desc" className="block text-lg font-semibold mb-2">
              Description:
            </label>
            <textarea
              id="desc"
              rows={5}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />

            <label htmlFor="desc" className="block text-lg font-semibold mb-2">
              Product Info (separated by comma):
            </label>
            <textarea
              id="prodInfo"
              rows={5}
              value={prodInfo}
              onChange={(e) => setProdInfo(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />

            <div className="flex mb-4">
              <label className="block text-lg font-semibold">
                Out of Stock:
                <input
                  type="radio"
                  name="outOfStock"
                  checked={outOfStock}
                  onChange={() => setOutOfStock(true)}
                  className="ml-4 mr-2"
                />
                Yes
              </label>
              <label className="block text-lg font-semibold">
                <input
                  type="radio"
                  name="outOfStock"
                  checked={!outOfStock}
                  onChange={() => setOutOfStock(false)}
                  className="ml-4 mr-2"
                />
                No
              </label>
            </div>

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
      <div className="mx-4 xs:mx-6 md:mx-16 lg:mx-24 border-b border-black" />
      <ProductUpdate fetchProductsData={fetchProductsData}/>
      <div className="mx-4 xs:mx-6 md:mx-16 lg:mx-24 border-b border-black" />
      <ProductList products={products} />
    </div>
  );
};

export default ProductUpload;
