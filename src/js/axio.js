import axios from 'axios';

const MY_API_KEY = '33373070-0a3de92214998aff69d545527';
const ENDPOINT = 'https://pixabay.com/api/?key=';

export default class ImgApi {
  constructor() {
    this.queryPage = 1;
    this.searchQuery = '';
    this.countImg = 0;
  }

  async AxioSearch() {
    const BASE_URL = 'https://pixabay.com/api/';

    const searchParams = new URLSearchParams({
      key: `33373070-0a3de92214998aff69d545527`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
    });

    const response = await axios.get(
      `${BASE_URL}?${searchParams}&q=${this.searchQuery}&page=${this.queryPage}`
    );

    this.incrementPage();
    return response.data;
  }

  resetPage() {
    this.queryPage = 1;
  }

  incrementPage() {
    this.queryPage += 1;
  }
}
