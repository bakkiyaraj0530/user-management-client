import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Header from './Components/Header';
import Left from './Components/Left';

// Pages
import Dashboard from './Containers/Dashboard';
import Users from './Containers/Users';
import Groups from './Containers/Groups';
import GroupDetails from './Containers/GroupDetails';
import NotFoundPage from './Containers/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
                <Header />
                <div className="app-body">
                    <Left />
                    <div className={this.props.leftbar ? 'main' : 'main left-closed'}>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/users" component={Users} />
                        <Route exact path="/groups" component={Groups} />
                        <Route exact path="/group/:groupid" component={GroupDetails} />
                        <Route component={NotFoundPage} />
                    </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
  }
}


function mapStateToProps(globalState) {
    return {
        leftbar: globalState.leftbar
    };
}
export default connect(mapStateToProps)(App);
