import React from 'react';


const Attractions = () => (
  <section className="attractions">
    <h3>Keseruan di Kebun Jambu Marina</h3>
    <p>Jelajahi berbagai keseruan di kebun kami yang pasti akan memikat hati Anda!</p>
    <div className="attraction-list">
      {[
        { src: 'src/assets/images/beranda/keseruan/petik-jambu01.webp', alt: 'Attraction 1', name: 'Nama Kegiatan 1', icon: 'icon1.png' },
        { src: 'src/assets/images/beranda/keseruan/berkuda03.jpg', alt: 'Attraction 2', name: 'Nama Kegiatan 2', icon: 'icon2.png' },
        { src: 'src/assets/images/beranda/keseruan/spot-foto01.jpg', alt: 'Attraction 3', name: 'Nama Kegiatan 3', icon: 'icon3.png' },
      ].map((attraction, index) => (
        <div key={index} className="attraction">
          <img src={attraction.src} alt={attraction.alt} className="attraction-image" />
          <div className="icon">
            <img src={`/assets/icons/${attraction.icon}`} alt={`Icon ${index + 1}`} />
          </div>
          <p>{attraction.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Attractions;
