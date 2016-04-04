Home = React.createClass({
  searchTorrent(e) {
    e.preventDefault()

    console.log(e.target.search.value)

    e.target.search.value = ''
  },

  render() {
    return (
      <div id="home-layout" className="ui centered grid">
        <div className="eight wide column">
          <h1 id="home-header" className="ui center aligned header">Torrminator</h1>
          <form id="home-form" onSubmit={ this.searchTorrent } className="ui form">
            <div className="ui big transparent fluid icon input">
              <input type="text" name="search" placeholder="Find a torrent..." />
              <i className="search icon"></i>
            </div>
          </form>
        </div>
      </div>
    )
  }
})
