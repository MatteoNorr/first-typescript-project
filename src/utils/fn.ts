import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../plugins/firebase";
import { SetStateAction } from "react";
import { Dispatch } from "react";

export const signIn = (
  setIsLogged: Dispatch<SetStateAction<boolean>>,
  setUserData: Dispatch<SetStateAction<any>>
) =>
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      setIsLogged(true);
      setUserData(result);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });

export const logout = (
  logoutProcess: boolean,
  setIsLogged: Dispatch<SetStateAction<boolean>>,
  setLogoutProcess: Dispatch<SetStateAction<boolean>>
) => {
  auth.signOut().then(() => {
    setIsLogged(false);
    setLogoutProcess(true);
    setTimeout(() => {
      location.reload();
      setLogoutProcess(false);
    }, 1300);
  });
};

export interface todoModel {
  id?: number;
  todo: string;
  isDone?: boolean;
}
