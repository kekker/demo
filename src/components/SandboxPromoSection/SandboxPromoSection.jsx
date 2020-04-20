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
                    mb={0}
                >
                    Sandbox
                </Heading>
                <Text
                    fontSize='15px'
                    textTransform='uppercase'
                    lineHeight='18px'
                    fontWeight='bold'
                    tag='div'
                    textAlign='center'
                    mb={4}
                    mt={3}
                >
                    We've prepared the Sandbox so that you can try out powerful features of Kekker Platform by yourself
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
        {/*<hr style={{ marginBottom: 0}} />*/}
    </ContainerSection>
);

export default SandboxPromoSection;
