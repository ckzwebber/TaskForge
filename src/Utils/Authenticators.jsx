const AuthenticateUsername = (username) => {
  return username?.toString().length >= 4;
};

const AuthenticatePassword = (password) => {
  return password?.toString().length >= 8;
};

export { AuthenticateUsername, AuthenticatePassword };
