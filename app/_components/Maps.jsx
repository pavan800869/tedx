import React from 'react';

function Maps() {
  return (
    <div className='bg-black  w-[5em]'>
        <center>
    <div className="m-8 inline-block border-4 border-red-600 rounded-2xl p-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121814.33605303717!2d78.51668553831824!3d17.42627481904534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76730bf4dccf%3A0x2ca84b53416f0abd!2sAnurag%20University%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1732082743173!5m2!1sen!2sin"
        width="400"
        height="250"
        style={{ border: 0, borderRadius: "2xl" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Anurag University Map"
      ></iframe>
    </div>
    </center>   
    </div>
  );
}

export default Maps;
