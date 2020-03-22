export const formatNumber = number => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

export const formatDate = value => {
  const date = new Date(value)

  return date.toLocaleString()
}
