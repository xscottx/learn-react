import authReducer from '../../reducers/auth';

test('should login', () => {
    const uid = 'abc'
    const action = {
        type: 'LOGIN',
        uid
    }

    const state = authReducer({}, action);
    expect(state.uid).toEqual(uid);
})

test('should logout', () => {
    const action = {
        type: 'LOGOUT'
    }

    const state = authReducer({ uid: 'anything'}, action);
    expect(state).toEqual({});
})