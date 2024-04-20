function encode(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.replace(/[a-zA-Z]/g, char => alphabet.indexOf(char) % 26 + 1);
  }