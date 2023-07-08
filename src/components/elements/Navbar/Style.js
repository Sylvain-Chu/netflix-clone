import styled from 'styled-components';

export const Header = styled.header`
  background-color: transparent;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;

  &.nav_black {
    background-color: ${({theme}) => theme.colors.black};

    background-image: ${({theme}) => theme.colors.linearGradientBlackToLightBlack};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0 0.5rem 1rem;
`;

export const NavLinks = styled.ul`
  z-index: 99;
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled.li`
  text-align: -webkit-match-parent;
  margin-left: 18px;
`;

export const NavLinkText = styled.a`
  color: white;
  transition: color 0.4s;
`;

export const HoveredNavLinkText = styled(NavLinkText)`
  &:hover {
    color: #605f5e;
  }
`;

export const SecondaryNav = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  height: 100%;
  justify-content: flex-end;
  position: absolute;
  right: 4%;
  top: 0;
`;

export const Logo = styled.img`
  padding-left: 5px;
  width: 80px;
`;

export const Avatar = styled.img`
  margin-left: auto;
  width: 30px;
`;

export const NavElement = styled.div`
  margin-right: 15px;
`;

export const SearchBox = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  padding: 0 4%;
  position: relative;
  transition: background-color .4s;
  z-index: 2;
`;

export const SearchBoxInput = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  color: white;
`;

export const NavNotifications = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5em;
  line-height: 1;
  margin-top: .2em;
  padding: 2px 6px 3px;
  position: relative;
  color: white;
  cursor: pointer;
`;