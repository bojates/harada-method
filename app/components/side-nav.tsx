'use client';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation";
// import { signOut, signIn } from "@/auth";
import { signOut } from 'next-auth/react'
import { SlHome } from 'react-icons/sl'
import { GrOverview } from "react-icons/gr";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'

// import logo from '@/img/logo.svg'

export default function Sidebar({ show, setter, session }) {
    // const router = useRouter();
    const pathname = usePathname();
    const isLoggedIn = !!session;

    // Define our base class
    const className = "bg-pink-100 w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route }) => {
        // Highlight menu item based on currently displayed route
        const colorClass = pathname === route ? "text-blue-800" : "text-black/90 hover:text-blue-800";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
                className={`flex gap-1 [&>*]:my-auto font-semibold text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>
                <div>{name}</div>
            </Link>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}
        />
    )


    function LogInOut() {
        if (session?.user) {
          return (
            <form
              action={async () => {
                await signOut({callbackUrl: '/', redirect: true, 
                });
              }}
            >
              <div className="flex gap-1 [&>*]:my-auto font-semibold text-md pl-6 py-3 border-b-[1px] border-b-white/10 text-black/90 hover:text-blue-800">
              <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    <FaSignOutAlt />
                </div>
            <button>
              Sign Out
            </button>
            </div>

          </form>
          )
        }

        return (
            <div className="flex gap-1 [&>*]:my-auto font-semibold text-md pl-6 py-3 border-b-[1px] border-b-white/10 text-black/90 hover:text-blue-800">
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    <FaSignInAlt />
                </div>
                <button>
                    <a href="/api/auth/signin">Sign In</a>
                </button>
            </div>
        )
      };
      
    return (
        <>
            <div className={`${className}${appendClass}`}>
                {/* <div className="p-2 flex"> */}
                    {/* <Link href="/"> */}
                        {/*eslint-disable-next-line*/}
                        {/* <img src={logo.src} alt="Company Logo" width={300} height={300} /> */}
                    {/* </Link> */}
                {/* </div> */}
                
                <div className="pt-4 flex flex-col">
                    { !isLoggedIn && (
                    
                    <MenuItem
                        name="Home"
                        route="/"
                        icon={<SlHome />}
                    />
                    )}
                    { isLoggedIn && (
                    <>
                    <MenuItem
                        name="Overview"
                        route="/goals"
                        icon={<GrOverview />}
                    />
                    
                    <MenuItem
                        name="Qualities"
                        route="/goals/qualities"
                        icon={<FaScaleUnbalanced />}
                    />
</>
                    ) }
                    {/* <MenuItem
                        name="Contact"
                        route="/contact"
                        icon={<BsEnvelopeAt />}
                    /> */}
                    <br />
                    <LogInOut />
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}