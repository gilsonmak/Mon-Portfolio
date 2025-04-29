import React from "react";
import "./style.css";
import {
  FaGithub,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

const ICON_MAPPING = {
  github: FaGithub,
  
};

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofils).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
          return (
            <li key={platform}>
              <a href={url}>
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
