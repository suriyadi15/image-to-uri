export function imageToURL(image) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(image)
    fileReader.onload = () => resolve(fileReader.result)
    fileReader.onerror = () => reject(new Error('convert image to URL failed'))
  })
}
