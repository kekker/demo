export default locationPathname => {
  const locationPrefixes = locationPathname.slice(1).split('/');
  return locationPrefixes[locationPrefixes.length - 1]
    .replace('-', ' ')
    .replace('.html', '');
};
