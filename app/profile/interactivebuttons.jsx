import React from 'react';

const InteractiveButtons = () => {
  
  const handleCreateAccount = () => {
    // Handle logic for creating an account
    console.log('Creating Account');
  };

  const handleSignIn = () => {
    // Handle logic for signing in
    console.log('Signing In');
  };

  return (
    <div>
      <button onClick={handleCreateAccount}>Create Account</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default InteractiveButtons;