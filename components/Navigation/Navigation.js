import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Button from '../Button/Button';

export default function Navigation() {
  return (
    <Disclosure as="nav" className="navbar navbar-expand-lg navbar-light menu--navbar">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand" >Lippsa</a>
            </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/pricing">
                     <a className="nav-link" >Pricing</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/faq">
                    <a className="nav-link">FAQS</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/auth/signin">
                    <a className="nav-link font-weight-bold" >Sign in</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Button size={'normal'} to={'/auth/signup'}  text={'Try for Free'}  />
                </li>
              </ul>
            </div>
          </div>
    </Disclosure>
  )
}
