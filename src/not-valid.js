export default (actionType, url) => {
  if (typeof actionType !== 'string') return true
  if (typeof url !== 'string') return true
  return false
}
