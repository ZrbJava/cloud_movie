
export default {
  baseURL: '',
  header: {},
  method: 'GET',
  dataType: 'json',
  responseType: 'text',
  custom: {},
  timeout: 30000,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300
  }
}
