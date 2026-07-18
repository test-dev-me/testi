function validationEmail(email) {
  const regex = /^\w+\d+&/g;
  return email.test(regex);
}
