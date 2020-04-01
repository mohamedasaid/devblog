import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return homePageLink;

      default:
        return <a href='/api/logout'>Sign out</a>;
    }
  }
  render() {
    return (
      <nav>
        {" "}
        <div className='nav-wrapper grey darken-3'>
          {" "}
          <Link to={this.props.auth ? "/post" : "/"}></Link>{" "}
          <ul className='right'>
            {" "}
            <li>{this.renderContent()}</li>{" "}
          </ul>{" "}
        </div>{" "}
      </nav>
    );
  }
}

const imagePage = (
  <header className='masthead'>
    <div className='container'>
      <div className='intro-text'></div>
    </div>
  </header>
);

const homePageLink = (
  <nav className='navbar navbar-expand-lg navbar-dark fixed-top' id='mainNav'>
    <div className='container'>
      <a className='navbar-brand js-scroll-trigger' href='/'>
        Tech Blogs
      </a>

      <button
        className='navbar-toggler navbar-toggler-right'
        type='button'
        data-toggle='collapse'
        data-target='#navbarResponsive'
        aria-controls='navbarResponsive'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        Menu
        <i className='fa fa-bars'></i>
      </button>
      <div className='collapse navbar-collapse' id='navbarResponsive'>
        <ul className='navbar-nav text-uppercase ml-auto'>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger'>
              <Link to='/login'>Sign in</Link>
            </a>{" "}
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger'>
              <Link to='/register'>Register</Link>
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const guestLink = (
  <ul>
    <li>
      <Link to='/register'>Register</Link>
    </li>
    <li>
      <a href='/auth/google'>Sign in</a>{" "}
    </li>
  </ul>
);

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
