import Rebase from 're-base';
import { firebaseUrl } from 'app/constants';

export class TakeQuizService {
	constructor() {
		this.firebaseEndpoint = Rebase.createClass(firebaseUrl);
	}

	syncState(url, parameters) {
		this.firebaseEndpoint.syncState(url, parameters);
	}
}
