export const shorten = (str, n) => `${(str.match(RegExp(`.{${n}}\\S*`)) || [str])[0]}...`;
