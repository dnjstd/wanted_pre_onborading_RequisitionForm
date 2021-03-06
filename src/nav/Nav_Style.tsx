import styled from 'styled-components';
import media from 'styled-media-query';
import logo from '../assets/icon/capa_logo.png';
import divider from '../assets/icon/divider.png';
import menubar from '../assets/icon/menu_mobile.png';

export const Nav = styled.nav`
  width: 100%;
  padding: 25px 10px;
  color: #fff;
  background-color: rgba(21, 101, 192, 1);
  margin: 0 auto;

  ${media.lessThan('medium')`
    display: flex;
    padding: 16px 23px;
  `}
`;

export const MobileMenuIcon = styled.img.attrs({
  src: `${menubar}`,
})`
  width: 30px;
  display: none;
  margin-right: 19px;

  ${media.lessThan('medium')`
    display:block;
  `}
`;

export const NavList = styled.ul`
  display: flex;
  max-width: 1360px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  ${media.lessThan('medium')`
    width:100%;
  `}
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuList = styled.span`
  display: flex;
  margin-left: 10px;
  &:last-child {
    margin-left: 0;
  }

  ${media.lessThan('medium')`
    display:none;
  `}
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 153px;

  ${media.lessThan('medium')`
  width: 92px;
  `}
`;

export const DividerIcon = styled.img.attrs({
  src: `${divider}`,
})`
  width: 3px;
  margin: 0 32px;

  ${media.lessThan('medium')`
    display:none;
  `}
`;
