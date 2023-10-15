const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  if (term) {
    const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`);

    if (response.ok) {
      const data = await response.json();
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
      }

      return data;
    }
  }
};

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui
};
