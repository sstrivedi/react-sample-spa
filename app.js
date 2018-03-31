var destination = document.querySelector('#container');
var {
	Router,
	Route,
	IndexRoute,
	IndexLink,
	hashHistory,
	Link
} = ReactRouter;
var App = React.createClass({
	render: function() {
		return (
		<div>
			<h1>Simple SPA</h1>
			<ul className="header">
				<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
				<li><Link to="/stuff" activeClassName="active">Stuff</Link></li>
				<li><Link to="/contact" activeClassName="active">Contact</Link></li>
			</ul>
			<div className="content">
				{this.props.children}
			</div>
		</div>
	)
  }
});

var Home = React.createClass({
  render: function() {
	  return (
		<div>
		  <h2>Hi</h2>
		  <p>Cras facilisis urna ornare ex volutpat, et
		  convallis erat elementum. Ut aliquam, ipsum vitae
		  gravida suscipit, metus dui bibendum est, eget rhoncus nibh
		  metus nec massa. Maecenas hendrerit laoreet augue
		  nec molestie. Cum sociis natoque penatibus et magnis
		  dis parturient montes, nascetur ridiculus mus.</p>

		  <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
		</div>
	  );
	}
});

var Stuff = React.createClass({
  render: function() {
	  return (
		<div>
		  <h2>Stuff</h2>
		  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos non rerum sint aut atque, iste repellendus eius itaque explicabo nobis facere, commodi sunt rem quos aperiam corporis. Mollitia, est.</p>

		  <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
		</div>
	  );
	}
});

var Contact = React.createClass({
  render: function() {
	  return (
		<div>
		  <h2>Contact</h2>
		  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos non rerum sint aut atque, iste repellendus eius itaque explicabo nobis facere, commodi sunt rem quos aperiam corporis. Mollitia, est.</p>

		  <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
		</div>
	  );
	}
});

ReactDOM.render(
  <Router history={hashHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/stuff" component={Stuff} />
		<Route path="/contact" component={Contact} />
	</Route>
  </Router>,
  destination
);
