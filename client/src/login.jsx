import { useState, useEffect } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useUserAuth } from "./UserAuthContext";

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const auth = getAuth()
    const [err, setErr] = useState("")
    const navigate = useNavigate()
    const { logIn } = useUserAuth

    const handleSubmit = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate('/home')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    };

    return (
        <div className="flex bg-blue-400 h-screen w-full">
            <div className="flex flex-col shadow-xl w-96 bg-white h-[480px] border-2 border-white mx-auto my-8 space-y-8 rounded-md mt-32">
                    <div className="text-2xl ml-8 mt-8 "> LOGIN </div>
                    <form onSubmit={handleSubmit} >
                        <div className="flex flex-col  ml-8 ">
                            <label className = 'text-lg mb-2 ml-1' htmlFor = 'email'>Email</label>
                            <input className="rounded-md  border-2 w-72 h-9 pl-4 py-1.5 text-md" value = {email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email"></input>
                        </div>
                        <div className="flex flex-col  ml-8">
                            <label className = 'text-lg mb-2 mt-2 ml-1' htmlFor = 'password'>Password</label>
                            <input className="border-2  w-72 rounded-md pl-4 py-1.5 text-md" value = {pass} onChange={(e) => setPass(e.target.value)}type="password" id="password" name="password"></input>
                        </div>
                        <button className="border-2  mt-6 ml-8 w-72 p-2 rounded-md bg-pink-500 text-white hover:bg-pink-700" type="submit">LOGIN</button>
                    </form>
                    <div>
                        <button className="text-center mb-8 text-md ml-12"> Don't have an account? <span className="font-medium underline decoration-solid"><Link to = "/signup">Register here</Link></span></button>           
                    </div>
            </div>
        </div>       
    )
}
