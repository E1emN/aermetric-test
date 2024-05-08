export function objectToQueryString(obj: {[key:string]: string}) {
    const queryParams = Object.entries(obj)
      .filter(([key, value]) => value !== '' && value !== undefined)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    return `?${queryParams}`;
  }