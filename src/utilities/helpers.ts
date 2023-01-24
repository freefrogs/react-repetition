export const checkIfLoginValid = (val?: string | null) => {
  return val?.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i);
};

export const checkIfRepoNameValid = (val?: string | null) => {
  return val?.match(/^[a-z\d_\-.](?:[a-z\d_\-.]){0,99}$/i);
};
