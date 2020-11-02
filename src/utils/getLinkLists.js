import navDocs from '../../content/docs/nav.yml';
import navAbout from '../../content/about/nav.yml';
import navBenefits from '../../content/benefits/nav.yml';

const listDocsLinks = navDocs.map(item => ({
  ...item,
  directory: 'docs',
}));

const listAboutLinks = navAbout.map(item => ({
  ...item,
  directory: 'about',
}));

const listBenefitsLinks = navBenefits.map(item => ({
  ...item,
  directory: 'benefits',
}));

export { listDocsLinks, listAboutLinks, listBenefitsLinks };
