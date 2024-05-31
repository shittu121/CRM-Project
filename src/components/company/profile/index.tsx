'use client';

import React from 'react';
import Image from 'next/image';
import avatar from '../../../../public/user-01.png';

const user = {
  avatarUrl: avatar,
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
    <div className="flex flex-col items-start min-h-screen border border-stroke p-8">
      <h2 className="text-2xl font-semibold mb-6">My Profile</h2>
      <div className="bg-white rounded-lg shadow-default p-8 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Details */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
            <hr className="border-t border-stroke mb-4" />
            <div className="flex items-start mb-8">
              <Image
                src={user.avatarUrl}
                alt={`${user.name}'s avatar`}
                className="w-32 h-32 rounded-full mr-6"
              />
              <div>
                <p className="text-lg">
                  <strong>Partner Code:</strong> {user.partnerCode}
                </p>
                <p className="text-lg">
                  <strong>Partner Name:</strong> {user.name}
                </p>
                <p className="text-lg">
                  <strong>Channel Name:</strong> {user.channelName}
                </p>
                <p className="text-lg">
                  <strong>Appointment Date:</strong> {user.appointmentDate}
                </p>
                <p className="text-lg">
                  <strong>Assigned Apollo Branch:</strong> {user.assignedBranch}
                </p>
                <p className="text-lg">
                  <strong>Mobile Number:</strong> {user.primaryPhone}{" "}
                  <span className="text-gray-500">PRIMARY</span>
                </p>
                <p className="text-lg">
                  <strong></strong> {user.secondaryPhone}{" "}
                  <span className="text-gray-500">SECONDARY</span>
                </p>
                <p className="text-lg">
                  <strong>Email Id:</strong> {user.email}
                </p>
                <p className="text-lg">
                  <strong>Communication Address:</strong> {user.address}
                </p>
              </div>
            </div>

            {/* Account Details */}
            <h3 className="text-xl font-semibold mb-2">Account Details</h3>
            <hr className="border-t border-stroke mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <p>
                <strong>Account Type:</strong> {user.accountType}
              </p>
              <p>
                <strong>Account Number:</strong> {user.accountNumber}
              </p>
              <p>
                <strong>Bank Name:</strong> {user.bankName}
              </p>
              <p>
                <strong>Branch Name:</strong> {user.branchName}
              </p>
              <p>
                <strong>MICR Code:</strong> {user.micrCode}
              </p>
              <p>
                <strong>IFSC Code:</strong> {user.ifscCode}
              </p>
              <p>
                <strong>Effective From:</strong> {user.effectiveFrom}
              </p>
            </div>
          </div>

          <div className="border-l border-stroke pl-8">
            {/* Reporting Structure */}
            <h3 className="text-xl font-semibold mb-2">Reporting Structure</h3>
            <hr className="border-t border-stroke mb-4" />
            <div className="flex items-start mb-8">
              <Image
                src={user.avatarUrl}
                alt={`${user.reportingTo.name}'s avatar`}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="text-lg">
                  <strong>{user.reportingTo.name}</strong>
                </p>
                <p className="text-lg">{user.reportingTo.role}</p>
                <p className="text-lg">{user.reportingTo.email}</p>
                <p className="text-lg">{user.reportingTo.phone}</p>
              </div>
            </div>

            {/* Documents Download */}
            <h3 className="text-xl font-semibold mb-2">Documents Download</h3>
            <hr className="border-t border-stroke mb-4" />
            {user.documents.map((doc, index) => (
              <div key={index} className="flex items-center mb-4">
                <p className="flex-grow">
                  <strong>{doc.name}</strong>
                </p>
                <a href={doc.downloadUrl} className="text-blue-500 mr-4">
                  Download
                </a>
                <a href={doc.viewUrl} className="text-blue-500">
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
