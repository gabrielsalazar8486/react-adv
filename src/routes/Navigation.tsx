import logo from '../logo.svg';
// import {LazyPage1, LazyPage2, LazyPage3} from "../01-lazyload/pages";
import {} from "../01-lazyload/pages";
import {BrowserRouter, Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from "react";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {
  const Lazy1 = lazy(() => /* webpackChunkName: "LazyPage1" */import("./../01-lazyload/pages/LazyPage1"))
  const Lazy2 = lazy(() => /* webpackChunkName: "LazyPage2" */import("./../01-lazyload/pages/LazyPage2"))
  const Lazy3 = lazy(() => /* webpackChunkName: "LazyPage3" */import("./../01-lazyload/pages/LazyPage3"))

  const routes = [
    {to: "/", path: "/*", name: "Shopping store", Component: ShoppingPage},
    {to: "/lazy2", path: "lazy2", name: "Lazy2", Component: Lazy2},
    {to: "/lazy3", path: "lazy3", name: "Lazy3", Component: Lazy3}
  ]
  return (
      <Suspense fallback={<>Loadding...</>} >
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={ logo } alt="React Logo" />
              <ul>
                {
                  routes.map(({to, name})=>(
                      <li key={to}>
                        <NavLink to={to} className={({isActive}) => isActive ? "nav-active" : ""}>{name}</NavLink>
                      </li>
                  ))
                }
              </ul>
            </nav>

            <Routes>
              {
                routes.map(({path, Component})=>(
                    <Route key={path} path={path} element={ <Component /> }/>
                ))
              }
              <Route path={"/*"} element={<Navigate to={routes[0].to} replace /> }/>
            </Routes>

          </div>
        </BrowserRouter>
      </Suspense>
  );
}