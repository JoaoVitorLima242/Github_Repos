export const sepateFullName = (fullName = '') => {
  const strArr = fullName.split('/')

  return {
    authorName: strArr[0],
    repoName: strArr[1]
  }
}
