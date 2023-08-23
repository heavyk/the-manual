
export function parse(src: string): Array<string> {
  src = src.trim()
  var out = new Array<string>()
  let start = 0
  let i = 0
  do {
    if (src.at(i) == ' ') {
      out.push(src.substr(start, i - start))
      start = i+1
    }
  } while (++i < src.length)
  out.push(src.substr(start, i - start))
  return out
}
