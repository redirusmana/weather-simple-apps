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
  Image,
  Flex
  // Spinner
} from "@chakra-ui/react";

export const WeatherCurrentIndex = props => {
  const {
    base,
    clouds,
    cod,
    coord,
    dt,
    id,
    main,
    name,
    sys,
    timezone,
    visibility,
    weather,
    wind
  } = props.dataSource;

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
                  flex="1"
                  padding="5"
                  bg="white"
                  border
                  boxShadow="lg"
                  borderRadius="md"
                >
                  <Heading fontWeight="bold" fontSize="36px">
                    {name || "-"}
                  </Heading>
                  <Flex
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    py="0"
                    my="0"
                  >
                    <Box>
                      <Text fontSize="86px" fontWeight="bold">
                        {main.temp || "-"}
                        {temperature}
                      </Text>
                    </Box>
                    <Box>
                      {weather.length > 0
                        ? weather.map(wt => {
                            return (
                              <React.Fragment key={wt.id}>
                                <Center>
                                  <Text fontSize="20px" fontWeight="bold">
                                    Clouds
                                  </Text>
                                </Center>
                                <Center>
                                  <Text>
                                    <Image
                                      boxSize="100px"
                                      borderRadius="full"
                                      src={`https://openweathermap.org/img/wn/${wt.icon}@2x.png`}
                                      alt={`${wt.main}`}
                                    />
                                  </Text>
                                </Center>
                                <Center>
                                  <Text fontSize="20px" fontWeight="bold">
                                    {wt.description || "-"}
                                  </Text>
                                </Center>
                              </React.Fragment>
                            );
                          })
                        : []}
                    </Box>
                  </Flex>
                </Box>

                <Box
                  padding="5"
                  ml="5"
                  bg="white"
                  border
                  boxShadow="lg"
                  borderRadius="md"
                  fontSize="24"
                >
                  <Text fontWeight="bold" fontSize="36px">
                    <i className="la la-water" /> {wind.deg || "-"} %
                  </Text>

                  <Text fontWeight="bold" fontSize="36px">
                    <i className="la la-wind" /> {wind.speed || "-"} mph
                  </Text>
                  {wind.gust ? (
                    <Text fontWeight="bold" fontSize="36px">
                      <i className="la la-smog" /> {wind.gust}
                    </Text>
                  ) : (
                    ""
                  )}
                </Box>
              </Flex>

              <Flex mb="5">
                <Box
                  w="100%"
                  padding="5"
                  bg="white"
                  mr="5"
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
                    Main Information
                  </Heading>
                  <Text fontSize="16px">
                    Feels Like : {main.feels_like || "-"}
                    {temperature}{" "}
                  </Text>
                  <Text fontSize="16px">
                    Grnd Level : {main.grnd_level || "-"}{" "}
                  </Text>
                  <Text fontSize="16px">
                    Humidity : {main.humidity || "-"}%{" "}
                  </Text>
                  <Text fontSize="16px">
                    Pressure : {main.pressure || "-"} in{" "}
                  </Text>
                  <Text fontSize="16px">
                    Sea Level : {main.sea_level || "-"}{" "}
                  </Text>
                  <Text fontSize="16px">
                    Temp : {`${main.temp}` || "-"}
                    {temperature}{" "}
                  </Text>
                  <Text fontSize="16px">
                    Temp Max : {`${main.temp_max}` || "-"}
                    {temperature}{" "}
                  </Text>
                  <Text fontSize="16px">
                    Temp Min : {`${main.temp_min}` || "-"}
                    {temperature}{" "}
                  </Text>
                </Box>

                <Box
                  w="100%"
                  padding="5"
                  mr="5"
                  bg="white"
                  border
                  boxShadow="lg"
                  borderRadius="md"
                  fontSize="24"
                >
                  <Heading
                    fontWeight="bold"
                    fontSize="20px"
                    pb="2"
                    fontStyle="italic"
                  >
                    System
                  </Heading>
                  <Text fontSize="16px">Country : {sys.country || "-"}</Text>
                  <Text fontSize="16px">
                    Sunrise :{" "}
                    {sys.sunrise ? new Date(sys.sunrise).toLocaleString() : "-"}
                  </Text>
                  <Text fontSize="16px">
                    Sunset :{" "}
                    {sys.sunset ? new Date(sys.sunset).toLocaleString() : "-"}
                  </Text>
                  <Text fontSize="16px">
                    Longitudinal : {coord.lon || "-"}{" "}
                  </Text>
                  <Text fontSize="16px">lattitude : {coord.lat || "-"} </Text>
                </Box>

                <Box
                  w="100%"
                  padding="5"
                  bg="white"
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
                    Others
                  </Heading>
                  <Text fontSize="16px">Base : {base || "-"}</Text>
                  <Text fontSize="16px">ID : {id || "-"}</Text>
                  <Text fontSize="16px">Clouds : {clouds.all || "-"}</Text>
                  <Text fontSize="16px">Cod : {cod || "-"}</Text>
                  <Text fontSize="16px">
                    DT : {dt ? new Date(dt).toLocaleString() : "-"}
                  </Text>
                  <Text fontSize="16px">
                    Timezone :
                    {timezone ? new Date(timezone).toLocaleString() : "-"} mi
                  </Text>
                  <Text fontSize="16px">
                    visibility : <i className="la la-eye" /> {visibility || "-"}
                  </Text>
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
  dataSource: state.currents.dataSource,
  filters: state.currents.filters
});
export default connect(mapStateToProps)(WeatherCurrentIndex);
