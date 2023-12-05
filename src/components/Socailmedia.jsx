import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import QuizIcon from "@mui/icons-material/Quiz";
const Socailmedia = () => {
  return (
    <>
      <div className="backdrop-blur-lg fixed top-[250px] z-10 sticky-navbar rounded-lg hidden md:block">
        <div className="rounded-full">
          <a
            href="https://www.facebook.com/eternaluni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ fontSize: 50 }} />
          </a>
        </div>
        <div className="rounded-full">
          <a
            href="https://www.linkedin.com/school/eternal-university-baru-sahib-sirmour"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ fontSize: 50 }} />
          </a>
        </div>
        <div className="rounded-full">
          <a
            href="https://www.youtube.com/channel/UC1EGvUDVNjJbS_AGtMKVv1w/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon sx={{ fontSize: 50 }} />
          </a>
        </div>
        <div className="rounded-full">
          <a
            href="https://twitter.com/Eternal_Univ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon sx={{ fontSize: 50 }} />
          </a>
        </div>
        <div className="rounded-full">
          <a href="#get" rel="noopener noreferrer">
            <QuizIcon sx={{ fontSize: 50 }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Socailmedia;
