"use client";

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";


export default function Home() {

  return (
    <SessionProvider>
      <OtherHome/>
      </SessionProvider>
 
  );
}

function OtherHome(){
  const session = useSession();
  return(<>
  {session.status ==="authenticated" && <button onClick={()=>signOut()}>Sign Out</button>}
  {session.status ==="unauthenticated" && <button onClick={()=>signIn()}>Sign In</button>}
  </>)
}