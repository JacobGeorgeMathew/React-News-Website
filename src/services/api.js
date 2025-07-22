const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
const BASE_URL = "https://finnhub.io/api/v1"; // Added 'const'

export async function fetchMarketNews() {
  try {
    const response = await fetch(`${BASE_URL}/news?category=general&token=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching market news:', error);
    throw error;
  }
}