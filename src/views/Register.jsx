import { Link } from 'react-router-dom';
import googleIcon from '../asserts/PNG/google-icon.png'; 
import Logo from './Logo';

export default function Register() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
        <div className="w-11/12 h-[68px]  py-[20px] px-[3px]">          
                    <Link to='/'>
                <Logo />
            </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="max-w-md w-full mx-auto p-5 text-center font-sans">
                    <h2 className="mb-5 text-2xl">Register</h2>
                    <form className="flex flex-col space-y-4">
                        <div className="text-left">
                            <label htmlFor="email" className="block mb-1 text-sm">Email address</label>
                            <input type="email" id="email" name="email" required className="w-full p-2 mb-3 bg-gray-200 rounded border-none" />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 rounded font-medium mb-3 hover:bg-blue-700">Next</button>
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
                        Already have an account? <Link to="/SignIn" className="text-blue-500 hover:underline">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}


