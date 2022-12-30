import $api from '../http';

export default class AuthService {
  static async login(data) {
    return $api.post('/login', data);
  }
  static async registration(data) {
    return $api.post('/registration', data);
  }
  static async logout() {
    return $api.delete('/logout');
  }
}
 