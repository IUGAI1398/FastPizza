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
    <div className='layout'>

   {isLoading && <Loader/>}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  )
}
