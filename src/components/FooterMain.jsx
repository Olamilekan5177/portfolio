import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedditAlien,
  faXTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Brand icons package

const FooterMain = () => {
return (
  <div className="footer bg-[#0a0416] text-white px-12 py-3 flex justify-center flex-col text-center">
    <div>
      <p>Designed and Developed by Adelalu wahab </p>
      <p className="pt-3">Copyright © 2025 SB</p>
    </div>
    <div className="flex space-x-7 justify-center pt-3">
      <div>
        <FontAwesomeIcon icon={faRedditAlien} />
      </div>
      <div>
        <FontAwesomeIcon icon={faXTwitter} />
      </div>
      <div>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <div>
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  </div>
);
};

export default FooterMain;
