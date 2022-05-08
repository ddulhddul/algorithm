/*
1233. Remove Sub-Folders from the Filesystem
https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/

Given a list of folders folder, return the folders after removing all sub-folders in those folders. You may return the answer in any order.

If a folder[i] is located within another folder[j], it is called a sub-folder of it.

The format of a path is one or more concatenated strings of the form: '/' followed by one or more lowercase English letters.

For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string and "/" are not.

*/
/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = function (folder) {
  const len = folder.length
  const arr = []
  const arrlen = []
  // eslint-disable-next-line no-labels
  foo: for (let i = 0; i < len; i++) {
    const value = folder[i] + '/'
    const valuelen = value.length
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arrlen[j] >= valuelen) {
        if (arr[j].startsWith(value)) {
          arr.splice(j, 1)
          arrlen.splice(j, 1)
          // eslint-disable-next-line no-labels
          continue
        }
      } else if (value.startsWith(arr[j])) {
        // eslint-disable-next-line no-labels
        continue foo
      }
    }
    arr.push(value)
    arrlen.push(valuelen)
  }
  return arr.map((obj) => {
    return obj.slice(0, -1)
  })
}

console.log(
  removeSubfolders(
    ['/aa/ab/ac/ae', '/aa/ab/af/ag', '/ap/aq/ar/as', '/ap/aq/ar', '/ap/ax/ay/az', '/ap', '/ap/aq/ar/at', '/aa/ab/af/ah', '/aa/ai/aj/ak', '/aa/ai/am/ao']
  )
)
