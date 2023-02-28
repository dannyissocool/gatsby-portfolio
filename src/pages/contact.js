import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import GlobalStyle from "../globalStyles";
import emailjs from "emailjs-com";

const ContactTitle = styled.h2`
  margin-top: 100px;
  color: white;
  text-align: center;
`;

const ContactWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;

  form {
    margin-top: 30px;
    margin: 30px auto 0;
    width: 70%;
    text-align: start;

    label {
      color: white;

      input {
        width: 100%;
        padding: 5px;
      }
    }

    textarea {
      min-width: 100%;
      max-width: 100%;
      min-height: 50px;
      padding: 5px;
    }

    button {
      margin: 20px auto;
      width: 100%;
      padding: 10px 20px;
      cursor: pointer;
      color: white;
      outline: 1px solid white;
      background: linear-gradient(to right, #4389a2, #5c258d);
      transition: 0.3s all ease;

      :hover {
        outline-offset: -4px;
        background: rgba(0, 0, 0, 0.1);
      }

      :focus {
        outline: 2px solid limegreen;
      }
    }
  }
`;

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f7bum4i",
        "contact_form",
        e.target,
        "user_gddiMhARmoLCK9FcmaEeH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Layout>
      <GlobalStyle />

      <ContactTitle>Contact Me</ContactTitle>
      <ContactWrapper>
        <form onSubmit={sendEmail}>
          <label>
            Name
            <input type="text" name="user_name" />
          </label>

          <label>
            Email
            <input type="email" name="email" />
          </label>

          <label>
            Message
            <textarea type="message" name="message" />
          </label>

          <button>Send</button>
        </form>
      </ContactWrapper>
    </Layout>
  );
}
