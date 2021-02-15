function _logErrors(error: Error, message: string = '') {
  // cONSOLE:  using console error is a sideEffect and will be flagged
  console.error('Error:', error.message, '\n', message);

  return error;
}

export { _logErrors };
