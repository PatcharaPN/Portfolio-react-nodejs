import { Icon } from "@iconify/react/dist/iconify.js";
import Divider from "./Divider/Divider";
import "./Nav.scss";
import TextComponent from "./text-components/textcomponent";

const Nav = () => {
  return (
    <aside>
      <div className="nav-content">
        <div className="nav-item-profile">
          <div className="profile"></div>
          <p className="name">Profile name</p>
        </div>
        <div className="text-section">
          <TextComponent
            isObject={true}
            variableType="let"
            variable="Age"
            value={"22"}
          />
          <TextComponent
            isObject={true}
            variableType="let"
            variable="City"
            value={"Pathum Thani"}
          />
          <Divider />
          <TextComponent
            isObject={true}
            variableType="const"
            variable="Language"
            value={`"Thai,English"`}
          />
          <TextComponent
            isObject={true}
            variableType="const"
            variable="Education"
            value={"Bangkok U."}
          />
        </div>
        <div>
          <TextComponent
            isObject={false}
            variableType="const"
            variable="Tech stack"
          />
        </div>
        <div className="nav-item">
          <div>
            <Divider />
            <ul className="contact-list">
              <li>
                <Icon className="icon" icon="ri:linkedin-fill" />
              </li>
              <li>
                <Icon className="icon" icon="mdi:github" />
              </li>
              <li>
                <Icon className="icon" icon="mdi:instagram" />
              </li>
              <li>
                <Icon className="icon" icon="icon-park-outline:facebook" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Nav;
