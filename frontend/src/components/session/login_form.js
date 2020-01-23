import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheet/modal.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }
   
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };
        // Object.assign({}, this.state)
        // debugger    
        this.props.login(user).then(res => {
          if (!res.errors) {
            this.props.closeModal();
          }
        });
        // this.props.history.push('/')
        
    }


    render() {
        return (
          <div className="login-form-container">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <h2 className="modal-header">
                D <i className="fab fa-d-and-d"></i> M
              </h2>
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <div className="login-errors">{this.props.errors.email}</div>
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <div className="login-errors">{this.props.errors.password}</div>
              <br />
              <input
                className="submit-button-modal"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        );
    }
}

export default withRouter(LoginForm);