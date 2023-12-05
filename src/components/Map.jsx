import React from 'react';

const Map = () => {
  return (
    <div className="map-container" style={{ marginLeft: '30px', marginTop: '-20px' }}>
      <br />
      <br />
      {/* Your Google Maps iframe goes here */}
      <iframe
        title="Google Maps"
        width="500"
        height="500"
        style={{ border: '0', marginLeft: '20px' }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.1474245742003!2d-122.41941678459717!3d37.77492997975304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1628164523218!5m2!1sen!2sus"
       
      ></iframe>
    </div>
  );
};

export default Map;
