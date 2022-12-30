export const toFormData = (fields) => {
  const formData = new FormData()

  for(const key of Object.keys(fields)) {
    formData.append(key, fields[key])
  }

  return formData

}
