import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';


export default function SideNav() {
  return (
    // <div className="flex h-full flex-col px-3 py-4 md:px-2">
    //   <Link
    //     className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
    //     href="/"
    //   >
    //     <div className="w-32 text-white md:w-40">
    //       <AcmeLogo />
    //     </div>
    //   </Link>
    //   <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
    //     <NavLinks />
    //     <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
    //     <form action={async () => {
    //         'use server';
    //         await signOut();
    //       }}>
    //       <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
    //         <PowerIcon className="w-6" />
    //         <div className="hidden md:block">Sign Out</div>
    //       </button>
    //     </form>
    //   </div>
    // </div>

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
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            <NavLinks />
            {/* ... (other list items) */}
          </ul>
        </li>
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
            {/* ... (other list items) */}
          </ul>
        </li>
        <li className="-mx-6 mt-auto">
          <a href="#" className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800">
            <img className="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <span className="sr-only">Your profile</span>
            <span aria-hidden="true">Tom Cook</span>
          </a>
      </li>
      </ul>
    </nav>
  </div>
  );
}
