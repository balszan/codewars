function meeting(s) {
    return s.toUpperCase().split(';')
        .map(name => name.split(':').reverse().join(', '))
        .sort()
        .map(name => `(${name})`)
        .join('');
}