import React from 'react';

const Header = () => {
  return (
    <>
    <div
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), white),url("https://i.pinimg.com/originals/29/5d/13/295d13ace364ebc92b368ff1ce63d55b.jpg")',
        backgroundSize: '100% auto', 
        width: '100%',
        height: '90vh', 
        margin: '0px',
        padding: '0px',
        display: 'flex',             // Enable Flexbox
        justifyContent: 'center',    // Center horizontally
        alignItems: 'center',   
        fontSize: '80px',
        fontFamily: 'Bold',
        textAlign: 'center',
      }}
    >
      <h1>Welcome to LakeVigil</h1>
      <p style={{fontSize:'5vh'}}>Welcome to an initiative to protect lakes in an efficient and better way</p>
    </div>
      <div>
        <table>
          
        </table>
      </div>
    
    </>
  );
};

export default Header;
