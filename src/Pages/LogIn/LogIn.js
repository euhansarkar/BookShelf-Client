import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const LogIn = () => {
  const [logInError, setLogInError] = useState(null);
  const { logIn, signInWithGoogle } = useContext(AuthContext);
  const { handleSubmit, register, formState: {errors} } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || `/`;
  const googleProvider = new GoogleAuthProvider();

  const handleLogIn = data => {
    const {email, password} = data;
    logIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setLogInError(null);
      navigate(from, {replace: true})
    })
    .catch(err => {
      console.error(err);
      setLogInError(err.message);
    })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setLogInError(null);
    })
    .catch(err => {
      console.log(err);
      setLogInError(err.message)
    })
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex  flex-col lg:flex-row-reverse gap-6">
        <div className="text-center w-1/2 hidden lg:block ml-32 lg:text-left">
          <img src={login} className="w-96" alt="" />
        </div>
        <div className="card w-full md:w-[385px] md:h-[500px] shadow-2xl">
          <div className="card-body">
            <h2 className="text-5xl font-bold text-center">login</h2>
            <form onSubmit={handleSubmit(handleLogIn)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  {...register("email", {required: `your email address is reqired`})}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
                {errors.email && <p className="text-red-400">{errors?.email?.message}</p> }
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Password</span>
                </label>
                <input
                  {...register("password", {
                    required: `you password is required`
                  })}
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full"
                />
                {errors.password && <p className="text-red-400">{errors?.password?.message}</p> }
                <label className="label">
                  <span className="label-text">forgot password?</span>
                </label>
              </div>
              <div className="items-center flex flex-col justify-center">
                <input
                  type="submit"
                  value="login"
                  className="btn btn-primary w-full "
                />
                <p className="text-red-400">{logInError}</p>
                <p>
                  new to <span className="text-success">Book Self</span>?
                  <Link className="text-secondary" to="/signup">create new account</Link>
                </p>
              </div>
            </form>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-primary w-full">
              continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
