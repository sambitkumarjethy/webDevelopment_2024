import { CountryCodePipe } from './country-code.pipe';

describe('CountryCodePipe', () => {
  it('create an instance', () => {
    const pipe = new CountryCodePipe();
    expect(pipe).toBeTruthy();
  });
});
