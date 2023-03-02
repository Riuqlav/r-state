import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";

import { useNavigate } from "react-router";

const OAuth = () => {
  const navigate = useNavigate();
  //google auth set up
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      //check for the user existence

      const docRef = doc(db, "users", user.uid);

      const docSnap = await getDoc(docRef);
      !docSnap.exists() &&
        (await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        }));

      navigate("/");
    } catch (error) {
      toast.error("Could not connect with Google");
    }
  };

  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full
     bg-red-600 text-white px-7 py-3 uppercase 
     text-sm font-medium hover:bg-red-800
      active:bg-red-900 
     shadow-md hover:shadow-lg 
     active:shadow-lg transition 
     duration-200 ease-in-out rounded"
    >
      <FcGoogle
        className=" text-2xl
      bg-white
      rounded-full
      mr-2 "
      />
      Continue with Google
    </button>
  );
};

export default OAuth;
