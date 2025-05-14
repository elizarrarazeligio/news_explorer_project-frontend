export default class Api {
  _baseUrl!: string;
  _headers!: {};

  constructor({ baseUrl, headers }: { baseUrl: string; headers: {} }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  async _makeRequest(endpoint: string, options?: RequestInit): Promise<any> {
    const res = await fetch(`${this._baseUrl}${endpoint}`, {
      method: options?.method || "GET",
      headers: {
        ...this._headers,
        ...(options?.headers || {}),
      },
      body: options?.body || null,
    });

    if (res.ok) return res.json();
    return await Promise.reject(await res.json());
  }
}
