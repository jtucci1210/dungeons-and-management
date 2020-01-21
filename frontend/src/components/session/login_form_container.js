import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import React from 'react'
import {openModal, closeModal} from '../../actions/modal_actions'

const mapStateToProps = (state) => {
    return {
        errors: Object.values(state.errors.session),
        formType:'login',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
        // otherForm: (
        //     <button className='modal-background' onClick={() => dispatch(openModal('signup'))}>
        //         Signup
        //     </button>
        // ),
        // closeModal: () => dispatch(closeModal())
        // login: user => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);