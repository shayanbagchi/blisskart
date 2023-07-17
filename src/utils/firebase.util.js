import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

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


export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      productID: uuidv4(),
      ...product,
    });
    console.log("Product added with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding product:", e);
  }
};


export const uploadFile = async (file) => {
  const storageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
};

export const getFileDownloadURL = async (fileName) => {
  const storageRef = ref(storage, `images/${fileName}`);
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