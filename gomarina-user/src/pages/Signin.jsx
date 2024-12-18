import React, { useState } from "react";
import "../styles/sign-in.css"; // Assuming CSS is in the same directory
import { Link } from "react-router-dom";

function SignIn() {
  // State for password visibility toggle
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const login = e.target.login.value;
    const password = e.target.password.value;
    console.log("Username/Email/Phone: ", login);
    console.log("Password: ", password);
    // Add your API call here or handle state updates
  };

  return (
    <div className="sign-in">
      <div className="content-wrapper">
        <div className="welcome-section">
          <div className="logo-wrapper">
            <img
              src="images/logo/logo-update.jpg"
              alt="Logo Kebun Jambu Marina"
              className="logo"
            />
          </div>
          <h1>Selamat Datang!</h1>
          <p className="description">
            Kebun Jambu Marina menawarkan berbagai kegiatan seru dan edukatif
            untuk semua kalangan. Mulai dari memetik jambu merah segar langsung
            dari kebunnya, berkuda mengelilingi perkebunan yang asri, hingga
            berburu spot foto instagramable di antara hamparan hijau yang
            mempesona.
          </p>
        </div>

        <div className="form-section">
          <h2>Sign In</h2>
          <p style={{ marginLeft: "5px" }}>
            Belum punya akun? <Link to="/signup">Sign Up</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <label>Username/Email/Telepon</label>
            <input
              type="text"
              name="login"
              required
              placeholder="Masukkan username / email / telepon"
            />

            <label>Password</label>
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password-input"
                required
                placeholder="Masukkan password"
              />
              <i
                className={`fas fa-eye${passwordVisible ? "" : "-slash"} icon-eye`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>

            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
