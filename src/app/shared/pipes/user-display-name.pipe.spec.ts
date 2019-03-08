import { UserDisplayNamePipe } from './user-display-name.pipe';
import { User } from '../interfaces/user.interface';

describe('UserDisplayNamePipe', () => {

  let pipe = null;

  beforeEach(() => {
    pipe = new UserDisplayNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display name and surname', () => {
    const user = <User>{
      person: {
        name: 'Jan',
        surname: 'Nowak'
      }
    };
    const output = pipe.transform(user)
    expect(output).toEqual('Jan Nowak')

    const user2 = <User>{
      person: {
        name: '',
        surname: ''
      }
    };
    expect(pipe.transform(user2)).toEqual(' ')

    const user3 = <User>{
      person: {
        name: ({}).toString(),
        surname: null
      }
    };
    expect(pipe.transform(user3)).toEqual('[object Object] null')
  });
});
