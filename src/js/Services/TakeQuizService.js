import Rebase from 're-base';
import { firebaseUrl } from 'app/constants';

class TakeQuizService {
  constructor() {
    this._firebaseEndpoint = Rebase.createClass(firebaseUrl);
  }

  syncState(url, parameters) {
    this._firebaseEndpoint.syncState(url, parameters);
  }
};

export default TakeQuizService;
