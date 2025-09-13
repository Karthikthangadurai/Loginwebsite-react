import React from 'react'

const Fail = () => {
  return (
    <div className="bg-slate-600 text-center border border-blue-100 rounded-lg">
    <div className="p-10 font-bold text-white">
        <p>❌</p>
        <h1>LOGIN FAILED</h1>
        <h2 className="text-yellow-500">Sorry😔,Incorrect mail id, password.</h2>
        <p>Please Enter Correct mail id, password✅</p>
        <form action="http://localhost:5173/">
        <button className="bg-green-200 text-purple-700 font-semibold mt-6 p-2 border rounded-lg">🔙 Go Home</button>
        </form>
    </div>
    </div>
  );
}

export default Fail;