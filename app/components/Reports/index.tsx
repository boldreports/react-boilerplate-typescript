import React, { Component } from 'react';
import ReportHeader from '../ReportHeader';
import ReportViewer from '../ReportViewer';
import ReportDesigner from '../ReportDesigner';
import './index.css';

interface IState {
  viewer: boolean;
}

export class Reports extends Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = { viewer: true };
  }

  updatestate(isReportViewer) {
    this.setState({ viewer: isReportViewer });
  }

  renderReports() {
    return this.state.viewer ? <ReportViewer /> : <ReportDesigner />;
  }

  render() {
    return (
      <div className="content">
        <div className="navHeader">
          <ReportHeader />
          <div className="navbar">
            <div
              role="presentation"
              onClick={this.updatestate.bind(this, true)}
              className="viewerbtn"
            >
              Report Viewer
            </div>
            <div
              role="presentation"
              onClick={this.updatestate.bind(this, false)}
              className="designerbtn"
            >
              Report Designer
            </div>
          </div>
        </div>
        <div className="report">{this.renderReports()}</div>
      </div>
    );
  }
}
