import { objectToQueryString } from "../_helpers";

describe('objectToQueryString', () => {
  it('should return empty string when passed an empty object', () => {
    const result = objectToQueryString({});
    expect(result).toBe('?');
  });

  it('should convert object with one key-value pair to query string', () => {
    const obj = { key: 'value' };
    const result = objectToQueryString(obj);
    expect(result).toBe('?key=value');
  });

  it('should encode special characters properly', () => {
    const obj = { key: 'va lu&', name: 'some_name' };
    const result = objectToQueryString(obj);
    expect(result).toBe('?key=va%20lu%26&name=some_name');
  });

  it('should ignore empty string values', () => {
    const obj = { key1: 'value1', key2: '', key3: '' };
    const result = objectToQueryString(obj);
    expect(result).toBe('?key1=value1');
  });

  it('should handle multiple key-value pairs', () => {
    const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
    const result = objectToQueryString(obj);
    expect(result).toBe('?key1=value1&key2=value2&key3=value3');
  });
});