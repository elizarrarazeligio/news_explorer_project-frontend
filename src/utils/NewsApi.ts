import Api from "./Api";

class NewsApi extends Api {
  constructor({ baseUrl, headers }: { baseUrl: string; headers: {} }) {
    super({ baseUrl, headers });
  }

  searchNews(query: string): Promise<Object> {
    return super._makeRequest(`&q=${query}`);
  }
}

// Obtener fechas de búsqueda de noticias (desde - hasta)
let currentDate = new Date();
const toDate = currentDate.toISOString();
currentDate.setDate(currentDate.getDate() - 7);
const fromDate = currentDate.toISOString();

console.log(toDate, fromDate);

export const newsApi = new NewsApi({
  baseUrl: `https://newsapi.org/v2/everything?from=${fromDate}&to=${toDate}&sortBy=publishedAt&language=es`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
  },
});
