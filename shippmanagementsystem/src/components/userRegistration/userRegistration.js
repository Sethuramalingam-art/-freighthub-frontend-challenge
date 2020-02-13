import React,{Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
class UserRegistration extends  React.Component {
    constructor(props) {
      super(props);
      this.registerUserDetail = this.registerUserDetail.bind(this);
      this.backToLogin = this.backToLogin.bind(this);
    }

    registerUserDetail = function() {
      this.props.history.push('/shippmentDetails');
    }

    backToLogin = function() {
      this.props.history.push('/');
    }
    render() {
        return (
            <MDBContainer>
  <MDBRow center={true}>
    <MDBCol md="3" sm="12" lg="3">
      <form>
        <p className="h4 text-center mb-4">Sign up</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" className="form-control" />
        <br />
        <label className="grey-text">
          Your email
        </label>
        <input type="email" className="form-control" />
        <br />
        <label className="grey-text">
          Confirm your email
        </label>
        <input type="email" className="form-control" />
        <br />
        <label className="grey-text">
          Your password
        </label>
        <input type="password"  className="form-control" />
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit" onClick={this.registerUserDetail}>
            Register
          </MDBBtn>
          <MDBBtn color="unique" type="submit" onClick={this.backToLogin}>
            Back To Login
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
          )
      }
}


export default UserRegistration;
