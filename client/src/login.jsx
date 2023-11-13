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
        <div className="flex flex-col w-96 border-2 border-black space-y-8">
                <div className="text-3xl font-medium ml-6 mt-8"> Login</div>
                <form onSubmit={handleSubmit} >
                    <div className="flex flex-col  ml-6">
                        <label className = 'text-lg' htmlFor = 'email'>Email</label>
                        <input className="border-2 border-black w-3/4" value = {email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email"></input>
                    </div>
                    <div className="flex flex-col  ml-6">
                        <label className = 'text-lg' htmlFor = 'password'>Password</label>
                        <input className="border-2 border-black w-3/4" value = {pass} onChange={(e) => setPass(e.target.value)}type="password" id="password" name="password"></input>
                    </div>
                    <button className = 'border-2 border-black mt-6 ml-7 w-64' type="submit">Login</button>
                </form>
                <div>
                    <button className="text-center mb-8 text-md"> Don't have an account? <span className="font-medium underline decoration-solid"><Link to = "/signup">Register here</Link></span></button>           
                </div>
        </div>         
    )
}