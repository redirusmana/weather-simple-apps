import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  CSSReset,
  ThemeProvider,
  theme,
  Heading,
  Grid,
  GridItem,
  FormLabel,
  FormControl,
  Select,
  Box,
  Input,
  Button
} from "@chakra-ui/react";
import { FETCH_FORECAST_INDEX, FETCH_FORECAST_FILTER } from "../Actions/Types";
import { CLIENT_API_KEY } from "../Tools/general";
import { countryDropdown, perPageDropdown } from "../Tools/dropdown";
import { apiWeatherForecast } from "../Tools/action";

export const WeatherForecastFilter = props => {
  const [formValue, setFormValue] = useState({});
  const [filter, setFilter] = useState({
    q: "",
    id: "",
    zip: null,
    lat: "",
    lon: "",
    cnt: 10,
    lang: "id",
    units: "standard",
    appid: CLIENT_API_KEY
  });
  const handleChange = event => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = () => {
    props.setFilter({
      lat: formValue.lat,
      lon: formValue.lon,
      q: null,
      id: null
    });
    setFilter({ ...filter, q: "", id: "" });
  };
  const onSelectChange = event => {
    const { name, value } = event.target;
    if (name === "cnt") {
      setFilter({ ...filter, [name]: value });
      props.setFilter({ [name]: value });
    } else {
      setFilter({ ...filter, [name]: value, lat: "", lon: "" });
      setFormValue({ lat: "", lon: "" });
      props.setFilter({ [name]: value, lat: null, lon: null });
    }
  };

  const getForecastIndex = async () => {
    try {
      const response = await apiWeatherForecast(props.filters);
      const { data } = response;
      props.fetchDataSource(data);
    } catch (e) {
      console.log(e);
      props.fetchDataSource("");
    }
  };

  useEffect(() => {
    getForecastIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.filters]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box
          border
          borderRadius="lg"
          mx="5"
          spacing="8"
          p="1"
          rounded="lg"
          boxShadow="lg"
          bg="white"
        >
          <Heading size="lg" fontSize="20px" mt="4" ml="4">
            Filter Weather
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={4} px={0} m="5">
            <GridItem pr="10px">
              <FormControl>
                <FormLabel>City</FormLabel>
                <Select
                  bg="white"
                  id="q"
                  name="q"
                  onChange={onSelectChange}
                  placeholder="Choice Select"
                  borderWidth="1"
                  value={filter.q}
                  borderColor="gray.400"
                >
                  {countryDropdown.map((dropdown, index) => {
                    return (
                      <React.Fragment key={index}>
                        <option value={dropdown.name}>{dropdown.name}</option>
                      </React.Fragment>
                    );
                  })}
                </Select>
              </FormControl>
            </GridItem>

            <GridItem pr="10px">
              <FormControl>
                <FormLabel>Id</FormLabel>
                <Select
                  bg="white"
                  borderWidth="1"
                  borderColor="gray.400"
                  placeholder="Choice Select"
                  id="id"
                  name="id"
                  value={filter.id}
                  onChange={onSelectChange}
                >
                  {countryDropdown.map((dropdown, index) => {
                    return (
                      <React.Fragment key={index}>
                        <option
                          value={dropdown.id}
                        >{`${dropdown.id} - ${dropdown.name}`}</option>
                      </React.Fragment>
                    );
                  })}
                </Select>
              </FormControl>
            </GridItem>

            <GridItem pr="10px">
              <FormControl>
                <FormLabel>Zip</FormLabel>
                <Select bg="white" borderWidth="1" borderColor="gray.400">
                  <option>Not Found</option>
                </Select>
              </FormControl>
            </GridItem>
          </Grid>
        </Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={4} px={0} m="5">
          <GridItem pr="10px">
            <FormControl>
              <FormLabel>Longitude</FormLabel>
              <Input
                type="number"
                name="lon"
                onChange={handleChange}
                size="sm"
                borderRadius="5px"
                borderWidth="1"
                borderColor="gray.400"
                bg="white"
                value={formValue.lon}
              />
            </FormControl>
          </GridItem>
          <GridItem pr="10px">
            <FormControl>
              <FormLabel>Lattitude</FormLabel>
              <Input
                type="number"
                name="lat"
                onChange={handleChange}
                size="sm"
                borderRadius="5px"
                borderWidth="1"
                borderColor="gray.400"
                bg="white"
                value={formValue.lat}
              />
            </FormControl>
          </GridItem>
          <GridItem pr="10px">
            <FormControl pt="7">
              <Button type="button" colorScheme="blue" onClick={handleSubmit}>
                Search
              </Button>
            </FormControl>
          </GridItem>
          <GridItem colSpan="1" />
          <GridItem pr="10px">
            <FormControl>
              <FormLabel>Cnt</FormLabel>
              <Select
                bg="white"
                borderWidth="1"
                borderColor="gray.400"
                id="cnt"
                name="cnt"
                onChange={onSelectChange}
              >
                {perPageDropdown.map((dropdown, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={dropdown.value}>{dropdown.label}</option>
                    </React.Fragment>
                  );
                })}
              </Select>
            </FormControl>
          </GridItem>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({
  dataSource: state.forecasts.dataSource,
  filters: state.forecasts.filters
});

const mapDispatchToProps = dispatch => ({
  fetchDataSource: payload =>
    dispatch({
      type: FETCH_FORECAST_INDEX,
      payload
    }),
  setFilter: payload =>
    dispatch({
      type: FETCH_FORECAST_FILTER,
      payload
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherForecastFilter);
