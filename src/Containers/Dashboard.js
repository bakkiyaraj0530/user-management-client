import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { contentStats } from '../Actions/Global';
import Loading from '../Components/Loading';

class Dashboard extends Component {
    componentDidMount() {
        this.props.contentStats();
    }
    render() {
        const { dashboard } = this.props;
        if (!dashboard) {
            return (
                <Loading />
            );
        }
        return (
            <div className="home-page">
                <div className="wrap">
                    <div className="col-half sm">
                        <div className="card widget">
                            <div className="card-body">
                                <Link to="/users">
                                    <i className="fa fa-user bg-primary"></i>
                                    <div className="number-text text-primary">{dashboard.users}</div>
                                    <div className="caption">Users</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-half sm">
                        <div className="card widget">
                            <div className="card-body">
                                <Link to="/groups">
                                    <i className="fa fa-users bg-primary"></i>
                                    <div className="number-text text-primary">{dashboard.groups}</div>
                                    <div className="caption">Groups</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        dashboard: globalState.dashboard
    };
}

export default connect(mapStateToProps, { contentStats })(Dashboard);