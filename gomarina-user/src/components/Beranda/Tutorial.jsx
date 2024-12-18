import React from "react";

const Tutorial = () => {
  const copyText = () => {
    const textToCopy = "Go Marina";
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        alert("Nama aplikasi disalin: " + textToCopy);
      },
      (err) => {
        console.error("Gagal menyalin: ", err);
      }
    );
  };

  return (
    <div>
      <div className="background-circle" />
      <div className="tutorial">
        <h2>Cara Memesan</h2>
        <p>Pelajari cara memesan produk menggunakan aplikasi mobile!</p>
        <div className="steps">
          <div className="step">
            <img
              src="src/assets/images/beranda/cara-memesan/cara-memesan01.jpg"
              alt="Step 1"
              className="step-image"
            />
            <p style={{ fontWeight: "bold" }}>Step 1</p>
            <p style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              inventore deleniti provident, debitis dolor officiis cumque
              repellendus dignissimos in voluptas quas vero mollitia totam
              impedit beatae unde eum molestiae earum.
            </p>
          </div>
          <div className="step">
            <img
              src="src/assets/images/beranda/cara-memesan/cara-memesan01.jpg"
              alt="Step 2"
              className="step-image"
            />
            <p style={{ fontWeight: "bold" }}>Step 2</p>
            <p style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              inventore deleniti provident, debitis dolor officiis cumque
              repellendus dignissimos in voluptas quas vero mollitia totam
              impedit beatae unde eum molestiae earum.
            </p>
          </div>
          <div className="step">
            <img
              src="src/assets/images/beranda/cara-memesan/cara-memesan01.jpg"
              alt="Step 3"
              className="step-image"
            />
            <p style={{ fontWeight: "bold" }}>Step 3</p>
            <p style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              inventore deleniti provident, debitis dolor officiis cumque
              repellendus dignissimos in voluptas quas vero mollitia totam
              impedit beatae unde eum molestiae earum.
            </p>
          </div>
          <div className="step">
            <img
              src="src/assets/images/beranda/cara-memesan/cara-memesan01.jpg"
              alt="Step 4"
              className="step-image"
            />
            <p style={{ fontWeight: "bold" }}>Step 4</p>
            <p style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              inventore deleniti provident, debitis dolor officiis cumque
              repellendus dignissimos in voluptas quas vero mollitia totam
              impedit beatae unde eum molestiae earum.
            </p>
          </div>
        </div>
        <div className="barcode-section">
          <img
            src="src/assets/images/beranda/cara-memesan/barcode01.png"
            alt="Barcode"
            className="barcode"
          />
          <div className="phone">
            <img
              src="src/assets/images/beranda/cara-memesan/phone01.png"
              alt="Handphone"
              className="phone-image"
            />
            <div className="info">
              <h3>
                Go Marina
                <i
                  className="fas fa-copy copy-icon"
                  onclick="copyText()"
                  title="Copy name"
                />
              </h3>
              <p style={{ textAlign: "left" }}>
                Solusi cepat membeli aneka olahan buah jambu untuk kamu!
              </p>
              <div className="rating">⭐⭐⭐⭐⭐ (10)</div>
              <button className="download-button">Unduh Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
