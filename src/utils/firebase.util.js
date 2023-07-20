import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuwUUFDWVRYVDzWql0t5N-irH0QNyGxTw",
  authDomain: "blisskart-bb534.firebaseapp.com",
  projectId: "blisskart-bb534",
  storageBucket: "blisskart-bb534.appspot.com",
  messagingSenderId: "89175857586",
  appId: "1:89175857586:web:bc58d2920d520eccd7acab",
  measurementId: "G-SGEMQKHJFS",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage();

export const addProduct = async () => {
  try {
    const docRef = await addDoc(collection(db, "products"), {}); // Empty document
    console.log("Blank product document created with ID:", docRef.id);
    return docRef.id; // Return the document ID
  } catch (e) {
    console.error("Error creating blank product document:", e);
  }
};

export const uploadFile = async (docID, file) => {
  const storageRef = ref(storage, `images/${docID}/${file.name}`);
  await uploadBytes(storageRef, file);
};

export const getFileDownloadURL = async (docID, fileName) => {
  const storageRef = ref(storage, `images/${docID}/${fileName}`);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductById = async (productId) => {
  try {
    const docRef = doc(db, "products", productId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      console.log("Product does not exist");
      return null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export const deleteProductPicture = async (productId, pictureURL) => {
  try {
    // Delete the picture from Firebase Storage
    const storageRef = ref(storage, pictureURL);
    await deleteObject(storageRef);

    // Delete the picture URL from the Firestore document
    const docRef = doc(db, "products", productId);
    await updateDoc(docRef, {
      imageURIs: arrayRemove(pictureURL),
    });

    console.log("Product picture deleted successfully");
  } catch (error) {
    console.error("Error deleting product picture:", error);
  }
};


export const updateProductPictures = async (productId, pictures) => {
  try {
    const pictureURLs = [];

    // Upload new pictures to Firebase Storage
    for (let i = 0; i < pictures.length; i++) {
      const file = pictures[i];
      const storageRef = ref(storage, `images/${productId}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      pictureURLs.push(downloadURL);
    }

    // Update the Firestore document with the new picture URLs
    const docRef = doc(db, "products", productId);
    await updateDoc(docRef, {
      imageURIs: arrayUnion(...pictureURLs),
    });

    console.log("Product pictures updated successfully");

    return pictureURLs;
  } catch (error) {
    console.error("Error updating product pictures:", error);
    return [];
  }
};


export const updateProduct = async (productId, updatedData) => {
  try {
    const docRef = doc(db, "products", productId);
    await updateDoc(docRef, updatedData);
    console.log("Product updated successfully");
  } catch (error) {
    console.error("Error updating product:", error);
  }
};
