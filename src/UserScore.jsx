import React from 'react';

function UserScore({ users }) {
  // Buscar el usuario con el mayor puntaje
  const maxScoreUser = users.reduce((maxUser, currentUser) => {
    return currentUser.Score > maxUser.Score ? currentUser : maxUser;
  });

  return (
    <div>
      <div className='grid gap-4 grid-cols-2 bg-[#006b67] shadow-xl shadow-teal-950/75 hover:scale-105 transition-all rounded-md justify-items-center'>
        <div>
            <div className="text-lg">User</div>
            <div className='text-lg'>{maxScoreUser.Username}</div>
        </div>

        <div className='container-User'>
            <div className="text-lg">Score</div>
            <div className='text-lg'>{maxScoreUser.Score}</div>  
        </div>
      </div>
    </div>
  );
}

export default UserScore;
