import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import  {getCurrentUser,checkIfLoggedIn,logoutUser}  from '../firebaseFunction/auth'
import {CaseRow} from '../components/Case'
import {cases} from '../cases/List'
import {Clock} from '../components/clock'
import { DivideIcon } from '@heroicons/react/24/outline';

function App() {

  const navigate = useNavigate();
  //Check if user is logged in, if not, redirect to login page
  useEffect(() => {
    if (!checkIfLoggedIn()) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome, {getCurrentUser() ? getCurrentUser().email : 'Guest'}!</p>
      
      <div class="flex item-center justify-start mb-4">
        <button 
        type="submit"
        class="mr-4 px-10 py-2 bg-red-600 text-white rounded hover:bg-green-700"
        onClick={() => {
          color === 'red' ? setColor('green') : setColor('red');
        }}
          >
          Clock in
        </button>
        
        <p class="text-gray-800 px-3 py-2 text-sm font-medium">Current Time:</p>
          <Clock />
      </div>

    <div class="overflow-x-auto w-[90%] max-w-5xl">
    <table class="min-w-full border border-gray-500 text-sm text-gray-800">
      <thead class="bg-gray-300 text-left">
        <tr>
          <th class="px-4 py-2 border-b border-gray-400">name</th>
          <th class="px-4 py-2 border-b border-gray-400">start Date</th>
          <th class="px-4 py-2 border-b border-gray-400">Case Status</th>
          <th class="px-4 py-2 border-b border-gray-400">Payment</th>
          <th class="px-4 py-2 border-b border-gray-400">Employee</th>
          <th class="px-4 py-2 border-b border-gray-400">Fee</th>
          <th class="px-4 py-2 border-b border-gray-400">Note:</th>
        </tr>
      </thead>
      <tbody className ="devide-y divide-gray-300">
        {cases.map((caseItem, index) => (
          <CaseRow
            key={index}
            name={caseItem.name}
            startDate={caseItem.startDate}
            status={caseItem.status}
            payment={caseItem.payment}
            employee={caseItem.employee}
            fee={caseItem.fee}
            notes={caseItem.notes}
          />
        ))}
      </tbody>
    </table>
  </div>
    </>
  )
}

export default App
