import React, { Component } from 'react'
import firebase from './firebase.js';
import { Button, Container, Row, Col } from 'reactstrap';
export class App extends Component {
  state = {
    mobile: '',
    mobileErr: false
  }
  handleChange = (e) => {
    this.setState({ mobile: e.target.value.replace(/[^0-9]+/g, '') })
  }
  handleClick = () => {
    const { mobile } = this.state
    if (mobile.length < 10) {
      this.setState({
        mobileErr: true
      })
      return;
    }
    else {
      this.setState({ mobileErr: false })
      var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
      var number = `+91${mobile}`;
      firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
        var code = prompt('Enter the otp', '');
        if (code === null) return;
        e.confirm(code).then(function (result) {
          alert("hii")
          console.log("user", result.user);
          document.getElementById('successAlert').textContent += (result.user.phoneNumber + "  " + "Number verified").toUpperCase();
        }).catch(function (error) {
          console.error(error);
        });
      })
        .catch(function (error) {
          console.error(error);
        });
    }
  }
  render() {
    const { mobile, mobileErr } = this.state
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <form>
                <input type="text" name="mobile" value={mobile} onChange={this.handleChange} maxlength="10" />
                {mobileErr ? <span className="text-danger">Enter Valid Mobile Number</span> : ''}
                <Button outline color="success" onClick={this.handleClick}>Send OTP</Button>
              </form>
            </Col>
            <Col>
              <div id="recaptcha"></div>
            </Col>
          </Row>
        </Container>
        <label id="successAlert" className="text-success"></label>
      </div>
    )
  }
}

export default App

