import React from 'react'

const Success = () => {
  return (
    <div className="bg-slate-600 text-center border border-blue-100 rounded-lg">
    <div className="p-10 font-bold text-white">
        <p>✅</p>
        <h1 >LOGIN SUCCESSFUL</h1>
        <p className="text-green-400">You have Successfully signed into your account.</p>
        <p>Thank you 😉</p>
    </div>
    </div>
  );
}

export default Success;