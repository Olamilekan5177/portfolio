// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faRedditAlien,
//   faXTwitter,
//   faLinkedinIn,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// const FooterMain = () => {
//   return (
//     <div className="footer bg-[#0a0416] text-white px-12 py-3 flex justify-center flex-col text-center absolute left-0 w-full -bottom-[113rem] sm-md:-bottom-[108rem] sm-3:-bottom-[90rem] sm-3:-bottom-[96rem] sm-4:-bottom-[95rem]  sm-5:-bottom-[95rem] md:-bottom-[93rem]  sm-2:-bottom-[95rem]">
//       <div>
//         <p>Designed and Developed by Adelalu Wahab</p>
//         <p className="pt-3">Copyright © 2025 SB</p>
//       </div>
//       <div className="flex space-x-7 justify-center pt-3">
//         <FontAwesomeIcon icon={faRedditAlien} />
//         <FontAwesomeIcon icon={faXTwitter} />
//         <FontAwesomeIcon icon={faLinkedinIn} />
//         <FontAwesomeIcon icon={faInstagram} />
//       </div>
//     </div>
//   );
// };

// export default FooterMain;
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedditAlien,
  faXTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterMain = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div className="footer bg-[#0a0416] text-white px-12 py-3 flex justify-center flex-col text-center absolute left-0 w-full sm-md:-bottom-[108rem] sm-3:-bottom-[95rem] sm-4:-bottom-[95rem] sm-5:-bottom-[95rem] mid-md-lg:-bottom-[99rem] md:-bottom-[99rem] sm-6:-bottom-[93rem] sm-2:-bottom-[95rem] sm-7:-bottom-[93rem] sm-9:-bottom-[95rem]">
    <div className="footer bg-[#0a0416] text-white px-12 py-3 flex justify-center flex-col text-center absolute left-0 w-full ">
      <div>
        <p>Designed and Developed by Adelalu Wahab</p>
        <p className="pt-3">Copyright © 2025 SB</p>
      </div>
      <div className="flex space-x-7 justify-center pt-3">
        <FontAwesomeIcon icon={faRedditAlien} />
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>

      {/* Screen Size Display */}
      <div className="fixed bottom-5 right-5 bg-gray-800 text-white p-2 rounded text-sm mb-48">
        Width: {screenSize.width}px | Height: {screenSize.height}px
      </div>
    </div>
  );
};

export default FooterMain;
