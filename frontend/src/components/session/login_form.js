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
        this.renderErrors = this.renderErrors.bind(this);
    }

   
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(user).then(res => {
          if (!res.errors) {
            this.props.closeModal();
          }
        });
           
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="submit" value="Submit" />
                        <div className="login-errors">
                            {this.renderErrors()}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);