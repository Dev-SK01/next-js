import Link from 'next/link' ;

export default function Home() {
  return (
   
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <h1 className="text-3xl text-white">Welcome to Next JS</h1>
         <Link href={'/dashboard'}>Dashboard</Link>
         <Link href={'/dashboard/settings'}>Settings</Link>

      </main>
     
    
  );
}
