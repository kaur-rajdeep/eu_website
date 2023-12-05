import React from 'react'

const AccountCard = (props) => {
    return (
      <div
        className="shadow-[#294d61] shadow-inner p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
        style={{
          width: '350px',
          height: '350px',
          backgroundColor: '#fff',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          margin: '10px 50px 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ marginBottom: '10px' }}>
          {props.phone}
        </p>
        <p style={{ marginBottom: '130px' }}>
          <a href={`mailto:${props.email}`} style={{ fontWeight: 'bold' }}>
            {props.email}
          </a>
        </p>
        <InnerCard text={props.text} />
      </div>
    );
  };
  
  const InnerCard = (props) => {
    return (
      <div
        className="bg-blue-200 shadow-md p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
        style={{
          width: '220px',
          height: '50px',
          backgroundColor: '#c3dafe',
          margin: '-300px   0.5px 0.5px 0.5px',
        }}
      >
        {props.text}
      </div>
    );
  };
export default AccountCard