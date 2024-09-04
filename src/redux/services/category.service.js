import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../../firebase-config";

export const getCategoryFromFirebase = async () => {

    let categroyRef = collection(db, "categories");

    const querySnapshot = await getDocs(categroyRef);

    let data = [];

    querySnapshot.forEach((doc) => { 
        let object = doc.data();
        object.id = doc.id;

        data.push(object);
    });

    return data;
}

export const addCategoryToFirebase = async (data) => {

    let productRef = collection(db, "categories");

    const docRef = await addDoc(productRef, data);
}

export const updateCategoryToFirebase = async (data, id) => {

    let productRef = doc(db, "categories", id);

    await updateDoc(productRef, data);
}

export const deleteCategoryToFirebase = async (id) => {
    let productRef = doc(db, "categories", id);

    await deleteDoc(productRef);
}
