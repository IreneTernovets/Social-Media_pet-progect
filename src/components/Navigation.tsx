/** @jsxImportSource @emotion/react */
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { navStyles, NavItem } from "../components/styled-components/StyledNav";

const Navigation = () => {
  return (
    <nav className="navigation" css={navStyles}>
      <ul>
        <NavItem to="/" label="Home">
          <HomeIcon />
        </NavItem>
        <NavItem to="/explore###" label="Explore">
          <TagIcon />
        </NavItem>
        <NavItem to="/not###" label="Notifications">
          <NotificationsIcon />
        </NavItem>
        <NavItem to="/mail###" label="Messages">
          <MailOutlineIcon />
        </NavItem>
        <NavItem to="/book###" label="Bookmarks">
          <BookmarkBorderIcon />
        </NavItem>
        <NavItem to="/list###" label="Lists">
          <ListAltIcon />
        </NavItem>
        <NavItem to="/profile###" label="Profile">
          <PersonOutlineIcon />
        </NavItem>
        <NavItem to="/more###" label="More">
          <PendingOutlinedIcon />
        </NavItem>
      </ul>
      <button className="navigation-tweet">Tweet</button>
    </nav>
  );
};

export default Navigation;
