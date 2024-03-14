import React , {useState} from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="flex flex-col items-center px-6 ">
            <h1 className="font-bold text-3xl my-3">Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-[500px] login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button className="bg-[#FF8C38] w-full h-14 mt-3 text-white rounded-md">Log in</button>
            </form>
        </div>
    )

}