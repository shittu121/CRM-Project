'use client';

import React from 'react';
import avatar from '../../../../public/user-01.png'

const user = {
  avatarUrl: avatar, // Replace with actual avatar URL
  name: 'Rahul Bose',
  email: 'rahul21@gmail.com',
  bio: 'Software developer with a passion for creating amazing applications.',
  partnerCode: 'ABC23456',
  channelName: 'Retail',
  appointmentDate: '01/01/2023',
  assignedBranch: 'Rahul Sharma',
  primaryPhone: '9811220033',
  secondaryPhone: '9810198110',
  address: '404 - 405, iLabs, Udyog Vihar, Phase - 3, New Delhi, Delhi, 110045, India',
  accountType: 'Salary',
  accountNumber: 'YESB5480',
  bankName: 'Axis Bank',
  branchName: 'Nariman Point',
  micrCode: 'UKNI10003',
  ifscCode: 'UKNI10003',
  effectiveFrom: '21 Mar 2018',
  reportingTo: {
    name: 'Varun Bahal',
    role: 'ADM',
    email: 'varun21@gmail.com',
    phone: '9810198110'
  },
  documents: [
    {
      name: 'Appointment Letter',
      downloadUrl: '#',
      viewUrl: '#'
    }
  ]
};

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
        
        {/* Personal Details */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
          <div className="flex items-center mb-4">
          <img src="/user-01.png" alt={`${user.name}'s avatar`} className="w-24 h-24 rounded-full mr-4" />
            <div>
              <p><strong>Partner Code:</strong> {user.partnerCode}</p>
              <p><strong>Partner Name:</strong> {user.name}</p>
              <p><strong>Channel Name:</strong> {user.channelName}</p>
              <p><strong>Appointment Date:</strong> {user.appointmentDate}</p>
              <p><strong>Assigned Apollo Branch:</strong> {user.assignedBranch}</p>
              <p><strong>Mobile Number:</strong> {user.primaryPhone} <span className="text-gray-500">PRIMARY</span></p>
              <p><strong></strong> {user.secondaryPhone} <span className="text-gray-500">SECONDARY</span></p>
              <p><strong>Email Id:</strong> {user.email}</p>
              <p><strong>Communication Address:</strong> {user.address}</p>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Account Details</h3>
          <p><strong>Account Type:</strong> {user.accountType}</p>
          <p><strong>Account Number:</strong> {user.accountNumber}</p>
          <p><strong>Bank Name:</strong> {user.bankName}</p>
          <p><strong>Branch Name:</strong> {user.branchName}</p>
          <p><strong>MICR Code:</strong> {user.micrCode}</p>
          <p><strong>IFSC Code:</strong> {user.ifscCode}</p>
          <p><strong>Effective From:</strong> {user.effectiveFrom}</p>
        </div>

        {/* Reporting Structure */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Reporting Structure</h3>
          <div className="flex items-center mb-4">
          <img src="/user-01.png" alt={`${user.name}'s avatar`} className="w-24 h-24 rounded-full mr-4" />
            <div>
              <p><strong>{user.reportingTo.name}</strong></p>
              <p>{user.reportingTo.role}</p>
              <p>{user.reportingTo.email}</p>
              <p>{user.reportingTo.phone}</p>
            </div>
          </div>
        </div>

        {/* Documents Download */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Documents Download</h3>
          {user.documents.map((doc, index) => (
            <div key={index} className="flex items-center mb-4">
              <p className="flex-grow"><strong>{doc.name}</strong></p>
              <a href={doc.downloadUrl} className="text-blue-500 mr-2">Download</a>
              <a href={doc.viewUrl} className="text-blue-500">View</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
