import Rebase from 're-base';
import { firebaseUrl } from 'app/constants';

class TakeQuizService {
	constructor() {
		this.firebaseEndpoint = Rebase.createClass(firebaseUrl);
	}

	syncState(url, parameters) {
		this.firebaseEndpoint.syncState(url, parameters);
	}
}

export default TakeQuizService;
