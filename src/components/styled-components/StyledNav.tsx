/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";

const navStyles = css`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 0;
    width: 100px;
  }

  li {
    display: flex;
    align-items: center;
  }

  .active {
    font-weight: bold;
    color: #1da1f2;
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  color: inherit;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: #1da1f2;
  }

  &.active {
    color: #1da1f2;
  }
`;

const StyledTwitterIcon = styled(TwitterIcon)`
  font-size: 2rem;
`;

interface NavItemProps {
  to: string;
  label: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, children }) => (
  <li>
    <StyledNavLink to={to}>
      <IconWrapper>{children}</IconWrapper>
      {label}
    </StyledNavLink>
  </li>
);

export { navStyles, NavItem, StyledTwitterIcon };
