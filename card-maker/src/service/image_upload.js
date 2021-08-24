class ImageUploader {
  async upload(file) {
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`;

    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', `${process.env.REACT_APP_CLOUD_PRESET}`);
    const result = await fetch(url, {
      method: 'POST',
      body: data,
    });
    return await result.json();
  }
}

export default ImageUploader;
