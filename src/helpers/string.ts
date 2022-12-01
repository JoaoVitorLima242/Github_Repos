export const sepateFullName = (full_name: string) => {
  const strArr = full_name.split('/')

  return {
    authorName: strArr[0],
    repoName: strArr[1]
  }
}
