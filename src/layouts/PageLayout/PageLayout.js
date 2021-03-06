import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>MIM STATS</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Canard</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>NewsList</Link>
    {' · '}

    <Link to='/news' activeClassName='page-layout__nav-item--active'>NewsStats</Link>

    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
