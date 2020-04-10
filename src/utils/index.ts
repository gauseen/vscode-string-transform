
export function helloWorld_To_HelloWorld () {
  return compose((arr: string[]) => transformWordsToString(arr, firstUpperCase, ''), splitUpperToArray)
}

export function helloWorld_To_HELLO_WORLD () {
  return compose((arr: string[]) => transformWordsToString(arr, toUpperCase, '_'), splitUpperToArray)
}

export function HelloWorld_To_helloWorld () {
  return compose(firstLowerCase)
}

export function HelloWorld_To_HELLO_WORLD () {
  return compose((arr: string[]) => transformWordsToString(arr, toUpperCase, '_'), splitUpperToArray)
}

export function HELLO_WORLD_To_helloWorld () {
  return compose(firstLowerCase, (arr: string[]) => transformWordsToString(arr, firstUpperCase, ''), splitUnderlineToArray)
}

export function HELLO_WORLD_To_HelloWorld () {
  return compose((arr: string[]) => transformWordsToString(arr, firstUpperCase, ''), splitUnderlineToArray)
}






/**
 * 首字母大写
 * 
 * @param  {} [first
 * @param  {string} ...rest]
 * @returns string
 */
export function firstUpperCase ([first, ...rest]: string): string {
  return first.toUpperCase() + rest.join('').toLowerCase()
}

/**
 * 首字母小写
 * 
 * @param  {} [first
 * @param  {string} ...rest]
 * @returns string
 */
export function firstLowerCase ([first, ...rest]: string): string {
  return first.toLowerCase() + rest.join('')
}

/**
 * 小写字母转大写
 * 
 * @param  {string} str
 * @returns string
 */
export function toUpperCase (str: string): string {
  return str.toUpperCase()
}

/**
 * 每个单词首字母大写
 * 
 * @param  {string[]} words
 * @param  {(word:string)=>string} transformMethod
 * @param  {string=''} hyphen
 * @returns string
 */
export function transformWordsToString (words: string[], transformMethod: (word: string) => string, hyphen: string = ''): string {
  return words.map(word => transformMethod(word)).join(hyphen)
}

// export function () {}

/**
 * 以大写字母为界限，拆分成单词数组
 * 
 * @param  {string} strPart
 * @returns string[]
 */
export function splitUpperToArray (strPart: string): string[] {
  return strPart.replace(/([A-Z])/g, '_$1').split('_').filter(Boolean)
}

/**
 * 删除下划线
 * 
 * @param  {string} strPart
 * @returns string
 */
export function splitUnderlineToArray (strPart: string): string[] {
  return strPart.split('_')
}

export function compose (...funcs: Function[]) {
  if (funcs.length === 0) {
    return (arg: any) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}
