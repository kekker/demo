export default (str, n) => `${(str.match(RegExp(`.{${n}}\\S*`)) || [str])[0]}...`;
