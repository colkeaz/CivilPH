import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/AdminPanel.css';

const mockPendingEngineers = [
  {
    id: 'eng_1',
    name: 'Engr. John Doe',
    email: 'john.doe@example.com',
    prcNumber: '0123456',
    expiryDate: '2028-12-31',
    documentUrl: '#'
  },
  {
    id: 'eng_2',
    name: 'Engr. Jane Smith',
    email: 'jane.smith@example.com',
    prcNumber: '0654321',
    expiryDate: '2027-06-30',
    documentUrl: '#'
  }
];

const VerificationQueue = () => {
  const [pendingList, setPendingList] = useState(mockPendingEngineers);

  const handleAction = (id: string, status: 'verified' | 'rejected') => {
    // TODO: Connect to backend admin service
    setPendingList(pendingList.filter(eng => eng.id !== id));
    console.log(`Engineer ${id} has been ${status}`);
  };

  return (
    <div className="page-container">
      <Header />
      <main className="admin-main">
        <div className="admin-header">
          <h1>PRC Verification Queue</h1>
          <p>Review and verify professional licenses for newly registered engineers.</p>
        </div>

        <div className="admin-content card">
          {pendingList.length > 0 ? (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Engineer Name</th>
                  <th>PRC License #</th>
                  <th>Expiry Date</th>
                  <th>Documents</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingList.map(eng => (
                  <tr key={eng.id}>
                    <td>
                      <div className="admin-user-info">
                        <strong>{eng.name}</strong>
                        <span>{eng.email}</span>
                      </div>
                    </td>
                    <td>{eng.prcNumber}</td>
                    <td>{eng.expiryDate}</td>
                    <td><a href={eng.documentUrl} target="_blank" rel="noopener noreferrer" className="text-cyan">View ID</a></td>
                    <td>
                      <div className="admin-actions">
                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => handleAction(eng.id, 'verified')}
                        >
                          Verify
                        </button>
                        <button 
                          className="btn btn-outline btn-sm"
                          onClick={() => handleAction(eng.id, 'rejected')}
                          style={{ borderColor: '#ff4d4d', color: '#ff4d4d' }}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="admin-empty-state">
              <p>No pending verifications at the moment.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VerificationQueue;
