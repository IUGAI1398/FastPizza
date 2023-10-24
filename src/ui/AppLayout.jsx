import React from 'react'
import Header from './Header'
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';

export default function AppLayout() {
  const navigaton = useNavigation();
  const isLoading = navigaton.state === "loading";
  console.log(navigaton);
  return (
    <div className='grid-rows-[auto_1fr_auto] grid h-screen'>

   {isLoading && <Loader/>}
      <Header />
      <div className='overflow-scrool'>
      <main className='max-w-3xl  mx-auto'>
        <Outlet />
      </main>
      </div>
      <CartOverview />
    </div>
  )
}
