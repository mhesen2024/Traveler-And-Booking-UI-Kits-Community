import { Link } from 'react-router-dom';
import googleIcon from '../asserts/PNG/google-icon.png'; 
import Logo from './Logo';

export default function SignIn() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
            <div className="w-11/12 h-[68px]  py-[20px] px-[3px]">          
                    <Link to='/'>
                <Logo />
            </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="max-w-md w-full mx-auto p-5 text-center font-sans">
                    <h2 className="mb-5 text-2xl">Sign in</h2>
                    <form className="flex flex-col space-y-4">
                        <div className="text-left">
                            <label htmlFor="email" className="block mb-1 text-sm">Email address</label>
                            <input type="email" id="email" name="email" required className="w-full p-2 mb-3 bg-gray-200 rounded border-none" />
                        </div>
                        <div className="text-left">
                            <label htmlFor="password" className="block mb-1 text-sm">Password</label>
                            <div className="relative flex items-center">
                                <input type="password" id="password" name="password" required className="w-full p-2 mb-3 bg-gray-200 rounded border-none pr-10" />
                                <i className="fa-regular fa-eye absolute right-4 text-gray-600 cursor-pointer"
                                style={{
                                    position: "absolut",
                                    top: "40%",
                                    transform: "translateY(-50%)",
                                }}
                                ></i>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center">
                                <input type="checkbox" id="keep-signed-in" name="keep-signed-in" className="mr-2" />
                                <label htmlFor="keep-signed-in" className="text-sm text-gray-700">Keep me signed in</label>
                            </div>
                            <Link to="#" className="text-sm text-blue-500 hover:underline">Forgot password?</Link>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 rounded font-medium mb-3 hover:bg-blue-700">Login</button>
                        <div className="flex items-center my-5">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-2 text-sm text-gray-600">or use one of these options</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <button type="button" className="bg-white border border-gray-300 text-gray-700 py-2 rounded flex items-center justify-center space-x-2 mb-3 hover:bg-gray-100">
                            <img src={googleIcon} alt="Google icon" className="w-5 h-5" />
                            <span>Continue with Google</span>
                        </button>
                        <button type="button" className="py-2 rounded flex items-center justify-center space-x-2 mb-3" style={{ backgroundColor: '#475993', color: 'white' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#3b4a6b'} onMouseLeave={(e) => e.target.style.backgroundColor = '#475993'}>
                            <i className="fa-brands fa-square-facebook text-xl"></i>
                            <span>Continue with Facebook</span>
                        </button>
                    </form>
                    <p className="mt-5 text-sm text-gray-700">
                        Don’t have an account? <Link to="/Register" className="text-blue-500 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}




