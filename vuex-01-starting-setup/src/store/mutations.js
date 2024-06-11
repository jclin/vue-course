function login(state) {
  state.isLoggedIn = true;
}

function logout(state) {
  state.isLoggedIn = false;
}

export default {
  login,
  logout
};