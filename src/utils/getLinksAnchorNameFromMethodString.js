export default (methodString) => {
  const [method, link] = methodString.split(' ');
  return link
    .replace(/[/{}]/g, '')
    .replace('api', method)
    .toLowerCase();
};
