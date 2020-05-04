import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({
  description, lang, meta, title
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const mode = process.env.NODE_ENV;
  const isProduction = mode === 'production';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
      ].concat(isProduction
          ? meta
          : {
            name: `robots`,
            content: "noindex,nofollow",
          }
      )}
    />
  );
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
