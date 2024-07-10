import React, { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Register = () => {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { name, email, password } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    // alert("Your form has been submited")

    const result = await register(name, email, password);

    if (result.success) {
      navigate("/login");
    }

    // console.log(formData);
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="border p-4 rounded box2">
            <h1 className="text-center">User Register</h1>
            <form className="mt-4" onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={onChangerHandler}
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={onChangerHandler}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  value={formData.password}
                  onChange={onChangerHandler}
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>
              <div className="d-grid col-6 mx-auto my-3">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
