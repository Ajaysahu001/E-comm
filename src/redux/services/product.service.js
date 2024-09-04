import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../../firebase-config";


export const getProductFromFirebase = async () => {

    let productRef = collection(db, "products");

    const querySnapshot = await getDocs(productRef);

    let data = [];

    querySnapshot.forEach((doc) => { // console.log(`${doc.id} => ${doc.data()}`);
        let object = doc.data();
        object.id = doc.id;

        data.push(object);
    });

    return data;
}

export const addProductToFirebase = async (data) => {

    let productRef = collection(db, "products");

    const docRef = await addDoc(productRef, data);
    console.log("Document written with ID: ", docRef.id);
}

export const updateProductToFirebase = async (data, id) => {

    let productRef = doc(db, "products", id);

    await updateDoc(productRef, data);
}

export const deleteProductToFirebase = async (id) => {
    let productRef = doc(db, "products", id);

    await deleteDoc(productRef);
}
