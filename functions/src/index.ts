import {auth} from "firebase-functions";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {applicationDefault, initializeApp} from "firebase-admin/app";

initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = auth.user().onCreate(async (user) => {
  // functions.logger.info("Hello logs!", {structuredData: true});
  // response.send("Hello from Firebase!");
  await addDoc(collection(db, "boxes"), {
    name: "default-box",
    userId: user.uid,
    image: "/images/pandoras_box.png",
    inside: [],
    outside: [],
  });
});
