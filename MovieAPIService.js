import axios from 'axios';

const API_key = '6c741af6c8869a45a38b46d3cffb9b80';
const API_url = 'https://api.themoviedb.org/3';

const MovieAPIService = {
    getMovies:(query,genre,rating)=>{
        const params = {
            api_key: API_key,
            query: query 
        };
        if(genre){
            params.with_genres = genre;
        }
        if (rating){
            params['vote_average.gte'] = rating;
        }
        
        console.log('Making request to:', `${API_url}/search/movie`);
        console.log('With params:', params);

        return axios.get(`${API_url}/search/movie`,{params}).then(response => response.data)
        .catch(error => {
          console.error('Error fetching movies:', error);
          throw error;
        });
    } 
};
export default MovieAPIService;