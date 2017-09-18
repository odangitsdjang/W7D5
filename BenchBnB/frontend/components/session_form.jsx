import React from 'react';
import { Link } from 'react-router-dom';
class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username:"", password:""} ;
  }

  updateInput(field)  {
    return (e) =>  {
      console.log(this.state);
      this.setState({[field]: e.target.value});
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  submitAction(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {


    const errors = this.props.errors.map((err,i)=> <li key={i}>{err}</li>);
    let smallerComponent = "";
    if (this.props.formType === "login") {
      smallerComponent = (
        <Link to="/signup"> Sign Up </Link>
      );
    }
    else {
      smallerComponent = (
        <Link to="/login"> Login </Link>
      );
    }
    return (
      <div>
        { smallerComponent }
        <form onSubmit={ e => this.submitAction(e) } >
        <ul> {errors} </ul>
        <label> Username
          <input type="text" value={this.state.username} onChange={this.updateInput("username")}/>
        </label>

        <label> Password
          <input type="password" value={this.state.password} onChange={this.updateInput("password")}/>
        </label>

        <input type="submit" value={this.props.formType}/>

        </form>
      </div>
    );
  }
}
export default SessionForm;
