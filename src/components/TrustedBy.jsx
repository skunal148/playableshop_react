import React from 'react';

const TrustedBy = () => {


const logos = [
    { name: 'AlpineFresh', filename: 'AlpineFresh.png' },
    { name: 'HeyCash', filename: 'HeyCash.png' },
    { name: 'Happn', filename: 'Happn.png' },
    { name: 'LinenChest', filename: 'LinenChest.png' },
    { name: 'mthree', filename: 'mthree.png' },
    { name: 'portalone', filename: 'PortalOne.png' },
    { name: 'RivalClub', filename: 'RivalClub.png' },
    { name: 'Truecaller', filename: 'Truecaller.png' },
    { name: 'upily', filename: 'upily.png' },
    { name: 'MCM', filename: 'mcm.png' },
    { name: 'Betway', filename: 'betway.png' },
    { name: 'Junkyard Tycoon', filename: 'JunkyardTycoon.png' },
    { name: 'HeyCash', filename: 'HeyCash.png' },
    { name: 'lotum', filename: 'Lotum.png' },
    { name: 'Splash Learn', filename: 'SplashLearn.png' },
    { name: 'Deca', filename: 'Deca.png' }
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