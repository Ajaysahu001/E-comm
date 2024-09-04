import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../../firebase-config";

export const getUserFromFirebase = async () => {

    let userRef = collection(db, "users");

    const querySnapshot = await getDocs(userRef);

    let data = [];

    querySnapshot.forEach((doc) => { 
        let object = doc.data();
        object.id = doc.id;

        data.push(object);
    });

    return data;
}

export const addUserToFirebase = async (data) => {

    let userRef = collection(db, "users");

    const docRef = await addDoc(userRef, data);
}

export const updateUserToFirebase = async (data, id) => {

    let userRef = doc(db, "users", id);

    await updateDoc(userRef, data);
}

export const deleteUserToFirebase = async (id) => {
    let userRef = doc(db, "users", id);

    await deleteDoc(userRef);
}
