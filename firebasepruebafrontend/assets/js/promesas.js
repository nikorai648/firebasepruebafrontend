import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

export const registrarPersona = async (persona) => {
    console.log(persona);
    const docRef = await addDoc(collection(db, "personas"), persona);
};

export const obtenerPersonas = async () => {
    const ref = collection(db, "personas");
    const querySnapshot = await getDocs(ref);
    let personas = [];
    querySnapshot.forEach((doc) => {
        personas.push({ ...doc.data(), id: doc.id });
    });
    return personas;
};

export const actualizarPersona = async (persona, id) => {
    const ref = doc(db, "personas", id);
    await updateDoc(ref, persona);
};

export const eliminarPersona = async (id) => {
    const ref = doc(db, "personas", id);
    await deleteDoc(ref);
};
