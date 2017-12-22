import React from 'react';
import styled from 'styled-components';
import ContactForm from './contactform'

const Style = styled.div`
  padding: 80px 0;
  color: #485460;
  h1 {
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 1px;
  }
  p {
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 300;
  }
  .contact-container {
    margin: 4% auto;
    max-width: 650px;
  }
`;

function Contact () {
 return (
 <Style>
   <div className="contact-container">
     <h1>Let’s get in touch</h1>
     <p>I would love to hear about your project, so don’t hesitate to contact me
or connect with me on social media.</p>
      <div className="contactform-container">
        <ContactForm />
      </div>
   </div>
 </Style>
 );
}

export default Contact;
