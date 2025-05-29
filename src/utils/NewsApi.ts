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
      `&from=${this._fromDate}&to=${this._toDate}&language=es&sortBy=publishedAt&q=${query}`
    );
  }
}

// Obtener fechas de búsqueda de noticias (desde - hasta)
const currentDate = new Date();
const toDate = currentDate.toISOString();
currentDate.setDate(currentDate.getDate() - 7);
const fromDate = currentDate.toISOString();

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_NEWS_API_PROXY_URL
    : process.env.NEXT_PUBLIC_NEWS_API_URL;

export const newsApi = new NewsApi(
  {
    baseUrl: `${baseUrl}/everything?apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
    },
  },
  fromDate,
  toDate
);
