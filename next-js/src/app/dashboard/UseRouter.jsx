"use client";
import {useRouter} from 'next/navigation';

const UseRouterComponent = () => {
    const router = useRouter();

    const back =() => {
        router.push('/');
    }
  return (
    <button onClick={back}>useRouter</button>
  )
}

export default UseRouterComponent;