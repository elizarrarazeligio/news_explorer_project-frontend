import Api from "./Api";

class NewsApi extends Api {
  _fromDate: string;
  _toDate: string;

  constructor(
    { baseUrl, headers }: { baseUrl: string; headers: {} },
    fromDate: string,
    toDate: string
  ) {
    super({ baseUrl, headers });
    this._fromDate = fromDate;
    this._toDate = toDate;
  }

  searchNews(query: string): Promise<Object> {
    return super._makeRequest(
      `/everything?from=${this._fromDate}&to=${this._toDate}&sortBy=publishedAt&language=es&q=${query}`
    );
  }
}

// Obtener fechas de búsqueda de noticias (desde - hasta)
const currentDate = new Date();
const toDate = currentDate.toISOString();
currentDate.setDate(currentDate.getDate() - 7);
const fromDate = currentDate.toISOString();

export const newsApi = new NewsApi(
  {
    baseUrl: "https://newsapi.org/v2",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
    },
  },
  fromDate,
  toDate
);
