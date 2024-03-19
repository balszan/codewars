function diamond(n) {
    if (n % 2 === 0 || n < 1) {
      return null;
    }
  
    let diamondString = '';
    const midpoint = Math.floor(n / 2) + 1;
  
    for (let i = 1; i <= n; i++) {
      const spaces = Math.abs(midpoint - i);
      const stars = n - 2 * spaces;
  
      diamondString += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
    }
  
    return diamondString;
  }