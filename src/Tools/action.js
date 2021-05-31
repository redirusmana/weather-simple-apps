import { apiGet } from "./api";

export const apiWeatherIndex = "/weather";
export const apiWeatherGet = params => {
  const url = `${apiWeatherIndex}`;
  return apiGet(url, { params });
};

export const apiWeatherSeveralCircIndex = "/find";
export const apiWeatherSeveralRectIndex = "/box/city";
export const apiWeatherSeveralRect = params => {
  const url = `${apiWeatherSeveralRectIndex}`;
  return apiGet(url, { params });
};
export const apiWeatherSeveralCirc = params => {
  const url = `${apiWeatherSeveralCircIndex}`;
  return apiGet(url, { params });
};

export const apiWeatherForecastIndex = "/forecast";
export const apiWeatherForecast = params => {
  const url = `${apiWeatherForecastIndex}`;
  return apiGet(url, { params });
};
