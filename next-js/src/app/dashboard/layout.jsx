import Link from 'next/link'

const layout = ({children}) => {
  return (
    <div className='container'>
        <nav className=' flex flex-col sm:flex-row gap-2 py-2'>
             <Link href={'/'}  className='bg-slate-400 rounded px-2'>Home</Link>
             <Link href={'/dashboard'} className='bg-slate-400 rounded px-2'>Dashboard</Link>
             <Link href={'/dashboard/settings'} className='bg-slate-400 rounded px-2'>Settings</Link>
        </nav>
        {children}
    </div>
  )
}

export default layout