import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/signup/signup.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createdUserEmail, setCreatedUserEmail] = useState(``);
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const { createUser, signInWithGoogle, updateUser } = useContext(AuthContext);

  if (token) {
    navigate(`/`);
  }

  const handleSignUp = (data) => {
    const { email, name, role, password } = data;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSignUpError(null);

        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then((res) => {
            saveUserToDataBase(name, email, role);
          })
          .catch((err) => console.error(err));
      })
      .then((err) => {
        setSignUpError(err?.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSignUpError(null);
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
      });
  };

  const saveUserToDataBase = (name, email, role) => {
    const user = { name, email, role };
    fetch(`https://products-resale-server.vercel.app/users`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setCreatedUserEmail(email);
          toast.success(`user created successfully`);
        }
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>signup - BookShelf</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <div className="hero-content flex  flex-col lg:flex-row-reverse gap-6">
        <div className="text-center w-1/2 hidden lg:block ml-32 lg:text-left">
          <img src={login} className="w-96" alt="" />
        </div>
        <div className="card w-full md:w-[600px] md:h-[700px] shadow-2xl">
          <div className="card-body">
            <h2 className="text-4xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  {...register("name", {
                    required: `your name is required`,
                  })}
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered focus:outline-none w-full"
                />
                {errors?.name && (
                  <p className="text-red-400">{errors?.name?.message}</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  {...register("email", {
                    required: `your email address is required`,
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered focus:outline-none w-full"
                />
                {errors?.email && (
                  <p className="text-red-400">{errors.email?.message}</p>
                )}
              </div>

              <div className="form-control">
                <p>Please select your role?</p>
                <div className="flex justify-around">
                  <div>
                    <label htmlFor="buyer">
                      Buyer{" "}
                      <input
                        defaultChecked
                        {...register("role")}
                        type="radio"
                        id="buyer"
                        name="role"
                        value="buyer"
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="seller">
                      Seller{" "}
                      <input
                        {...register("role")}
                        type="radio"
                        id="seller"
                        name="role"
                        value="seller"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Password</span>
                </label>
                <input
                  {...register("password", {
                    required: `your password is required`,
                  })}
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered focus:outline-none w-full"
                />
                {errors.password && (
                  <p className="text-red-400">{errors?.password?.message}</p>
                )}
                <label className="label">
                  <span className="label-text">forgot password?</span>
                </label>
              </div>
              <div className="items-center flex flex-col justify-center">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary w-full "
                />
                <p className="text-red-400">{signUpError && signUpError}</p>
                <p>
                  already have an account? <Link className="/login">login</Link>
                </p>
              </div>
            </form>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary w-full"
            >
              continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
