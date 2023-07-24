import React, { useState } from "react";
import {
  fetchProductById,
  updateProduct,
  deleteProductPicture,
  updateProductPictures,
} from "../../utils/firebase.util";
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  Image,
} from "pure-react-carousel";
import { ReactComponent as DeleteIcon } from "../../assets/delete_icon.svg";

const ProductUpdate = ({ fetchProductsData }) => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleFetchProduct = async () => {
    const fetchedProduct = await fetchProductById(productId);
    setProduct(fetchedProduct);
    setUpdatedProduct(fetchedProduct);
  };

  const handleDeletePicture = async (pictureIndex) => {
    const pictureURL = updatedProduct.imageURIs[pictureIndex];
    await deleteProductPicture(product.id, pictureURL);

    const updatedImageURIs = updatedProduct.imageURIs.filter(
      (_, index) => index !== pictureIndex
    );
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      imageURIs: updatedImageURIs,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpdatePictures = async (newPictures) => {
    const pictureURLs = await updateProductPictures(product.id, newPictures);

    const updatedImageURIs = [...updatedProduct.imageURIs, ...pictureURLs];
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      imageURIs: updatedImageURIs,
    }));

    // Clear the selectedFiles state after updating the product images if needed
    setSelectedFiles([]);

    alert("Picture updated successfully");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "categories" || "prodInfo") {
      updatedValue = value.split(",").map((category) => category.trim());
    }

    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: updatedValue,
    }));
  };

  const handleUpdate = async () => {
    await updateProduct(product.id, { ...updatedProduct, outOfStock: updatedProduct.outOfStock });
    fetchProductsData();
    setProduct(null);
    setProductId("");
    alert("Product updated successfully");
  };

  return (
    <div className="flex flex-col relative xs:mx-6 md:mx-16 lg:mx-24 my-10">
      <label className="text-lg font-semibold mb-2">Product ID:</label>
      <div className="flex mb-8">
        <input
          type="text"
          value={productId}
          onChange={handleProductIdChange}
          className="border border-gray-300 rounded-l-md px-3 py-2 flex-grow"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md"
          onClick={handleFetchProduct}
        >
          Fetch Product
        </button>
      </div>

      {product && (
        <div className="flex">
          <div className="flex flex-col w-2/5 ml-6">
            <div>
            <div className="w-5/6 pb-1 relative float-right">
              <CarouselProvider
                visibleSlides={1}
                totalSlides={updatedProduct.imageURIs.length}
                naturalSlideWidth={5}
                naturalSlideHeight={3}
                isIntrinsicHeight={true}
              >
                <Slider>
                  {updatedProduct.imageURIs.map((imageURI, index) => (
                    <Slide key={index} index={index}>
                      <img
                        src={imageURI}
                        alt={updatedProduct.title}
                        className="border border-black"
                      />
                    </Slide>
                  ))}
                </Slider>
                <div className="flex flex-col w-1/6 h-full absolute top-1/2 transform -translate-y-1/2 left-[-20%] overflow-y-scroll no-scrollbar">
                  {updatedProduct.imageURIs.map((imageURI, index) => (
                    <Dot
                      key={index}
                      className="w-full mb-1 xl:mb-2 border border-neutral-400 hover:border-2 rounded"
                      slide={index}
                    >
                      <Image src={imageURI} />
                    </Dot>
                  ))}
                </div>
              </CarouselProvider>
            </div>
            </div>

            <div className="pt-4">
              {/* Delete Pictures */}
              <div className="pb-2">
                <p className="text-lg font-semibold mb-2">Delete Pictures:</p>
                {updatedProduct.imageURIs.map((_, index) => (
                  <button
                    key={index}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mr-2 mb-2"
                    onClick={() => handleDeletePicture(index)}
                  >
                    <DeleteIcon /> Picture {index + 1}
                  </button>
                ))}
              </div>

              {/* Update Pictures */}
              <div>
                <input type="file" multiple onChange={handleFileChange} />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-2"
                  onClick={() => handleUpdatePictures(selectedFiles)}
                >
                  Update Pictures
                </button>
              </div>
            </div>
          </div>

          <div className="w-3/5 flex flex-col ml-8">
            <label className="text-lg font-semibold mb-2">Title:</label>
            <input
              type="text"
              name="title"
              value={updatedProduct.title}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />

            <label className="text-lg font-semibold mb-2">Price:</label>
            <input
              type="text"
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />

            <label className="text-lg font-semibold mb-2">Discounted Price:</label>
            <input
              type="text"
              name="discountedPrice"
              value={updatedProduct.discountedPrice}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />

            <label className="text-lg font-semibold mb-2">Categories (separated by comma):</label>
            <input
              type="text"
              name="categories"
              value={
                Array.isArray(updatedProduct.categories)
                  ? updatedProduct.categories.join(", ")
                  : updatedProduct.categories || ""
              }
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />

            <label className="text-lg font-semibold mb-2">Description:</label>
            <textarea
              name="desc"
              rows={5}
              value={updatedProduct.desc}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            ></textarea>

            <label className="text-lg font-semibold mb-2">Product Info (separated by comma):</label>
            <textarea
              name="prodInfo"
              rows={5}
              value={
                Array.isArray(updatedProduct.prodInfo)
                  ? updatedProduct.prodInfo.join(", ")
                  : updatedProduct.prodInfo || ""
              }
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            ></textarea>

            <div className="flex mb-4">
              <label className="block text-lg font-semibold">
                Out of Stock:
                <input
                  type="radio"
                  name="outOfStock"
                  checked={updatedProduct.outOfStock === true}
                  onChange={() => setUpdatedProduct({ ...updatedProduct, outOfStock: true })}
                  className="ml-4"
                />
                Yes
              </label>
              <label className="block text-lg font-semibold">
                <input
                  type="radio"
                  name="outOfStock"
                  checked={updatedProduct.outOfStock === false}
                  onChange={() => setUpdatedProduct({ ...updatedProduct, outOfStock: false })}
                  className="ml-4"
                />
                No
              </label>
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductUpdate;
