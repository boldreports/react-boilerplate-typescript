import React from 'react';

declare let BoldReportDesignerComponent: any;

const ReportDesigner = () => (
  <BoldReportDesignerComponent
    id="reportdesigner-container"
    serviceUrl="https://demos.boldreports.com/services/api/ReportDesignerWebApi"
  />
);

export default ReportDesigner;
