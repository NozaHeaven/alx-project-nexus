const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e59636afa2093123074d5c2538b154b6',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;