import React from 'react';

const AboutUs = () => {
  return (
    <div className="container" >
      <h1>About Us</h1>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne" style={{backgroundColor:"cyan"}}>
            <h5 className="mb-0">
            Travel Website
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              <h4> Welcome to Trip-a-holic app, your ultimate travel companion! We are passionate about bringing out the hodophilic side in you, making your adventures easy, enjoyable, and unforgettable.
                    We help you explore, decide and execute the trip plan which is best suitable for you.
                  At our core, we believe that a vacation has the power to bring the best out of a person and also bring people together and create lasting memories. </h4>
            </div>
          </div>
        </div>
        <div className="card" >
          <div className="card-header" id="headingTwo" style={{backgroundColor:"cyan"}}>
            <h5 className="mb-0">
             Address
            </h5>
          </div>
            <div className="card-body" >
            <ul>
                <li>123 Main Street</li>
                <li>City, State ZIP</li>
                
              </ul>
            </div>
          </div>
        <div className="card" >
          <div className="card-header" id="headingFour" style={{backgroundColor:"cyan"}}>
            <h5 className="mb-0">
              Contact Details
            </h5>
          </div>
            <div className="card-body">
            <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;