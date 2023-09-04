import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

const db = getFirestore(app);

const storage = getStorage();

export const createUserDocFromAuth = async (userAuth, displayName) => {
  if (!userAuth || !userAuth.uid) {
    return; // Exit early if userAuth or uid is missing
  }

  const userData = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userData);

  if (!userSnapshot.exists()) {
    const { email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userData, {
        uid,
        displayName: displayName || userAuth.displayName, // Use the provided displayName or set to null
        email,
        wishlist: [],
        cart: [],
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userData;
};

export const signInWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Call the function to create a user document
    await createUserDocFromAuth(user);

  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const registerUserWithEmailAndPassword = async (displayName, email, password) => {
  if (!email || !password) return;

  try {
    // Register the user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Access the user object from the userCredential
    const user = userCredential.user;

    // Call the function to create a user document
    await createUserDocFromAuth(user, displayName);

    return userCredential; // Return the user object if needed

  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

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

export const fetchUserData = async (uid) => {
  try {
    const userRef = doc(db, "users", uid);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      return userSnapshot.data();
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
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

export const addToWishlist = async (userId, productId) => {
  try {
    const userRef = doc(db, "users", userId);

    // Fetch the user document
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();

      // Check if the wishlist field exists in the user data
      if (!userData.wishlist) {
        userData.wishlist = []; // Initialize the wishlist as an empty array
      }

      // Add the product ID to the wishlist array
      const updatedWishlist = [...userData.wishlist, productId];

      // Update the user document with the modified wishlist
      await updateDoc(userRef, { wishlist: updatedWishlist });

      console.log("Product added to wishlist");
    } else {
      console.log("User document does not exist.");
    }
  } catch (error) {
    console.error("Error adding to wishlist:", error);
  }
};

export const removeFromWishlist = async (userId, productId) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      wishlist: arrayRemove(productId),
    });
    console.log("Product removed from wishlist");
  } catch (error) {
    console.error("Error removing from wishlist:", error);
  }
};

export const addItemToCart = async (userId, productId) => {
  try {
    const userRef = doc(db, "users", userId);

    // Fetch the user document
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();

      // Check if the cart field exists in the user data
      if (!userData.cart) {
        userData.cart = []; // Initialize the cart as an empty array
      }

      // Check if the product is already in the cart
      const existingCartItem = userData.cart.find((item) => item.productId === productId);

      if (existingCartItem) {
        // If the product is already in the cart, increment its count
        existingCartItem.productCount += 1;
      } else {
        // If the product is not in the cart, add it
        userData.cart.push({
          productId,
          productCount: 1, // Initialize the count to 1
        });
      }

      // Update the user document with the modified cart
      await updateDoc(userRef, { cart: userData.cart });

      console.log("Product added to cart");
    } else {
      console.log("User document does not exist.");
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

export const incrementProductCount = async (userId, productId) => {
  try {
    const userRef = doc(db, "users", userId);

    // Fetch the user document
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();

      // Check if the cart field exists in the user data
      if (!userData.cart) {
        userData.cart = []; // Initialize the cart as an empty array
      }

      // Find the cart item by productId and increment the count
      const updatedCart = userData.cart.map((item) => {
        if (item.productId === productId) {
          item.productCount += 1;
        }
        return item;
      });

      // Update the user document with the modified cart
      await updateDoc(userRef, { cart: updatedCart });

      console.log("Product count incremented");
    } else {
      console.log("User document does not exist.");
    }
  } catch (error) {
    console.error("Error incrementing product count:", error);
  }
};

export const decrementProductCount = async (userId, productId) => {
  try {
    const userRef = doc(db, "users", userId);

    // Fetch the user document
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();

      // Check if the cart field exists in the user data
      if (!userData.cart) {
        userData.cart = []; // Initialize the cart as an empty array
      }

      // Find the cart item by productId
      const cartItem = userData.cart.find((item) => item.productId === productId);

      if (cartItem) {
        // Check if the count is greater than 1 before decrementing
        if (cartItem.productCount > 1) {
          cartItem.productCount -= 1;
        } else {
          // If count is 1, remove the item from the cart
          userData.cart = userData.cart.filter((item) => item.productId !== productId);
        }

        // Update the user document with the modified cart
        await updateDoc(userRef, { cart: userData.cart });

        console.log("Product count decremented");
      }
    } else {
      console.log("User document does not exist.");
    }
  } catch (error) {
    console.error("Error decrementing product count:", error);
  }
};

export const removeItemFromCart = async (userId, productId) => {
  try {
    const userRef = doc(db, "users", userId);

    // Fetch the user document
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();

      // Filter the cart to exclude the product with the given productId
      const updatedCart = userData.cart.filter(item => item.productId !== productId);

      // Update the user document with the modified cart
      await updateDoc(userRef, { cart: updatedCart });

      console.log("Product removed from cart");
    } else {
      console.log("User document does not exist.");
    }
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
};

export const fetchProductById = async (productId) => {
  try {
    const docRef = doc(db, "products", productId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      alert("Product does not exist");
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
