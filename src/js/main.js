if (process.env.NODE_ENV !== 'production') {
	if (module.hot) {
		module.hot.accept();
	}
}

import '../../src/css/main.scss';
import ReactDOM from 'react-dom';

import routes from './components/routes';

ReactDOM.render(routes, document.getElementById('main'));
