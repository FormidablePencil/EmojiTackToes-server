import { validateInputs, handleValidationResponses } from "../logic/validateInputFormats"
import { registerResponses } from "../types"

const validationFormat = (req, res, next) => {
  const { password, username, email } = req.body
  const validationResponses = validateInputs({ password, username, email })
  const handledValidationRes = handleValidationResponses(validationResponses)
  if (Object.keys(handledValidationRes)[0]) return res.status(403).send({ message: registerResponses.incorrectFormat, payload: handledValidationRes })
  next()
}

export default validationFormat