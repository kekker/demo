import Heading from "../TextStyles/Heading";
import MenuLink from "./MenuLink";
import React from "react";
import styled from "styled-components";

import HeaderBullet from '../../../static/assets/kekker_menu_bullet.svg';

const menuObject = require('../../../content/asideNav.yml');

const MenuHeader = styled(Heading)`
    position: relative;
    
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: -12px;
        left: -34px;
        width: 40px;
        background-size: 40px 40px;
        height: 40px;
        background-image: url(${HeaderBullet});
    }
`;

const SideMenu = ( { location }) => {
    const docsSections = menuObject.docs;
    const aboutSections = menuObject.about;
    const linkSections = location.includes('docs/') ?
        docsSections : aboutSections;
    return (
        <>
            {linkSections.map(section => (
                    <React.Fragment key={section.header}>
                        <MenuHeader mb={3} textTransform={'uppercase'} textAlign={'left'} level={4}>{section.header}</MenuHeader>
                        <MenuLink links={section.items} />
                    </React.Fragment>
                ))}
        </>
    );
};

export default SideMenu;
