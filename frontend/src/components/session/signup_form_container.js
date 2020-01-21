import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: Object.values(errors.session),
        formType: 'signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: modal => dispatch(closeModal(modal))
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('login'))}>
        //         Log In
        //      </button>
        // ),
        // closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);