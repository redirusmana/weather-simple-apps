import React, { useState } from "react";
// import { Link as LinkRouter } from "react-router-dom";
import {
  Box,
  CSSReset,
  Heading,
  ThemeProvider,
  theme,
  FormControl,
  FormLabel,
  Input,
  Button
  // FormHelperText,
  // Link
  // useToast
} from "@chakra-ui/react";
// import api from "../Tools/api";
import { saveToken } from "../Tools/common";
import { FETCH_LOGIN } from "../Actions/Types";
import { connect } from "react-redux";
// import {  } from "../Tools/action";

const LoginPage = props => {
  const sampleToken =
    "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg";
  const [formValue, setFormValue] = useState({});
  const handleChange = event => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      // const requestSource = api.generateCancelToken();
      // const response = await apiLoginAction(values, requestSource.token);
      // const { data } = response;
      // api.setToken(data.data.type, data.data.token);
      // saveToken(data.data.token);
      if (formValue.username === "zaza" && formValue.password === "zaza") {
        saveToken(sampleToken);
        props.setLogin(sampleToken);
      }

      props.history.push("/current");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box w={500} p={4} m="20px auto">
          <Heading as="h2" size="xl" textAlign="center" m={5}>
            Login Form
          </Heading>
          <Box
            border
            borderRadius="lg"
            mx="5"
            spacing="8"
            p="5"
            rounded="lg"
            boxShadow="lg"
            bg="white"
          >
            <FormControl id="username" my="5">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                onChange={handleChange}
                size="sm"
                borderRadius="5px"
                borderWidth="1"
                borderColor="gray.400"
                bg="white"
                value={formValue.username}
              />
            </FormControl>
            <FormControl id="password" my="5">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                size="sm"
                borderRadius="5px"
                borderWidth="1"
                borderColor="gray.400"
                bg="white"
                value={formValue.password}
              />
            </FormControl>
            <Button
              isFullWidth
              colorScheme="blue"
              type="submit"
              onClick={handleSubmit}
              my="3"
            >
              Submit
            </Button>
            {/* <FormControl>
              <FormHelperText>
                <Link as={LinkRouter} to="/register" color="teal.500" href="#">
                  Create New Account
                </Link>
              </FormHelperText>
            </FormControl> */}
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};
const mapStateToProps = state => ({
  token: state.auths.token
});

const mapDispatchToProps = dispatch => ({
  setLogin: payload =>
    dispatch({
      type: FETCH_LOGIN,
      payload
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
