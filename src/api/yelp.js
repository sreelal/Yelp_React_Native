import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Xc5CC0wOY1zI2rOhZga_tcGROLgjRRsAh-eJpoxgS92yQGSbqwKS9aIwR1T2iox5UfVBYLW2O43iwvJxDsMUgb74ZwAAGH0iYEzIDiJQdRSOtAFzZT4uTTPPjz5GXnYx'
    }
})