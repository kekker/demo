import Heading from "../TextStyles/Heading";
import Text from "../TextStyles/Text";
import {Link} from "gatsby";
import React from "react";


const MenuLink = ({ location, link }) => {
    const arr = link.slice(1).split('/');
    console.log(arr);
    return (
        <Link to={link}>
            <Heading textAlign="left" level={4}>
                <Text
                    color="primaryText"
                    isHeadingFont
                    fontWeight="800"
                    textTransform="uppercase"
                >
                    {link}
                </Text>
            </Heading>
        </Link>
    );
};

export default MenuLink;
