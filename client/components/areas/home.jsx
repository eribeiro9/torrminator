import React from 'react'
import Kickass from 'kickass-torrent'

searchTorrent = (e) => {
  e.preventDefault()

  Kickass({
    q: e.target.search.value,
    url: 'http://kickasstorrents.eu/'
  }, function (err, res) {
    if (err) {
      console.error(err)
    } else {
      console.log(res)
    }
  })

  e.target.search.value = ''
}

export const Home = () => (
  <div id="home-layout" className="ui centered grid">
    <div className="eight wide column">
      <h1 id="home-header" className="ui center aligned header">Torrminator</h1>
      <form id="home-form" onSubmit={ searchTorrent } className="ui form">
        <div className="ui big transparent fluid icon input">
          <input type="text" name="search" placeholder="Find a torrent..." />
          <i className="search icon"></i>
        </div>
      </form>
    </div>
  </div>
)
