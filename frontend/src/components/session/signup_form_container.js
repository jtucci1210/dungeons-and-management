import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: (user) => dispatch(signup(user)),
        processForm: (user) => dispatch(login(user)),
        openModal: modal => dispatch(openModal(modal)),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('login'))}>
        //         Log In
        //      </button>
        // ),
        // closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);