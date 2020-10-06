import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
import UnauthorizedRoute from 'base-shell/lib/components/UnauthorizedRoute/UnauthorizedRoute'
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute'

const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const MyAccount = lazy(() => import('../pages/MyAccount/MyAccount'))
const Users = lazy(() => import('../pages/Users'))

const getDefaultRoutes = (appConfig) => {
  const { pages } = appConfig || {}
  const { PageNotFound = () => <div>Page not found</div> } = pages || {}

  return [
    <UnauthorizedRoute path="/signin" redirectTo="/home" exact component={SignIn} />,
    <AuthorizedRoute path="/my_account" exact component={MyAccount} />,
    <AuthorizedRoute path="/users" exact component={Users} />,
    <Route component={PageNotFound} />,
  ]
}

export default getDefaultRoutes
