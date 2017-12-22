import React from 'react';
import styled from 'styled-components';

const blue = "#69c1ff";
const yellow = "#fff2b4";
const lightGrey = "#5f7080";
const darkGrey = "#485460";

const ContactFormStyle = styled.div`
  .form-container {
    text-align: right;
  }

  .top-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .top-input input {
    background-color: white;
    border: 1px solid ${lightGrey};
    font-size: 16px;
    font-weight: 700;
    height: 20px;
    padding: 10px 15px;
    width: 26%;
    border-radius: 5px;
    color: ${lightGrey}
    &:first-child {
      padding-left: 0;
    }
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px ${blue};
      color: ${lightGrey};
    }
    &:placeholder-shown {
      font-weight: 400;
    }
    &::-webkit-input-placeholder {
      color: ${lightGrey} !important;
    }

    &:-moz-placeholder { /* Firefox 18- */
      color: ${lightGrey} !important;
    }

    &::-moz-placeholder {  /* Firefox 19+ */
      color: ${lightGrey} !important;
    }

    &:-ms-input-placeholder {
      color: ${lightGrey} !important;
    }
  }


  @media (max-width: 550px) {
    .top-input {
      flex-direction: column;
    }
    .top-input input {
      margin: 10px 0;
      width: 100%;
      box-sizing: border-box;
    }
    textarea {
      width: 50px;
    }
  }

  textarea {
    box-sizing: border-box;
    background-color: white;
    resize: none;
    border: 1px solid ${lightGrey};
    width: 100%;
    border-radius: 5px;
    height: 120px;
    padding: 15px;
    font-size: 16px;
    font-weight: 700;
    color: ${lightGrey};
  }

  textarea:focus {
    outline: none;
    box-shadow: 0px 0px 5px ${blue};
  }

  textarea:placeholder-shown {
    font-weight: 400;
  }
textarea::-webkit-input-placeholder {
color: ${lightGrey} !important;
}

textarea:-moz-placeholder { /* Firefox 18- */
color: ${lightGrey} !important;
}

textarea::-moz-placeholder {  /* Firefox 19+ */
color: ${lightGrey} !important;
}

textarea:-ms-input-placeholder {
color: ${lightGrey} !important;
}

  .submit-wrap input {
    outline: none;
    padding: 10px 35px;
    background-color: white;
    border: solid 1px ${lightGrey};
    color: ${darkGrey};
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 20px;
    border-radius: 5px;
    transition-timing-function: easeInOutExpo;
    transition-duration: 0.5s;
    &:hover {
      background-color: ${lightGrey};
      color: white;
      box-shadow: 0px 0px 8px ${blue};
    }
  }
`;

function ContactForm () {
  return (
    <ContactFormStyle>
      <div className="form-container">
  <form>
    <div className="top-input">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Phone" />
    </div>
    <textarea placeholder="Message" />
<div className="submit-wrap">
  <input type="submit" value="Send" />
</div>
  </form>
</div>
    </ContactFormStyle>
  );
}

export default ContactForm;
