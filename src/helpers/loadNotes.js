import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadNotes = async( uid = '') => {
    if (!uid) throw new Error("The uid does not exist");

    const collectionRef = collection( FirebaseDB, `${uid}/journal/notes`);

    const docs = await getDocs(collectionRef)
    const notes = [];
    docs.forEach( doc => {
        notes.push({ uid : doc.id, ...doc.data() });
    });
    
}