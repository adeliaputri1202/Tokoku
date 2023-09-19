import { Link } from "react-router-dom";


function Register() {
    return (
  
      <section className="login-page px-4 mb-36 mt-10 text-center" id="Login">
        <div className="container">
  
          <div className="flex  items-center justify-center">
  
            <div className="w-1/2 p-10">
              <img src="/img/float.png" alt="" width="100%" />
  
            </div>
            <div className="w-1/2 p-20">
              <div className="w-full border-2 px-16 p-5">
  
                <h1 className="m-3 text-lg text-purple-700" style={{ fontFamily: 'Kaushan Script, cursive', fontSize: '2.5rem' }}>Tokoku</h1>
                <input type="text" placeholder="Username or Email" className="bg-slate-100 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-3" />
                <input type="password" placeholder="Password" className="bg-slate-100 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-3" />
                <button className="w-full py-2 my-4 text-white rounded-md shadow-md bg-purple-700">Masuk</button>
                <h4 >forget password?</h4>
              </div><br /> 
              <div className="w-full border-2 px-16 py-5 ">
                <h1 className="text-lg">Sudah punya Akun? <Link to="/login"className="text-blue-600 font-semibold">Masuk</Link></h1>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    )
  }
  
  export default Register;