import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import {
  CSSReset,
  ThemeProvider,
  theme,
  Grid,
  GridItem,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
  Box
} from "@chakra-ui/react";
import { FETCH_SEVERAL_FILTER, FETCH_SEVERAL_CIRCLE } from "../Actions/Types";
import { apiWeatherSeveralCirc } from "../Tools/action";
import { perPageDropdown } from "../Tools/dropdown";

export const WeatherSeveralFilterCirc = props => {
  const [formValue, setFormValue] = useState({
    lat: "",
    lon: "",
    cnt: 10
  });
  const onSelectChange = event => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
    props.setFilter({ [name]: value });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = () => {
    props.setFilter({
      lat: formValue.lat,
      lon: formValue.lon,
      cnt: formValue.cnt
    });
  };
  const getSeveralIndex = async () => {
    try {
      const { bbox, ...newFilters } = props.filters;
      const response = await apiWeatherSeveralCirc({ ...newFilters });
      const { data } = response;
      props.fetchDataCircle(data);
    } catch (e) {
      props.fetchDataCircle();
      console.log(e);
    }
  };

  useEffect(() => {
    getSeveralIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.filters]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box mx="5" mb="5">
          <Button
            colorScheme="blue"
            variant="outline"
            mr="5"
            as={LinkRouter}
            to="/several/rectangle"
          >
            Rectangle
          </Button>
          <Button colorScheme="blue">Circle</Button>
        </Box>
        <Grid templateColumns="repeat(6, 1fr)" gap={4} px={0} mx="5" mb="5">
          <GridItem pr="10px">
            <FormControl>
              <FormLabel>Longitudinal</FormLabel>
              <Input
                type="number"
                name="lat"
                onChange={handleChange}
                size="sm"
                value={formValue.lat}
                borderRadius="5px"
                borderWidth="1"
                borderColor="gray.400"
                bg="white"
              />
            </FormControl>
          </GridItem>
          <GridItem pr="10px">
            <FormControl>
              <FormLabel>lattitude</FormLabel>
              <Input
                type="number"
                name="lon"
                onChange={handleChange}
                size="sm"
                borderRadius="5px"
                borderWidth="1"
                borderColor="gray.400"
                value={formValue.lon}
                bg="white"
              />
            </FormControl>
          </GridItem>
          <GridItem pr="10px">
            <FormControl pt="7">
              <Button
                isFullWidth
                type="button"
                colorScheme="blue"
                onClick={handleSubmit}
              >
                Search
              </Button>
            </FormControl>
          </GridItem>{" "}
          <GridItem colSpan="2" />
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
  dataCircle: state.severals.dataCircle,
  filters: state.severals.filters
});

const mapDispatchToProps = dispatch => ({
  fetchDataCircle: payload =>
    dispatch({
      type: FETCH_SEVERAL_CIRCLE,
      payload
    }),
  setFilter: payload =>
    dispatch({
      type: FETCH_SEVERAL_FILTER,
      payload
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherSeveralFilterCirc);
