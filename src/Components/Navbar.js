import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  Box,
  CSSReset,
  ThemeProvider,
  theme,
  Flex,
  Text,
  FormControl,
  Select,
  Link
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { CLIENT_API_KEY } from "../Tools/general";
import {
  FETCH_FILTER,
  FETCH_FORECAST_FILTER,
  FETCH_LOGOUT
} from "../Actions/Types";
import { langDropdown, unitsDropdown } from "../Tools/dropdown";
import { removeToken } from "../Tools/common";

const Navbar = props => {
  const [filter, setFilter] = useState({
    q: "Jakarta",
    id: 1642911,
    zip: null,
    lat: null,
    lon: null,
    lang: "id",
    units: "standard",
    appid: CLIENT_API_KEY
  });

  const onSelectChange = event => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
    props.setFilter({ [name]: value });
    props.setForecastFilter({ [name]: value });
  };

  const handleLogout = () => {
    removeToken();
    props.setLogout();
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <React.Fragment>
          <Flex
            bg="blue.600"
            w="100%"
            px={5}
            py={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text pl={3} py="2" color="white" fontWeight="bold">
                Weather Apps
              </Text>
            </Flex>
            <Box display="flex">
              {props.location.pathname !== "/login" && (
                <Link
                  m={2}
                  as={LinkRouter}
                  to="/current"
                  color="white"
                  fontWeight="bold"
                >
                  Current
                </Link>
              )}
              {props.location.pathname !== "/login" && (
                <Link
                  m={2}
                  as={LinkRouter}
                  to="/several/rectangle"
                  color="white"
                  fontWeight="bold"
                >
                  Several
                </Link>
              )}
              {props.location.pathname !== "/login" && (
                <Link
                  m={2}
                  as={LinkRouter}
                  to="/forecast"
                  color="white"
                  fontWeight="bold"
                >
                  Forecast
                </Link>
              )}
              {props.location.pathname !== "/login" && (
                <Link
                  m={2}
                  as={LinkRouter}
                  onClick={handleLogout}
                  color="white"
                  fontWeight="bold"
                >
                  Logout
                </Link>
              )}
            </Box>
          </Flex>

          <Flex
            w="100%"
            px={5}
            py={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex>
              <Box>
                {/* <Button colorScheme="blue" mr="5">
                  Rectangle
                </Button>
                <Button colorScheme="blue">Circle</Button> */}
              </Box>
            </Flex>
            <Flex>
              <Box display="flex">
                {props.location.pathname !== "/login" && (
                  <FormControl id="Format" pr="5">
                    <Select
                      border
                      id="units"
                      name="units"
                      onChange={onSelectChange}
                    >
                      {unitsDropdown.map((dropdown, index) => {
                        return (
                          <React.Fragment key={index}>
                            <option value={dropdown.value}>
                              {dropdown.label}
                            </option>
                          </React.Fragment>
                        );
                      })}
                    </Select>
                  </FormControl>
                )}

                {props.location.pathname !== "/login" && (
                  <FormControl id="Format">
                    <Select
                      border
                      id="lang"
                      name="lang"
                      onChange={onSelectChange}
                    >
                      {langDropdown.map((dropdown, index) => {
                        return (
                          <React.Fragment key={index}>
                            <option value={dropdown.value}>
                              {dropdown.label}
                            </option>
                          </React.Fragment>
                        );
                      })}
                    </Select>
                  </FormControl>
                )}
              </Box>
            </Flex>
          </Flex>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};
const mapStateToProps = state => ({
  dataSource: state.currents.dataSource,
  filters: state.currents.filters
});

const mapDispatchToProps = dispatch => ({
  setFilter: payload =>
    dispatch({
      type: FETCH_FILTER,
      payload
    }),
  setForecastFilter: payload =>
    dispatch({
      type: FETCH_FORECAST_FILTER,
      payload
    }),
  setLogout: payload =>
    dispatch({
      type: FETCH_LOGOUT,
      payload
    })
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
