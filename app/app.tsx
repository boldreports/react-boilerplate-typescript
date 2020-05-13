/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Exposing window objects
import './globals';

// Needed for redux-saga es6 generator support
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';

// Report designer source
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-designer.min';
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Content/material/bold.reports.all.min.css';
import '@boldreports/javascript-reporting-controls/Content/material/bold.reportdesigner.min.css';

// Reports react base
import '@boldreports/react-reporting-components/Scripts/bold.reports.react.min';

import { Reports } from './components/Reports';
import '!file-loader?name=[name].[ext]!./images/favicon.ico';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<Reports />, MOUNT_NODE);

require('offline-plugin/runtime').install();
