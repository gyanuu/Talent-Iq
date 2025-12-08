import { SignedOut, SignedIn,SignInButton,SignOutButton, UserButton } from '@clerk/clerk-react';


function App() {
  return (
    <>
      <h1>Welcome to the app</h1>
      <SignedOut>
           <SignInButton mode="modal"/>
           <button>Log in</button>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
     
      <UserButton />
    </>
  )
}

export default App;
