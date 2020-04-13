import navDocs from '../../content/docs/nav.yml';
import navAbout from '../../content/about/nav.yml';

const listDocsLinks = navDocs
  // .filter((item) => item.header !== 'API')
  .map(item => ({
    ...item,
    directory: 'docs',
  }));

const listAboutLinks = navAbout.map(item => ({
  ...item,
  directory: 'about',
}));

export { listDocsLinks, listAboutLinks };
