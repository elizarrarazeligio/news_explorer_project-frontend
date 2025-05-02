export default class Api {
  _baseUrl!: string;
  _headers!: {};

  constructor({ baseUrl, headers }: { baseUrl: string; headers: {} }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _makeRequest(endpoint: string): Promise<any[]> {
    return fetch(`${this._baseUrl}${endpoint}`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) return res.json();
      return Promise.reject({ status: res.status, message: res.statusText });
    });
  }
}
