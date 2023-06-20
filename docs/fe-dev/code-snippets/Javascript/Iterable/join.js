const join = (sep, iter) => Array.from(iter).join(sep)

join('&', ['a=1', 'c=CC', 'd=DD']) // a=1&c=CC&d=DD
join('&', new Set(['a=1', 'c=CC', 'd=DD'])) // a=1&c=CC&d=DD