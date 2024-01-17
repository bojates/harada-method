"use client";
import { Session } from "next-auth/types";
import React, { useState, useEffect } from 'react'
import Sidebar from './side-nav';
import MenuBarMobile from './menu-bar-mobile';

export default function SideNav({ session }: { session: Session | null }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
  <>
    <MenuBarMobile setter={setShowSidebar} />
    <Sidebar show={showSidebar} setter={setShowSidebar} session={session} />
  </>
  )
}
