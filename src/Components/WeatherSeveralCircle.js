import React from "react";
import { connect } from "react-redux";
import {
  CSSReset,
  ThemeProvider,
  theme,
  Heading,
  Box,
  Center,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
  Flex,
  Text
} from "@chakra-ui/react";

export const WeatherSeveralCircle = props => {
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

        <Box borderRadius="md" mx="5" pb="5">
          {props && props.dataCircle ? (
            <React.Fragment>
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
                          <Th>Name</Th>
                          {/* <Th>Rain</Th>
                          <Th>Snow</Th> */}
                          <Th textAlign="center" px="10">
                            Main Description
                          </Th>
                          <Th>Clouds</Th>
                          <Th>DT</Th>
                          <Th>Id</Th>
                          <Th>Lat</Th>
                          <Th>Lon</Th>
                          <Th>Visibility</Th>
                          <Th>temp</Th>
                          <Th>temp_max</Th>
                          <Th>temp_min</Th>
                          <Th px="10">deg</Th>
                          <Th px="10">speed</Th>
                          <Th px="10">gust</Th>
                          <Th>feels_like</Th>
                          <Th>humidity</Th>
                          <Th>pressure</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {props &&
                        props.dataCircle &&
                        props.dataCircle.list &&
                        Array.isArray(props.dataCircle.list) &&
                        props.dataCircle.list.length > 0
                          ? props.dataCircle.list.map((li, index) => {
                              return (
                                <Tr key={index}>
                                  <Td>{index + 1}</Td>
                                  <Td>{li.name || "-"}</Td>
                                  {/* <Td>{li.rain || "-"}</Td>
                                  <Td>{li.snow || "-"}</Td> */}
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
                                  <Td>{li.clouds.today || "-"}</Td>
                                  <Td>{li.dt || "-"}</Td>
                                  <Td>{li.id || "-"}</Td>
                                  <Td>{li.coord.lat || "-"}</Td>
                                  <Td>{li.coord.lon || "-"}</Td>
                                  <Td>
                                    <i className="la la-eye" />{" "}
                                    {li.visibility || "-"}
                                  </Td>
                                  <Td>
                                    {li.main.temp || "-"}
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
                                  <Td>{li.main.humidity || "-"}%</Td>
                                  <Td>{li.main.pressure || "-"} in</Td>
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
  dataCircle: state.severals.dataCircle,
  filters: state.severals.filters
});
export default connect(mapStateToProps)(WeatherSeveralCircle);
