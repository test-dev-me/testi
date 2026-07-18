function validationEmail(email) {
  const regex = /^[a-z][0-9]&/g;
  return email.test(regex);
}
