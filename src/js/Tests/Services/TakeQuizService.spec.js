import TakeQuizService from 'services/TakeQuizService';
import Rebase from 're-base';
import Constants from '../../constants';

fdescribe('TakeQuiz Service', () => {
  let firebaseEndpointFake
  let syncStateUrl;
  let syncStateParameters;
  
  beforeEach(() => {
    firebaseEndpointFake = jasmine.createSpyObj('endpoint', ['syncState']);;
    
    spyOn(Rebase, 'createClass').and.returnValue(firebaseEndpointFake)

    syncStateUrl = 'quizUrl';
    syncStateParameters = {
      context: this,
      state: 'state',
    }
    
    const takeQuizService = new TakeQuizService();
          
    takeQuizService.syncState(syncStateUrl, syncStateParameters);
  });
  
  it('should setup connection to firebase', () => {
    expect(firebaseEndpointFake.syncState)
      .toHaveBeenCalledWith(syncStateUrl, syncStateParameters);
  });
});
