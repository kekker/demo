import {Link} from "gatsby";
import React from "react";

import Flex from "../Flex";
import Text from "../TextStyles/Text";



const MarkdownFooter = ({ next, prev }) => (
    <Flex mt={6}>
      {prev && (
        <>
          <Flex
              flexGrow={1}
              alignItems='flex-start'
              flexDirection='column'
          >
            <div style={{textAlign: 'end'}}>
              <Text mb={2} tag={'p'}>Previous Page</Text>
              <Link to={prev.to} rel="prev">
                ←
                {' '}
                {prev.title}
              </Link>
            </div>
          </Flex>
        </>
      )}
      {next && (
        <>
          <Flex flexDirection='column'>
            <div>
              <Text mb={2} tag={'p'}>Next Page</Text>
              <Link to={next.to} rel="next">
                {next.title}
                {' '}
                →
              </Link>
            </div>
          </Flex>
        </>
      )}
    </Flex>
);

export default MarkdownFooter;

