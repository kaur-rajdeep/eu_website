import React from 'react';
import Image1 from 'C:/Users/USER/Downloads/WhatsApp Image 2023-11-09 at 3.12.56 PM (1).jpeg';
import Image2 from 'C:/Users/USER/Downloads/WhatsApp Image 2023-11-09 at 3.12.56 PM.jpeg';
import Image3 from 'C:/Users/USER/Downloads/WhatsApp Image 2023-11-09 at 3.12.57 PM.jpeg';

function GetInTouch() {
  const headingStyle = {
    background: 'rgba(235, 113, 52, 0.5)',
    fontSize: '34px',
    textAlign: 'center',
    padding: '20px 0',
    color: 'white',
  };

  const formContainerStyle = {
    background: 'rgba(235, 113, 52, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left', // Center align the content horizontally
    padding: '20 px',
    fontSize: '32px',
  };

  const imageContainerStyle = {
 
    display: 'flex',
    justifyContent: 'center', // Adjust as needed
    gap: '10px', // Adjust the spacing between images
    flexDirection: 'row', // Display images and text in a row
    alignItems: 'center', // Center-align items in the row
  };

  const imageStyle = {
   
    color: 'white',
    width: '50px', // Adjust the width as needed
    margin: '0 125px', // Adjust the margin on either side of each image
  };

  const textStyle = {
    color: 'white',
    fontSize: '10px',
    textAlign: 'center',
  };

  const inputStyle = {
    fontSize: '15px',
    width: '20%',
    margin: '10px 0',
  };

  const submitButtonStyle = {
    marginTop: '5px', // Add some top margin to separate from input fields
    textAlign: 'center',
    flexDirection: 'column',
    color: 'white',
    padding: '20px',
    fontSize: '32px',
  };

  return (
    <div>
      <div style={headingStyle}>Get in Touch</div>
      <div style={formContainerStyle}>
        <form>
          <div className="image-container" style={imageContainerStyle}>
            <div>
              <img src={Image1} alt="Image 1" style={imageStyle} />
              <p style={textStyle}>Baru Sahib, Distt, near Rajah, Himachal Pradesh 173101</p>
            </div>
            <div>
              <img src={Image2} alt="Image 2" style={imageStyle} />
              <p style={textStyle}>+91-9816400624</p>
            </div>
            <div>
              <img src={Image3} alt="Image 3" style={imageStyle} />
              <p style={textStyle}>contact@eternaluniversity.edu.in</p>
            </div>
          </div>

          <div>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              style={inputStyle}
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              style={inputStyle}
            />
          </div>
          <div>
            <input
              type="tel"
              id="contactNumber"
              placeholder="Enter your Contact Number"
              style={inputStyle}
            />
          </div>
          
          <div style={submitButtonStyle}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;