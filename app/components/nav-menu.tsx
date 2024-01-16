"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE = "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

const NAV = [
  {'name': 'Home', 
  'path': '/'} , 
  { 'name': 'Qualities', 
  'path': '/qualities'}
] 
function AuthButton() {

    // if (session) {
    //     return (
    //         <>
    //         {session?.user?.name} <br/ >
    //         <button onClick={() => signOut()}>Sign out</button>
    //         </>
    //     );
    // };
    // return (
    //     <>
    //     Not signed in <br />
    //     <button onClick={() => signIn()}>Sign in</button>
    //     </>
    // )
    // return <p>Holding
        
    // </p>
}   

export default function NavMenu() {
    const pathname = usePathname();
    const links =  NAV.map(navItem => {
      return (
        <Link href="{navItem.path}">
          <li key="{navItem.name}"  className={pathname === navItem.path ? ACTIVE_ROUTE : INACTIVE_ROUTE}>{navItem.name}</li>
        </Link>
      );
    });
  return (
    <div>
      <AuthButton />
      <hr className="my-4" />
      <ul>
        {links}
      </ul>
    </div>
  );
};