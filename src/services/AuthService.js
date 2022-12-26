import $api from '../http';

export default class AuthService {
  static async login(email, password) {
    return $api.post('/login', {email, password});
  }
  static async registration(name, email, password, re_password) {
    return $api.post('/registration', {name,email, password, re_password});
  }
  static async logout() {
    return $api.delete('/logout');
  }
  
}
 