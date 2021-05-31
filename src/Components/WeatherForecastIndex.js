import React from "react";
import { connect } from "react-redux";
import {
  CSSReset,
  ThemeProvider,
  theme,
  Heading,
  Box,
  Center,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
  Flex
} from "@chakra-ui/react";

export const WeatherForecastIndex = props => {
  const { city, list } = props.dataSource;
  let temperature = "F";
  if (props.filters.units === "standard") {
    temperature = "°K";
  } else if (props.filters.units === "metric") {
    temperature = "°C";
  } else if (props.filters.units === "imperial") {
    temperature = "°F";
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box borderRadius="md" mx="5" py="1">
          {props && props.dataSource ? (
            <React.Fragment>
              <Flex mb="5">
                <Box
                  w="100%"
                  padding="5"
                  bg="white"
                  border
                  boxShadow="lg"
                  borderRadius="md"
                  fontSize="24"
                  mr="2"
                >
                  <Heading size="lg" fontSize="48px">
                    {city.name || "-"}
                  </Heading>
                  <Text fontSize="30px">Country {city.country || "-"}</Text>
                  <Text fontSize="28px">ID {city.id || "-"}</Text>
                </Box>

                <Box
                  w="100%"
                  padding="5"
                  bg="white"
                  border
                  ml="2"
                  boxShadow="lg"
                  borderRadius="md"
                  fontSize="24"
                >
                  <Text>Population : {city.population || "-"}</Text>
                  <Text>
                    Sunrise :{" "}
                    {city.sunrise
                      ? new Date(city.sunrise).toLocaleString("en-ID")
                      : "-"}
                  </Text>
                  <Text>
                    Sunset :{" "}
                    {city.sunset
                      ? new Date(city.sunset).toLocaleString("en-ID")
                      : "-"}
                  </Text>
                  <Text>
                    Timezone :{" "}
                    {city.timezone
                      ? new Date(city.timezone).toLocaleString("en-ID")
                      : "-"}
                  </Text>
                </Box>
              </Flex>

              <Flex>
                <Box
                  width="100%"
                  bg="white"
                  padding="5"
                  border
                  boxShadow="lg"
                  borderRadius="md"
                  fontSize="24"
                >
                  <Heading
                    fontWeight="bold"
                    fontStyle="italic"
                    fontSize="20px"
                    pb="2"
                  >
                    <Center>Information</Center>
                  </Heading>
                  <Box overflowX="auto">
                    <Table variant="simple" size="sm">
                      <Thead>
                        <Tr>
                          <Th>No</Th>
                          <Th textAlign="center" px="10">
                            Main Description
                          </Th>
                          <Th>Visibility</Th>
                          <Th>Clouds</Th>
                          <Th>temp</Th>
                          <Th>temp_kf</Th>
                          <Th>temp_max</Th>
                          <Th>temp_min</Th>
                          <Th px="10">deg</Th>
                          <Th px="10">gust</Th>
                          <Th px="10">speed</Th>
                          <Th>feels_like</Th>
                          <Th>grnd_level</Th>
                          <Th>humidity</Th>
                          <Th>pressure</Th>
                          <Th>sea_level</Th>
                          <Th>DT</Th>
                          <Th>DT TXT</Th>
                          <Th>Pop</Th>
                          <Th>Sys Pod</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {props && list && Array.isArray(list) && list.length > 0
                          ? list.map((li, index) => {
                              return (
                                <Tr key={index}>
                                  <Td>{index + 1}</Td>
                                  {/* {li.weather &&
                                  Array.isArray(li.weather) &&
                                  li.weather.length > 0
                                    ? li.weather.map(wt => {
                                        return (
                                          <React.Fragment key={wt.id}>
                                            <Td>{wt.main || "-"}</Td>

                                            <Td>
                                              <Text textAlign="center">
                                                <Image
                                                  margin="auto"
                                                  boxSize="50px"
                                                  src={`https://openweathermap.org/img/wn/${wt.icon}@2x.png`}
                                                  alt={`${wt.main}`}
                                                />
                                                {wt.description || "-"}{" "}
                                              </Text>
                                            </Td>
                                          </React.Fragment>
                                        );
                                      })
                                    : []} */}
                                  <Td>
                                    <Flex>
                                      {li.weather &&
                                      Array.isArray(li.weather) &&
                                      li.weather.length > 0
                                        ? li.weather.map(wt => {
                                            return (
                                              <React.Fragment key={wt.id}>
                                                <Box
                                                  textAlign="center"
                                                  mx="auto"
                                                >
                                                  <b>{wt.main || "-"}</b>
                                                  <Image
                                                    margin="auto"
                                                    boxSize="50px"
                                                    src={`https://openweathermap.org/img/wn/${wt.icon}@2x.png`}
                                                    alt={`${wt.main}`}
                                                  />
                                                  {wt.description || "-"}{" "}
                                                </Box>
                                              </React.Fragment>
                                            );
                                          })
                                        : []}
                                    </Flex>
                                  </Td>
                                  <Td>
                                    <i className="la la-eye" />{" "}
                                    {li.visibility || "-"}
                                  </Td>
                                  <Td>{li.clouds.all || "-"}</Td>
                                  <Td>
                                    {li.main.temp || "-"}
                                    {temperature}
                                  </Td>
                                  <Td>
                                    {li.main.temp_kf || "-"}
                                    {temperature}
                                  </Td>
                                  <Td>
                                    {li.main.temp_max || "-"}
                                    {temperature}
                                  </Td>
                                  <Td>
                                    {li.main.temp_min || "-"}
                                    {temperature}
                                  </Td>
                                  <Td textAlign="center">
                                    <i className="la la-water" />{" "}
                                    {li.wind.deg || "-"} %
                                  </Td>
                                  <Td textAlign="center">
                                    <i className="la la-wind" />{" "}
                                    {li.wind.speed || "-"} Mph
                                  </Td>
                                  <Td textAlign="center">
                                    <i className="la la-smog" />{" "}
                                    {li.wind.gust || "-"}
                                  </Td>
                                  <Td>
                                    {li.main.feels_like || "-"}
                                    {temperature}
                                  </Td>
                                  <Td>
                                    {li.main.grnd_level || "-"}
                                    {temperature}
                                  </Td>
                                  <Td>{li.main.humidity || "-"}%</Td>
                                  <Td>{li.main.pressure || "-"} in</Td>
                                  <Td>{li.main.sea_level || "-"}</Td>
                                  <Td>
                                    {li.dt
                                      ? new Date(li.dt).toLocaleString("en-ID")
                                      : "-"}
                                  </Td>
                                  <Td>
                                    {" "}
                                    {li.dt_txt
                                      ? new Date(li.dt_txt).toLocaleString(
                                          "en-ID"
                                        )
                                      : "-"}
                                  </Td>
                                  <Td>{li.pop || "-"}</Td>
                                  <Td> {li.sys.pod || "-"}</Td>
                                </Tr>
                              );
                            })
                          : []}
                      </Tbody>
                    </Table>
                  </Box>
                </Box>
              </Flex>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box m="auto" p="auto">
                <Center>
                  <Text>Not Found</Text>
                  {/* <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  /> */}
                </Center>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({
  dataSource: state.forecasts.dataSource,
  filters: state.forecasts.filters
});
export default connect(mapStateToProps)(WeatherForecastIndex);
