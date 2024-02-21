import React, { Component, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import botimg from "../../assests/images/Bot.png";
import { ThemeProvider } from "styled-components";
import { Button } from "bootstrap";

class Btn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
      email: "",
      company: "",
      phone: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age, email, company, phone, query } = steps;

    this.setState({ name, gender, age, email, company, phone, query });
  }

  render() {
    const { name, gender, age, email, company, phone, query } = this.state;

    emailjs.init({
      publicKey: "1iH__A9UU69Je6fGy",
    });
    return emailjs
      .send("service_guf0xqn", "template_iqnxscl", {
        name: name.value,
        company: company.value,
        phone: phone.value,
        email: email.value,
        enquiry: query.value,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }
}

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
      email: "",
      company: "",
      phone: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age, email, company, phone, query } = steps;

    this.setState({ name, gender, age, email, company, phone, query });
  }

  render() {
    const { name, gender, age, email, company, phone, query } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email.value}</td>
            </tr>
            <tr></tr>
            <tr>
              <td>Company</td>
              <td>{company.value}</td>
            </tr>
            <tr>
              <td>phone</td>
              <td>{phone.value}</td>
            </tr>
            <tr>
              <td>Query</td>
              <td>{query.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const theme = {
  background: "lightblue",
  headerBgColor: "darkblue",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

const FloatingIcon = (
  <img
    src="https://img.freepik.com/free-vector/floating-robot_78370-3669.jpg?w=740&t=st=1707468753~exp=1707469353~hmac=fd985efc6f90a4826708236a2714adc87d1e0c0a27617b45ade72b0a7ce90f27" // Replace with the actual URL of your robot image
    alt="Robot Icon"
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      cursor: "pointer",
    }}
  />
);
// Set some properties of the bot
const config = {
  floating: true,
  botAvatar: botimg,
};

class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Flyfin Assistant"
          {...config}
          steps={[
            {
              id: "1",
              message: "What is your name?",
              trigger: "name",
            },
            {
              id: "name",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}! What is your Query for us?",
              trigger: "query",
            },
            {
              id: "query",
              user: true,
              trigger: "7",
            },
            {
              id: "5",
              message: "How old are you?",
              trigger: "age",
            },
            {
              id: "age",
              user: true,
              trigger: "7",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }

                return true;
              },
            },
            {
              id: "7",
              message: "What is your Email Address?",
              trigger: "email",
            },
            {
              id: "email",
              user: true,
              trigger: "9",
            },
            {
              id: "9",
              message: "What is your Company Name?",
              trigger: "company",
            },
            {
              id: "company",
              user: true,
              trigger: "11",
            },
            {
              id: "11",
              message: "What is your Phone No.?",
              trigger: "phone",
            },
            {
              id: "phone",
              user: true,
              trigger: "13",
            },
            {
              id: "13",
              message: "Great! Check out your summary",
              trigger: "review",
            },
            {
              id: "review",
              component: <Review />,
              asMessage: true,
              trigger: "update",
            },
            {
              id: "update",
              message: "Would you like to update some field?",
              trigger: "update-question",
            },
            {
              id: "update-question",
              options: [
                { value: "yes", label: "Yes", trigger: "update-yes" },
                {
                  value: "no",
                  component: <Btn />,
                  label: "No",
                  trigger: "end-message",
                },
              ],
            },
            {
              id: "update-yes",
              message: "What field would you like to update?",
              trigger: "update-fields",
            },
            {
              id: "update-fields",
              options: [
                { value: "name", label: "Name", trigger: "update-name" },
                { value: "gender", label: "Gender", trigger: "update-gender" },
                { value: "age", label: "Age", trigger: "update-age" },
              ],
            },
            {
              id: "update-name",
              update: "name",
              trigger: "7",
            },
            {
              id: "update-gender",
              update: "gender",
              trigger: "7",
            },
            {
              id: "update-age",
              update: "age",
              trigger: "7",
            },
            {
              id: "end-message",
              message: "Thanks! Your data was submitted successfully!",
              end: true,
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
