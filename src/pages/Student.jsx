import React from 'react';
// import Carousel from '../components/Carousel';
export default function Student() {
  const images = [
    { url: "https://th.bing.com/th/id/OIP.6af_KSwpOoj7pJWKX0yhIAHaFj?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "image1" },
    { url: "https://th.bing.com/th/id/OIP.LS0c-TEMqb5A4vI1MUTPlQHaDg?w=322&h=165&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: 'image2' },
    { url: "https://th.bing.com/th/id/OIP.yY-E-Mu1SHC02rwOHKC1XgHaDm?w=327&h=170&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "image3" },
    { url: "https://th.bing.com/th/id/OIP.V5VDHg7SwqbTACc3VjpYswHaFi?w=204&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: 'image4' },
];
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };
    return (
        <div className="mt-16">Student Zone: Will be made by Shweta Negi
        <div style={containerStyles}>
        <Carousel />
      </div>
        
        </div>
    );
}
