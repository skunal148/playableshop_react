import React from 'react';

const TrustedBy = () => {


const logos = [
    { name: 'AlpineFresh', filename: 'AlpineFresh.png' },
    { name: 'Alps', filename: 'Alps.png' },
    { name: 'Happn', filename: 'Happn.png' },
    { name: 'IceNine_Kills', filename: 'IceNineKills.png' },
    { name: 'Linen Chest', filename: 'LinenChest.png' },
    { name: 'mthree', filename: 'mthree.png' },
    { name: 'portalone', filename: 'PortalOne.png' },
    { name: 'Rival Club', filename: 'RivalClub.png' },
    { name: 'Truecaller', filename: 'truecaller.png' },
    { name: 'upily', filename: 'upily.png' },
  ];

  
  return (
    <section className="trusted-by">
      <div className="container">
        <div className="logos-wrapper">
          <div className="logo-track">
            {/* Render the list of logos */}
            {logos.map((logo, index) => (
              <div className="logo-item" key={`a-${index}`}>
                <img
                  src={`/brands/${logo.filename}`}
                  alt={`${logo.name} Logo`}
                />
              </div>
            ))}
            {/* Render the list a second time for the seamless loop */}
            {logos.map((logo, index) => (
              <div className="logo-item" key={`b-${index}`}>
                <img
                  src={`/brands/${logo.filename}`}
                  alt={`${logo.name} Logo`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;