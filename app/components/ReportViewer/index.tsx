import React from 'react';

declare let BoldReportViewerComponent: any;

const ReportViewer = () => (
  <BoldReportViewerComponent
    id="reportviewer-container"
    reportPath="invoice.rdl"
    reportServiceUrl="https://demos.boldreports.com/services/api/ReportViewerWebApi"
  />
);

export default ReportViewer;
