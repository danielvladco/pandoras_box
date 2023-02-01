import {getContext} from "svelte";
import {Firestore} from "firebase/firestore";

export const key = Symbol()

export const getFirestore = () => (getContext(key) as Firestore)