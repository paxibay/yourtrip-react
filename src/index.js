import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css';

import WrappedApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(WrappedApp, document.getElementById('root'));
registerServiceWorker();
