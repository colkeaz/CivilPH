import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ReportsPage.css';

const mockReports = [
  {
    id: 'rep_1',
    title: 'Structural Assessment - Residential House',
    engineer: 'Engr. Juan Dela Cruz',
    date: '2026-05-01',
    status: 'submitted',
    summary: 'Visual inspection conducted. Minor hairline cracks found on the second-floor firewall.',
    recommendations: 'Seal cracks with structural epoxy. Monitor for 6 months.',
    estimatedCost: 'PHP 5,000 - 10,000'
  },
  {
    id: 'rep_2',
    title: 'Design Review - Garage Extension',
    engineer: 'Engr. Maria Santos',
    date: '2026-04-15',
    status: 'acknowledged',
    summary: 'Reviewed proposed architectural plans for garage extension.',
    recommendations: 'Increase column sizes to 300mm x 300mm for added seismic resistance.',
    estimatedCost: 'N/A'
  }
];

const ReportsPage = () => {
  const [reports, setReports] = useState(mockReports);
  const [selectedReport, setSelectedReport] = useState<any>(null);

  return (
    <div className="page-container">
      <Header />
      <main className="reports-main">
        <div className="reports-header">
          <h1>Digital Reports Portal</h1>
          <p>Access your structural assessment reports and engineer recommendations.</p>
        </div>

        <div className="reports-layout">
          <div className="reports-list">
            {reports.map(report => (
              <div 
                key={report.id} 
                className={`report-card card ${selectedReport?.id === report.id ? 'active' : ''}`}
                onClick={() => setSelectedReport(report)}
              >
                <div className="report-card-info">
                  <h3>{report.title}</h3>
                  <p className="report-meta">By {report.engineer} • {report.date}</p>
                </div>
                <span className={`status-badge ${report.status}`}>{report.status}</span>
              </div>
            ))}
          </div>

          <div className="report-details card">
            {selectedReport ? (
              <div className="report-view">
                <div className="report-view-header">
                  <h2>{selectedReport.title}</h2>
                  <button className="btn btn-outline btn-sm">Download PDF</button>
                </div>
                
                <div className="report-section">
                  <h4>Engineer Summary</h4>
                  <p>{selectedReport.summary}</p>
                </div>
                
                <div className="report-section">
                  <h4>Recommendations</h4>
                  <p>{selectedReport.recommendations}</p>
                </div>
                
                <div className="report-section highlight">
                  <h4>Estimated Repair Cost Range</h4>
                  <p className="cost-range">{selectedReport.estimatedCost}</p>
                </div>
                
                <div className="report-actions">
                  {selectedReport.status === 'submitted' && (
                    <button className="btn btn-primary">Acknowledge Receipt</button>
                  )}
                </div>
              </div>
            ) : (
              <div className="no-report-selected">
                <p>Select a report from the list to view details.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportsPage;
