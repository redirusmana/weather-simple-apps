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
  Box
} from "@chakra-ui/react";
import {
  FETCH_SEVERAL_RECTANGLE,
  FETCH_SEVERAL_FILTER
} from "../Actions/Types";
import { apiWeatherSeveralRect } from "../Tools/action";

export const WeatherSeveralFilterRect = props => {
  const [formValue, setFormValue] = useState({
    lonLeft: "",
    latBot: "",
    lonRight: "",
    latTop: "",
    zoom: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = () => {
    const newFilter = `${formValue.lonLeft},${formValue.latBot},${formValue.lonRight},${formValue.latTop},${formValue.zoom}`;
    props.setFilter({ bbox: newFilter });
  };
  const getSeveralIndex = async () => {
    try {
      const { lat, lon, cnt, ...newFilters } = props.filters;
      const response = await apiWeatherSeveralRect({ ...newFilters });
      const { data } = response;
      props.fetchDataRectangle(data);
    } catch (e) {
      props.fetchDataRectangle();
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
          <Button colorScheme="blue" mr="5">
            Rectangle
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            as={LinkRouter}
            to="/several/circle"
          >
            Circle
          </Button>
        </Box>
        <Grid templateColumns="repeat(6, 1fr)" gap={4} px={0} mx="5" mb="5">
          <GridItem pr="10px">
            <FormControl>
              <FormLabel>Longitudinal Left</FormLabel>
              <Input
                type="number"
                name="lonLeft"
                onChange={handleChange}
                size="sm"
                value={formValue.lonLeft}
                borderRadius="5px"
                borderWidth="1"
                borderColor="gray.400"
                bg="white"
              />
            </FormControl>
          </GridItem>
          <GridItem pr="10px">
            <FormControl>
              <FormLabel>lattitude Bottom </FormLabel>
              <Input
                type="number"
                name="latBot"
                onChange={handleChange}
                size="sm"
                borderRadius="5px"
                borderWidth="1"
                borderColor="gray.400"
                value={formValue.latBot}
                bg="white"
              />
            </FormControl>
          </GridItem>
          <GridItem pr="10px">
            <FormControl>
              <FormLabel>Longitudinal Right</FormLabel>
              <Input
                type="number"
                name="lonRight"
                onChange={handleChange}
                size="sm"
                borderRadius="5px"
                borderWidth="1"
                value={formValue.lonRight}
                borderColor="gray.400"
                bg="white"
              />
            </FormControl>
          </GridItem>
          <GridItem pr="10px">
            <FormControl>
              <FormLabel>lattitude Top </FormLabel>
              <Input
                type="number"
                name="latTop"
                onChange={handleChange}
                size="sm"
                value={formValue.latTop}
                borderRadius="5px"
                borderWidth="1"
                borderColor="gray.400"
                bg="white"
              />
            </FormControl>
          </GridItem>
          <GridItem pr="10px">
            <FormControl>
              <FormLabel>Zoom</FormLabel>
              <Input
                type="number"
                value={formValue.zoom}
                name="zoom"
                onChange={handleChange}
                size="sm"
                borderRadius="5px"
                borderWidth="1"
                borderColor="gray.400"
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
          </GridItem>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({
  dataRectangle: state.severals.dataRectangle,
  filters: state.severals.filters
});

const mapDispatchToProps = dispatch => ({
  fetchDataRectangle: payload =>
    dispatch({
      type: FETCH_SEVERAL_RECTANGLE,
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
)(WeatherSeveralFilterRect);
