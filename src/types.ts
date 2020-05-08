export enum serverResponses {
  userExists = 'user already exists',
  loggedInSentTokens = 'here are a few tokens',
  tokenNotGiven = 'token not given',
  tokenNonExistent = 'token does not exist'
}

export enum registerResponses {
  usernameExists = 'account by that username exists',
  emailExists = 'account by that email exists',
  incorrectFormat = 'incorrect format',
  successfullyCreatedUser = 'successfully registered'
}

export enum loginResponses {
  invalidCredentials = 'Invalid credentials'
}

export enum tokenResponses {
  invalidToken = 'invalid token'
}

export enum gameResponses {
  GameByIdDoesNotExist = 'game by id does',
  heresGameData = 'here is the game data',
  createNewGame = 'created new game',
  deletedGame = 'successfully Deleted Game'
}