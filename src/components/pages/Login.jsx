import { Link } from "react-router-dom";
import Footer from "../layout/Footer";


function Login() {
  return (
<>
    <section className="login-page  mb-36 mt-10 text-center" id="Login">
      <div className="co">

        <div className="flex  items-center justify-center">

          <div className="w-1/2 p-10">
            <img src="/img/float2.png" alt="" width="100%" />

          </div>
          <div className="w-1/2 p-20">
            <div className="w-full border-2 px-16 p-5">

            <h1 className="m-3 text-lg text-purple-700" style={{ fontFamily: 'Kaushan Script, cursive', fontSize:'2.5rem'}}>Tokoku</h1>
                <input type="text" placeholder="Username or Email" className="bg-slate-100 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-3" />
                <input type="password" placeholder="Password" className="bg-slate-100 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-3" />
                <button className="w-full py-2 my-4 text-white rounded-md shadow-md bg-purple-700">Masuk</button>
                <h4 >forget password?</h4>
            </div><br /> 
            <div className="w-full border-2 px-16 py-5 ">
              <h1 className="text-lg">Don't have account?  <Link to="/register"className="text-purple-700 font-semibold">Register</Link></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer/>
      </>
    

  )
}

export default Login;