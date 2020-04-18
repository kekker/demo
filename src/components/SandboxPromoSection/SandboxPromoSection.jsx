import React from "react";

import Heading from "../TextStyles/Heading";
import Text from "../TextStyles/Text";
import ButtonLink from "../Button";
import ContainerSection from "../ContainerSection";
import ContainerContent from "../ContainerContent";
import Flex from "../Flex";


const SandboxPromoSection = () => (
    <ContainerSection height={'unset'}>
        <hr style={{ marginBottom: 0}} />
        <ContainerContent pb={{_: 4, sm: 5}} pt={{_: 4, sm: 4}}>
            <Flex flexDirection="column" alignItems="center">
                <Heading
                    fontWeight={300}
                    mb={2}
                >
                    Sandbox
                </Heading>
                <Text
                    tag='div'
                    textAlign='center'
                    mb={3}
                >
                    We've prepared the Sandbox so that
                    {' '}
                    <span style={{fontWeight: 'bold'}}>
                        you can try out
                    </span>
                    {' '}
                    powerful features of Kekker Platform by yourself.
                </Text>
                <ButtonLink
                    fontSize='medium'
                    size='large'
                    isPrimary
                    to={'/invitation'}
                    title={'Get Access'}
                />
            </Flex>
        </ContainerContent>
        <hr style={{ marginBottom: 0}} />
    </ContainerSection>
);

export default SandboxPromoSection;
