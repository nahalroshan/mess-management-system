import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from "./UserAuthContext";

export default function Register(props) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
    const [err, setErr] = useState('')
    const { signUp } = useUserAuth()
    const navigate = useNavigate()
    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr("")
        try {
            await signUp(email, pass)
            navigate("/")
        } catch(err) {
            setErr(err.message)
        }
    }

    return (
        <div className="flex bg-blue-400 h-screen w-full">
            <div className="flex flex-col shadow-xl w-96 bg-white h-3/4 border-2 border-white mx-auto my-8 space-y-8 rounded-md mt-24">
            <div className="text-2xl ml-8 mt-8 ">Signup</div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col  ml-8 ">
                    <label className = 'text-lg mb-2 ml-1' htmlFor = 'name'>User Name</label>
                    <input className="rounded-md  border-2 w-72 h-9 pl-4 py-2 text-md" value = {name} onChange={(e) => setName(e.target.value)} id="name" name="name"></input>
                </div>
                <div className="flex flex-col  ml-8">
                    <label className = 'text-lg mb-2 mt-2 ml-1' htmlFor = 'email'>Email</label>
                    <input className="rounded-md  border-2 w-72 h-9 pl-4 py-2 text-md" value = {email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email"></input>
                </div>
                <div className="flex flex-col  ml-8">
                    <label className = 'text-lg mb-2 mt-2 ml-1' htmlFor = 'password'>Password</label>
                    <input className="rounded-md  border-2 w-72 h-9 pl-4 py-2 text-md" value = {pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password"></input> 
                </div>
                <button className="border-2  mt-6 ml-8 w-72 p-2 rounded-md bg-pink-500 text-white hover:bg-pink-700" type="submit"> Register </button>
            </form>
            <div>
                <button className="text-center mb-8 text-md ml-12"> Already have an account? <span className="font-medium underline decoration-solid"><Link to = "/">Login here</Link></span></button>
            </div>
            </div>
        </div>
                
    )
}
