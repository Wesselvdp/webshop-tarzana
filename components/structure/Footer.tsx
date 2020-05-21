import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import EmailSubmit from '@components/ui/EmailSubmit' 
import {Formik} from 'formik'
type T = any

const FooterComponent: FC<T> = () => {
  return (
    <Footer>
     <div className="container">
       <div className="col">
         <h3>Newsletter</h3>
         {/* <input type="text" name="" id="" placeholder="Your e-mail here"/>
         <input type="submit" name="" id=""/> */}
        <EmailSubmit />
       </div>

       {/* Logo */}
       <div className="col">
        <h1>TARZANA</h1>
       </div>

      {/* Navigation */}
       <div className="col">
          <ul role="nav">
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Returns & exchanges</a>
              </Link>
            </li>
          </ul>
       </div>
     </div>
    </Footer>

  )
}

const Footer = styled.footer`
  background-color: #fff;
  color: #000;
  text-align: left;
  
  .container {
    max-width: ${({theme}) => theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    display: flex;

    .col {
      flex: 1;
    }
  }

  ul {
    columns: 2;
    padding-left: 0;
      list-style: none;

    li {
    }
  }
`

export default FooterComponent