import {Link, withRouter} from 'react-router-dom'
// import {useState, useEffect} from 'react'

import {CiSearch} from 'react-icons/ci'
import SearchContext from '../../context/SearchContext'

import './index.css'

const Header = props => {
  const renderSearchBar = () => (
    <SearchContext.Consumer>
      {value => {
        const {searchInput, onChangeSearchValue, onClickSearchButton} = value

        const onChangeHandler = event => {
          onChangeSearchValue(event.target.value)
        }

        const onSearchHandler = event => {
          event.preventDefault()
          const {history} = props
          onClickSearchButton()
          history.push(`/search`)
        }

        return (
          <div className='search-container'>
            <input
              type='text'
              className='search-input'
              onChange={onChangeHandler}
              value={searchInput}
              placeholder='Search'
            />
            <button
              className='searchButton'
              type='button'
              onClick={onSearchHandler}
            >
              <CiSearch className='search-logoo' />
            </button>
            <button className='butn'>Search</button>
          </div>
        )
      }}
    </SearchContext.Consumer>
  )

  return (
    <nav className='navbar-container'>
      <div className='logo-container'>
        <h1 className='page-logo'>movieDB</h1>
      </div>
      <div className='nav-content'>
        <ul className='nav-items-list'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              <h1>Popular</h1>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/top-rated'>
              <h1>Top Rated</h1>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/upcoming'>
              <h1> Upcoming</h1>
            </Link>
          </li>
        </ul>
      </div>
      {renderSearchBar()}
    </nav>
  )
}

export default withRouter(Header)
