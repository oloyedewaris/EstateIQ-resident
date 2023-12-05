export const handleBackendError = err => {
  if (typeof err !== 'object')
    return 'An unknown error occurred'
  const errors = Object.values(err)
  let errorsToDisplay = '';

  errors.forEach(error => {
    if (typeof error === 'string') {
      errorsToDisplay = `${errorsToDisplay} ${error}`
    }
    if (Array.isArray(error)) {
      const allErrors = error.join(', ')
      errorsToDisplay = `${errorsToDisplay} ${allErrors}`
    }
  })

  return errorsToDisplay;
}