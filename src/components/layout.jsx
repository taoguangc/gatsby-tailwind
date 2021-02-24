import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li className='px-4'>
    <Link
      to={props.to}
      className='block py-8'
      activeClassName='border-b-2 border-blue-600'
      partiallyActive={props.to === '/' ? false : true}
    >
      {props.children}
    </Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <>
      <header className='fixed z-50 w-full bg-white top-0 flex flex-wrap border-b border-gray-200'>
        <div className='container m-auto px-4 flex flex-wrap items-center'>
          <div className=''>
            <h2>
              <Link to='/'>Emptyarea</Link>
            </h2>
          </div>
          <div className='lg:flex flex-grow items-center hidden'>
            <ul className='flex lg:flex-row ml-auto'>
              <ListLink to='/'>首页</ListLink>
              <ListLink to='/blog/'>博客</ListLink>
              <ListLink to='/about/'>关于</ListLink>
              <ListLink to='/contact/'>联系</ListLink>
            </ul>
          </div>
        </div>
      </header>
      <main className='mt-32 mb-16 container m-auto flex flex-wrap'>
        {children}
      </main>
      <footer className='py-24 bg-black flex flex-wrap text-white'>
        <section className='container m-auto'>
          <h2>杭州白拿拿网络科技有限公司</h2>
          <h5>杭州总公司：杭州市滨江区滨安路650号 IX-WORK C座203</h5>
          <h5>
            E-mail: <a href='mailto:sales@vv3c.com'>sales@vv3c.com</a>
          </h5>
        </section>
        <div></div>
      </footer>
    </>
  )
}
