import React, { useState } from 'react';
import "../styles/sign-up.css"; // Assuming CSS is in the same directory

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [address, setAddress] = useState({
    rt: '',
    rw: '',
    jalan: '',
    desa: '',
    kecamatan: '',
    kota: '',
    provinsi: '',
    negara: '',
    kodePos: '',
    detailAlamat: ''
  });
  const [usernameFeedback, setUsernameFeedback] = useState('');

  const checkFileSize = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 300 * 1024) {
      alert("Ukuran file tidak boleh melebihi 300KB.");
      setPhoto(null);
    }
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password-input");
    const eyeIcon = document.querySelector(".icon-eye");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    }
  };

  const validateUsername = () => {
    if (/\s/.test(username)) {
      alert("Username tidak boleh mengandung spasi.");
      return false; // Prevent form submission
    }
    if (usernameFeedback.includes("sudah digunakan")) {
      alert("Username tidak tersedia.");
      return false;
    }
    return true;
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (/\s/.test(e.target.value)) {
      alert("Username tidak boleh mengandung spasi.");
    }
    checkUsernameAvailability(e.target.value);
  };

  const checkUsernameAvailability = (username) => {
    if (username.length > 0) {
      fetch(`/check-username?username=${username}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.available) {
            setUsernameFeedback("Username tersedia!");
          } else {
            setUsernameFeedback("Username sudah digunakan.");
          }
        })
        .catch((error) => console.error("Error checking username availability:", error));
    }
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    const phoneRegex = /^[0-9\+\-\(\)\s]*$/;
    if (!phoneRegex.test(phoneValue)) {
      alert("Telepon hanya boleh berisi angka dan simbol yang sah (+, -, (), spasi).");
      setPhone(phoneValue.replace(/[^0-9\+\-\(\)\s]/g, ""));
    } else {
      setPhone(phoneValue);
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="sign-up">
      <div className="content-wrapper">
        <div className="welcome-section">
          <div className="logo-wrapper">
            <img src="images/logo/logo-update.jpg" alt="Logo Kebun Jambu Marina" className="logo" />
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
          <h2>Sign Up</h2>
          <p>Sudah punya akun? <a href="/signin">Sign In</a></p>
          <form
            action="/signup"
            method="post"
            enctype="multipart/form-data"
            onSubmit={(e) => { 
              if (!validateUsername()) e.preventDefault();
            }}
          >
            <label>Upload Foto (Opsional, Max 300KB)</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => { checkFileSize(e); setPhoto(e.target.files[0]); }}
            />

            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
              placeholder="Masukkan username"
            />
            <p id="username-feedback" style={{ color: usernameFeedback.includes("sudah digunakan") ? 'red' : 'green' }}>
              {usernameFeedback}
            </p>

            <label>Password</label>
            <div className="password-field">
              <input
                type="password"
                name="password"
                id="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Masukkan password"
              />
              <i className="fas fa-eye-slash icon-eye" onClick={togglePasswordVisibility}></i>
            </div>

            <label>Nama Lengkap</label>
            <input
              type="text"
              name="full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Masukkan nama lengkap"
            />

            <label>Telepon</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
              placeholder="Masukkan telepon"
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Masukkan email"
            />

            <fieldset>
              <legend>Alamat Lengkap Saat Ini</legend>
              <label>RT</label>
              <input
                type="number"
                name="rt"
                value={address.rt}
                onChange={handleAddressChange}
                required
                placeholder="Contoh : RT 001"
              />

              <label>RW</label>
              <input
                type="number"
                name="rw"
                value={address.rw}
                onChange={handleAddressChange}
                required
                placeholder="Contoh : RW 002"
              />

              <label>Jalan</label>
              <input
                type="text"
                name="jalan"
                value={address.jalan}
                onChange={handleAddressChange}
                required
                placeholder="Contoh : Jl. Kenangan-Mantan"
              />

              <label>Desa</label>
              <input
                type="text"
                name="desa"
                value={address.desa}
                onChange={handleAddressChange}
                required
                placeholder="Contoh : Desa Shanghai"
              />

              <label>Kecamatan</label>
              <input
                type="text"
                name="kecamatan"
                value={address.kecamatan}
                onChange={handleAddressChange}
                required
                placeholder="Contoh : Kec. Undaan"
              />

              <label>Kota</label>
              <input
                type="text"
                name="kota"
                value={address.kota}
                onChange={handleAddressChange}
                required
                placeholder="Contoh : Kota Kudus"
              />

              <label>Provinsi</label>
              <input
                type="text"
                name="provinsi"
                value={address.provinsi}
                onChange={handleAddressChange}
                required
                placeholder="Contoh : Prov. Jawa Tengah"
              />

              <label>Negara</label>
              <input
                type="text"
                name="negara"
                value={address.negara}
                onChange={handleAddressChange}
                required
                placeholder="Contoh : Indonesia"
              />

              <label>Kode Pos</label>
              <input
                type="number"
                name="kode-pos"
                value={address.kodePos}
                onChange={handleAddressChange}
                required
                placeholder="Contoh : 59372"
              />

              <label>Detail Alamat</label>
              <textarea
                name="detail-alamat"
                value={address.detailAlamat}
                onChange={handleAddressChange}
                required
                placeholder="Contoh : Jauh dari mata, namun dekat dari hati, aww"
              />
            </fieldset>

            <input type="hidden" name="role" value="user" />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
