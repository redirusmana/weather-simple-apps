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

export const WeatherSeveralRectangle = props => {
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

        <React.Fragment>
          <Box borderRadius="md" mx="5" pb="5">
            {props && props.dataRectangle ? (
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
                            <Th>Rain</Th>
                            <Th>Snow</Th>
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
                          </Tr>
                        </Thead>
                        <Tbody>
                          {props &&
                          props.dataRectangle &&
                          props.dataRectangle.list &&
                          Array.isArray(props.dataRectangle.list) &&
                          props.dataRectangle.list.length > 0
                            ? props.dataRectangle.list.map((li, index) => {
                                return (
                                  <Tr key={index}>
                                    <Td>{index + 1}</Td>
                                    <Td>{li.name || "-"}</Td>
                                    <Td>{li.rain || "-"}</Td>
                                    <Td>{li.snow || "-"}</Td>
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
                                    <Td>{li.clouds.today || "-"}</Td>
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
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({
  dataRectangle: state.severals.dataRectangle,
  filters: state.severals.filters
});
export default connect(mapStateToProps)(WeatherSeveralRectangle);
