export function formatResponseToArray(obj) {
  return Object.keys(obj).map((key) => {
    return {
      key,
      value: obj[key]
    };
  })
}