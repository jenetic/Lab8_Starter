// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('is phone number - correct', () => {
    // TODO
    const res = functions.isPhoneNumber("(423) 342-8932")
    expect(res).toBe(true);
});

test('is phone number - correct', () => {
    // TODO
    const res = functions.isPhoneNumber("(000) 000-0000")
    expect(res).toBe(true);
});

test('is phone number - incorrect', () => {
// TODO
    const res = functions.isPhoneNumber("(4233232342sas8932")
    expect(res).toBe(false);
});

test('is phone number - incorrect', () => {
    // TODO
    const res = functions.isPhoneNumber("34")
    expect(res).toBe(false);
});

test('isEmail - correct', () => {
    // TODO
    const res = functions.isEmail("isfdkj@gmail.com")
    expect(res).toBe(true);
});

test('isEmail - correct', () => {
    // TODO
    const res = functions.isEmail("isfsfs@sdfsd.fsd")
    expect(res).toBe(true);
});

test('isEmail - incorrect', () => {
    // TODO
    const res = functions.isEmail("isfsfdfsd.fsd")
    expect(res).toBe(false);
});

test('isEmail - incorrect', () => {
    // TODO
    const res = functions.isEmail("isfsfs.fsd@sdsd")
    expect(res).toBe(false);
});

test('isStrongPassword - correct', () => {
    // TODO
    const res = functions.isStrongPassword("password")
    expect(res).toBe(true);
});

test('isStrongPassword - correct', () => {
    // TODO
    const res = functions.isStrongPassword("password123")
    expect(res).toBe(true);
});

test('isStrongPassword - incorrect', () => {
    // TODO
    const res = functions.isStrongPassword("3Lsr|&9V<A|`)h0")
    expect(res).toBe(false);
});

test('isStrongPassword - incorrect', () => {
    // TODO
    const res = functions.isStrongPassword("I_0oz25TO0R4nPSm?ek7~dJrJ$Y4")
    expect(res).toBe(false);
});

test('isDate - correct', () => {
    // TODO
    const res = functions.isDate("99/94/0699")
    expect(res).toBe(true);
});

test('isDate - correct', () => {
    // TODO
    const res = functions.isDate("00/00/0000")
    expect(res).toBe(true);
});

test('isDate - incorrect', () => {
    // TODO
    const res = functions.isDate("05-12-2022")
    expect(res).toBe(false);
});

test('isDate - incorrect', () => {
    // TODO
    const res = functions.isDate("06/2022")
    expect(res).toBe(false);
});

test('isHexColor - correct', () => {
    // TODO
    const res = functions.isHexColor("#5c84ab")
    expect(res).toBe(true);
});

test('isHexColor - correct', () => {
    // TODO
    const res = functions.isHexColor("5c84ab")
    expect(res).toBe(true);
});

test('isHexColor - incorrect', () => {
    // TODO
    const res = functions.isHexColor("blue")
    expect(res).toBe(false);
});

test('isHexColor - incorrect', () => {
    // TODO
    const res = functions.isHexColor("#jenny")
    expect(res).toBe(false);
});
