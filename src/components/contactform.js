import React from 'react';
import styled from 'styled-components';

const blue = "#69c1ff";
// const yellow = "#fff2b4";
const lightGrey = "#5f7080";
const darkGrey = "#485460";

const StyledInput = styled.input`
    background-color: ${props => props.error ? '#fee' : 'white'};
    border: 1px solid ${props => props.error ? '#c99' : lightGrey};
    font-size: 16px;
    font-weight: 700;
    height: 20px;
    padding: 10px 15px;
    width: 26%;
    border-radius: 5px;
    color: ${lightGrey};

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

    @media (max-width: 600px) {
      margin: 5px 0;
      height: 37px;
      width: 100%;
      box-sizing: border-box;

  }

`;

const StyledTextarea = styled.textarea`
    box-sizing: border-box;
    resize: none;
    background-color: ${props => props.error ? '#fee' : 'white'};
    border: 1px solid ${props => props.error ? '#c99' : lightGrey};
    width: 100%;
    border-radius: 5px;
    height: 150px;
    padding: 15px;
    font-size: 16px;
    font-weight: 700;
    color: ${lightGrey};
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px ${blue};
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

`;

const ContactFormStyle = styled.div`
  text-align: right;

  .top-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  @media (max-width: 600px) {
    .top-input {
      flex-direction: column;
    }
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

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        _replyto: '',
        phone: '',
        message: ''
      },
      loading: false,
      errors: {}
    };
  }

  onChange = e => {
    this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});
  };

  onSubmit = (e) => {
    // e.preventDefault();
    const errors = this.validate(this.state.data);
    if (Object.keys(errors).length > 0) e.preventDefault();
    this.setState({errors});
  };

  validate = data => {
    const errors = {};
    if (!data._replyto) errors.email = true;
    if (!data.name) errors.name = true;
    if (!data.message) errors.message = true;
    return errors;
  };

  render() {
     const { data, errors } = this.state;
    return (
      <ContactFormStyle emailError={errors.email} nameError={errors.name} messageError={errors.message}>
        <form onSubmit={this.onSubmit} method="POST" action="https://formspree.io/naranoeur@gmail.com">
          <div className="top-input">
            <StyledInput
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={this.onChange}
              error={!!errors.name}
            />
            <StyledInput
              type="email"
              placeholder="Email"
              name="_replyto"
              value={data.email}
              onChange={this.onChange}
              error={!!errors.email}
            />
            <StyledInput
              type="text"
              placeholder="Phone"
              name="phone"
              value={data.phone}
              onChange={this.onChange}
              error={!!errors.phone}
            />
          </div>
          <StyledTextarea
            placeholder="Message"
            name="message"
            value={data.message}
            onChange={this.onChange}
            error={!!errors.message}
          />
          <div className="submit-wrap">
            <input type="submit" value="Send" />
          </div>
        </form>
      </ContactFormStyle>
    );
  }
}

/*
<form action="https://formspree.io/your@email.com"
      method="POST">
    <input type="text" name="name">
    <input type="email" name="_replyto">
    <input type="submit" value="Send">
</form>

*/

export default ContactForm;
