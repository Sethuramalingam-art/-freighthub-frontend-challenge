import React,{Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';


class UserLogin extends  React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleLogin(event) {
        this.props.history.push('/shippmentDetails')
    }

    handleRegister(event) {
      this.props.history.push('/userRegister')
    }
    render() {
        return (
            <MDBContainer>
            <MDBRow center={true}>
              <MDBCol md="3" sm="12" lg="3">
                <form onSubmit={this.handleLogin}>
                  <p className="h4 text-center mb-4">User Login</p>
                  <label className="grey-text">
                    Username
                  </label>
                  <input type="email" className="form-control" />
                  <br />
                  <label className="grey-text">
                    Password
                  </label>
                  <input type="password" className="form-control" />
                  <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                <MDBBtn color="indigo" type="submit" onClick={this.handleRegister}>Sign Up</MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          )
      }
}


export default UserLogin;
