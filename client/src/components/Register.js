import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <href to='/login' />;
  }

  return (
    <Fragment>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='section-heading text-uppercase'>Sign up</h2>
            <p className='lead'>
              <i className='section-subheading text-muted'></i> Create Your
              Account
            </p>
            <h3 className='section-subheading text-muted'>
              Welcome to your professional community
            </h3>
          </div>
        </div>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Your Name *'
                  name='name'
                  value={name}
                  onChange={e => onChange(e)}
                  //required
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={e => onChange(e)}
                  placeholder='Your Email *'
                  //required
                />
                <small className='form-text'>
                  This site uses Gravatar, so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Your Password *'
                  // minLength='6'
                  name='password'
                  value={password}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  // minLength='6'
                  name='password2'
                  value={password2}
                  onChange={e => onChange(e)}
                />
              </div>
              <input
                type='submit'
                value='Register'
                className='btn btn-primary'
              />
            </div>
          </div>
        </form>
        <ul>
          <li>
            <p className='section-heading'>
              Already have an account? <Link to='/login'>Sign in</Link>
            </p>
          </li>
          <li>
            <p className='section-heading'>
              Sign in <a href='/auth/google'>with Google</a>{" "}
            </p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

Register.PropTyoes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(null, { setAlert, register })(Register);
