import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state={
			modalView: false
		}
	}
	toggleModal(){
		this.setState(
			{modalView: !this.state.modalView}
		)
	}
	render(){
		const modalView=this.state.modalView;
		return (
			<header>
				{modalView ? (
					<InfoModal toggleModal={this.toggleModal.bind(this)} />
				) : (
					<div>
						<TopNav toggleModal={this.toggleModal.bind(this)} newGame={this.props.newGame} />
						<h1>HOT or COLD</h1>
					</div>
				)}
			</header>
		);
	}
};

// export default function Header(props) {
//     return (
//         <header>
//             <TopNav newGame={props.newGame} />
//             <InfoModal />
//             <h1>HOT or COLD</h1>
//         </header>
//     );
// };