import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
		<Layout>
			<Drawer title="Recipe Search">
				<Navigation>
					<a href="/recipe">Home</a>
				</Navigation>
			</Drawer>
			<Content>
				<div className="page-content" />
				<Main></Main>
			</Content>
		</Layout>
	</div>
  );
}

export default App;
