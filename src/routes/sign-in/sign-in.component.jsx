import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase-auth";

const SignIn = () => {
    const logWithPopup = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
      };
    return (
        <div>
            <button onClick={logWithPopup}>Sign in</button>
        </div>
    )
}

export default SignIn;