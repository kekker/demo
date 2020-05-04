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
            googleAnalyticsId
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const mode = process.env.NODE_ENV;
  const context = process.env.CONTEXT;
  const isProduction = mode === 'production' &&
                                context &&
                                context === 'production';
  const { googleAnalyticsId } = site.siteMetadata;

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
    >
       Global site tag (gtag.js) - Google Analytics
      { isProduction && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}></script>
          <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${googleAnalyticsId});

            gtag('config', 'UA-67086519-3');
          `}
          </script>
        </>
        )
      }

    </Helmet>
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
