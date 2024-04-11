"use client";
import { signIn , useSession , signOut} from "next-auth/react";

function ProfileIcon() {
  const { data : session , status}= useSession();

  if(status === "authenticated"){
    return (
      <div>
      <button onClick={()=>signOut("github")} >Sign Out</button>
      </div>
    )

  }
  return <button onClick={() => signIn("github")}>Sign In</button>;
}

export default ProfileIcon;
