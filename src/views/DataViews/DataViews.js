import React, {
    Component
} from 'react';
import navList from '../../_nav';
import NavBar from './NavBar';

class DataViews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewLink: null
        };
        this.viewData = {
            parent: null,
            childList: []
        };
        this.minimizeSideBar();
        this.setViewLinks(navList.items, true);
        this.setChidrenList();
    }

    componentDidUpdate(prevProps, prevState) {
        this.minimizeSideBar();
        if ((prevProps.match.params.view !== this.props.match.params.view)) {
            this.setViewLinks(navList.items, false);
            this.setChidrenList();
        }
    }

    minimizeSideBar() {
        if (!document.body.classList.contains('sidebar-minimized')) {
            var header = document.querySelector('.app-header');
            header.classList.toggle('app-header-collapsed');
            document.body.classList.toggle('sidebar-minimized');
            var sidebar = document.querySelector('.sidebar-nav');
            if (sidebar) {
                var toggleOn = sidebar.classList.toggle('ps');
                sidebar.classList.toggle('scrollbar-container', toggleOn);
                sidebar.classList.toggle('ps--active-y', toggleOn);
            }
        }
    }

    setViewLinks(items, onLoad) {
        for (let view of items) {
            if (view.viewName === this.props.match.params.view) {
                this.viewData.parent = view.parent;
                if (onLoad) {
                    this.state.viewLink = view.viewLink;
                } else {
                    this.setState({
                        viewLink: view.viewLink
                    });
                }
            } else if (view.children) {
                this.setViewLinks(view.children, onLoad);
            }
        }
    }

    setChidrenList() {
        this.viewData.childList = [];
        for (let view of navList.items) {
            if (view.name === this.viewData.parent) {
                this.viewData.childList = view.children;
            } else if (view.viewName === this.props.match.params.view) {
                this.viewData.childList = view.children;
            }
        }
    }

    render() {
        return ( 
		<div>
			<NavBar childList={ this.viewData.childList } currentView= { this.props.match.params.view }/>
			<iframe title="dataViews" src={ this.state.viewLink } width="100%" height={ window.screen.height - 113 } frameBorder="0"
				style= {{ marginTop: '5px' }}>
				<p>
					<a href={ this.state.viewLink }>
						Fallback link for browsers that don 't support iframes
					</a>
				</p>
			</iframe>
		</div>
        );
    }
}

export default DataViews;