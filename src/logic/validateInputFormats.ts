import * as EmailValidator from 'email-validator';
import passwordValidator from 'password-validator'
const validator = passwordValidator

export const validateInputs = ({ username, password, email }) => {
  let usernameValidated = validateUsernameFormat(username)
  let passwordValidated = validatePasswordFormat(password)
  let emailValidated = EmailValidator.validate(email); // true

  return {
    username: usernameValidated,
    password: passwordValidated,
    email: emailValidated
  }
}

const validateUsernameFormat = (username) => {
  var schema = new validator();
  schema
    .is().min(5)
    .is().max(12)
    .has().not().spaces()

  return schema.validate(username, { list: true })
}

const validatePasswordFormat = (password) => {
  var schema = new validator();
  schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().not().spaces()                           // Should not have spaces

  return schema.validate(password, { list: true })
}

export enum AuthValidationResponses {
  invalidEmailFormat = 'Must be a valid email address',
  invalidUsernameFormat = 'Username must be between 5 to 12 characters long and not contain spaces',
  invalidPasswordFormat = 'Password must be at least 8 character long, mixture of lower, uppercased letters, at least one digit and not contain spaces',
  invalidLoginCredentials = 'Invalid credentials'
}

export const handleValidationResponses = (res) => {
  let responses = {}
  if (res.email === false) responses['email'] = AuthValidationResponses.invalidEmailFormat
  if (typeof Object.values(res.password)[0] === 'string') responses['password'] = AuthValidationResponses.invalidPasswordFormat
  if (typeof Object.values(res.username)[0] === 'string') responses['username'] = AuthValidationResponses.invalidUsernameFormat
  return responses
}