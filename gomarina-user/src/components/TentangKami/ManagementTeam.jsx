import React from "react";

function ManagementTeam() {
  const teamMembers = [
    {
      name: "Dr. Budi Santoso",
      role: "Manajer Kebun",
      imgSrc: "src/assets/images/tentang-kami/tim-pengelola/image09.jpg",
    },
    {
      name: "Ibu Siti Aminah",
      role: "Asisten Manajer Kebun",
      imgSrc: "src/assets/images/tentang-kami/tim-pengelola/image09.jpg", // Separate image for Ibu Siti
    },
    {
      name: "Bapak Joko Widodo",
      role: "Pengawas Kebun",
      imgSrc: "src/assets/images/tentang-kami/tim-pengelola/image09.jpg", // Separate image for Bapak Joko
    },
  ];

  return (
    <div className="management-team">
      <h3>Tim Pengelola Kebun</h3>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img
              src={member.imgSrc} // Using separate image for each member
              alt={member.name}
            />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagementTeam;
