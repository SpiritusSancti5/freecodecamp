var Leaderboard = React.createClass({

  getInitialState: function() {
    return {
      data: [],
      selected: ''
    };
  },

  display: function(response, url) {
    this.setState({
      data: response,
      selected: url
    })
  },

  getList: function(url) {
    $.ajax({
      url: 'https://fcctop100.herokuapp.com/api/fccusers/top/' + url,
      dataType: 'json',
      cache: false,
      success: function(response) {
                  this.display(response, url);
               }.bind(this),
      error: function(xhr, status, err) {
                console.error('https://fcctop100.herokuapp.com/api/fccusers/top/' + url, status, err.toString());
             }.bind(this)
    });
  },

  componentDidMount: function() {
    this.getList('recent');
  },

  render: function() {
    return (
      <table className='table'>
        <TableHeader reOrder={this.getList} selected={this.state.selected}/>
        <TableList data={this.state.data}/>
      </table>
    )
  }
});


var TableHeader = React.createClass({

  onClick: function(url) {
    this.props.reOrder(url);
  },

  render: function() {
    var recentPoints = '',
        totalPoints = '';

    this.props.selected == 'recent' ? recentPoints = 'selected' : totalPoints = 'selected';

    return (
        <thead>
          <tr>
            <td>#</td>
            <td>Camper</td>
            <td className={recentPoints} onClick={this.onClick.bind(this, 'recent')}>Past 30 days</td>
            <td className={totalPoints} onClick={this.onClick.bind(this, 'alltime')}>Total Points</td>
          </tr>
        </thead>
    )
  }
});


var TableList = React.createClass({

  render: function() {
    var position = 1;
    var fccurl = 'https://www.freecodecamp.com/';
    var rows = this.props.data.map(function(user) {
      return (
        <tr key={user.id}>
          <td>{position++}</td>
          <td><img src={user.img}></img><a href={fccurl + user.username}>{user.username}</a></td>
          <td>{user.recent}</td>
          <td>{user.alltime}</td>
        </tr>
      );
    });
    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
});

ReactDOM.render(<Leaderboard />,$('#content')[0]);
