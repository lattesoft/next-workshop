import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/about', label: 'ABOUT' },
  { href: '/workshop', label: 'WORKSHOP' },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
  <nav>
    <div className="nav-image">
      <img className="image-show" src="/static/framework_icon/next.png" alt="Nextjs icon"/>
      <img className="image-show" src="/static/framework_icon/react.png" alt="Reactjs icon"/>
      <img className="image-show" src="/static/framework_icon/redux.png" alt="Reduc icon"/>
    </div>
    <h1 className="nav-center-text">How to train your <span>"React/Nextjs"</span> @Bangkok</h1>
    <div className="nav-image">
      <img className="image-show" src="/static/company_icon/AW_Logo_LB-23-circle.png" alt="hello"/>
      <img className="image-show" src="/static/company_icon/digital-circle.png" alt="hello"/>
      <img className="image-show" src="/static/company_icon/Lattesoft-Circle.png" alt="hello"/>
    </div>
  </nav>
)

export default Nav
