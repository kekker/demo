import Heading from "../TextStyles/Heading";
import MenuLink from "./MenuLink";
import React from "react";

const menuObject = require('../../../content/asideNav.yml');

const SideMenu = ( { location }) => {
    const docsSections = menuObject.docs;
    const aboutSections = menuObject.about;
    const linkSections = location.pathname.includes('docs/') ?
        docsSections : aboutSections;
    return (
        <>
        {linkSections.map(section => (
                <>
                    <Heading textTransform={'uppercase'} textAlign={'left'} level={4}>{section.header}</Heading>
                    <MenuLink links={section.items}></MenuLink>
                </>
            ))}
        </>
    );
};

export default SideMenu;
