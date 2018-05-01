import { login, logout } from '../../actions/auth';

test('should login', () => {
    const uid = '123';
    expect(login(uid)).toEqual({
        type: 'LOGIN',
        uid
    })
});

test('should logout', () => {
    expect(logout()).toEqual({ 
        type: 'LOGOUT'
    });
});