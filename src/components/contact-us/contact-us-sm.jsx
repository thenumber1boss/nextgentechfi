
  import React from "react";
  import "./contact-us-sm.css"

const ContactUsSm = ({ backgroundColorClass }) => {
  return (
    <div className={`contact-us-sm ${ backgroundColorClass }`} id="contactUs">
      <div className="frame">
        <div className="div">
          <div className="frame-2">
            <div className="text-wrapper">Contact us</div>
            <div className="text-wrapper-2">Become One Of Us</div>
          </div>
          <p className="for-enquiries">
            <span className="span">
              For enquiries, sponsorship, or partnership,
              <br />
              Email us at
            </span>
            <span className="text-wrapper-3">
              admin@nextgentechfi.com
              <br />
            </span>
            <span className="span">Or send us a message on WhatsApp with </span>
            <span className="text-wrapper-4">+2347019102780</span>
          </p>
        </div>
      </div>
    </div>
  );
};


  export default ContactUsSm;