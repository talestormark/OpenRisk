import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';


export default function SideNav() {
  return (
    <div className="flex min-h-screen flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
    <div className="flex h-16 shrink-0 items-center">
      {/* <Image src={profileImage} alt="Your Profile" layout="fill" objectFit="cover" /> */}

      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
  
      
    </div>
    <nav className="flex flex-1 flex-col">
    
      <ul role="list" className="flex flex-1 flex-col gap-y-7">

        {/* Nav Links */}
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            <NavLinks />
          </ul>
        </li>

        {/* Team links*/}
        <li>
          <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                  P
                </span>
                <span className="truncate">PresightDevelopers</span>
              </a>
            </li>

            {/* ... (other teams) */}
          </ul>
        </li>
        {/* Profile link */}
        <li className="-mx-6 mt-auto">
          <a href="#" className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800">
            <img className="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <span className="sr-only">Your profile</span>
            <span aria-hidden="true">Tom Cook</span>
          </a>
      </li>
      {/* <li className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800">
        <form action={async () => { 'use server'; await signOut(); }}>
          <button className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </li> */}
      </ul>
    </nav>
    
  </div>
  );
}
