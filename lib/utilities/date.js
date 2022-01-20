export function validateDateString(props, propName) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(props[propName])) {
    return new Error(
      `${ propName }'s value '${ props[propName] }' is not a valid ISO date string ('YYYY-MM-DD').`
    );
  }
}

