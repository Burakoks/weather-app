// BaseUrl
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "d4dbd406439d567485abdbaaa5c46db6";

// Kendisine dışarıdan verilen ülke kodu ile ilgili ülkenin bayrağını return eden fonksiyon
const getFlagUrl = (countryCode) =>
  `https://flagcdn.com/w80/${countryCode.toLocaleLowerCase()}.png`;

// * Hava durumu verilerini alan fonksiyon

const getWeather = async (city) => {
  try {
    // Api'a istek at
    const response = await fetch(
      `${baseUrl}?q=${city}&units=metric&appid=${apiKey}&lang=tr`
    );
    // Gelen veriyi js nesnesine çevir
    const weatherData = await response.json();

    // Eğer istek başarısız ise hata fırlat
    if (!response.ok) {
      throw new Error("Aratılan şehir bulunamadı");
    }

    // Elde edilen weatherData'yı return et
    return weatherData;
  } catch (error) {
    // Eğer olursa bir hata fırlat
    throw error;
  }
};

export { getWeather, getFlagUrl };