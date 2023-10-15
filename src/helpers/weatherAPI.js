const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  if (term) {
    const response = await fetch(`
    api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`);
    const data = response.json();
    return data;
  }
  // if (data.length === 0) {
  //   window.alert('Nenhuma cidade encontrada');
  // }
  //   seu código aqui
};

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui
};
