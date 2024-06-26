var timer = null;

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();
    if (expiresIn <= 0) {
      return;
    }

    timer = setTimeout(() => context.dispatch('autoLogout'), expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
      });
    }
  },

  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.remove('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },

  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  },

  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },

  async auth(context, payload) {
    const mode = payload.mode;

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVHh7VCOA_MxhpN-nIAT8abHOtqTPPorI';
    if (mode === 'signup') {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVHh7VCOA_MxhpN-nIAT8abHOtqTPPorI';
    }

    const response = await fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      });

    const resData = await response.json();

    if (!response.ok) {
      console.log(resData);
      const error = new Error(resData.message || 'Failed to authenticate user');
      throw error;
    }

    const expiresIn = +resData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', resData.idToken);
    localStorage.setItem('userId', resData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: resData.idToken,
      userId: resData.localId,
    })
  }
}
