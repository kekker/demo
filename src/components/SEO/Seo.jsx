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

  const { googleAnalyticsId } = site.siteMetadata;
  const metaDescription = description || site.siteMetadata.description;
  const mode = process.env.NODE_ENV;
  const netlifyDev = process.env.NETLIFY_DEV;
  const isDevelopment = mode === 'development' && netlifyDev;
  console.log(mode, netlifyDev, isDevelopment);

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
      ].concat(isDevelopment
          ? {
              name: `robots`,
              content: "noindex,nofollow",
          }
          : meta
      )}
    >
       Global site tag (gtag.js) - Google Analytics
      { !isDevelopment && (
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
