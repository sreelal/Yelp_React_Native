# Yelp React Native App 🍽️

A React Native application that demonstrates how to build location-based business search functionality using real-world API integration patterns.

## Project Overview

This application showcases:
- 🗺️ **Location-Based Services** - Geolocation and nearby business search
- 🔍 **API Integration** - Real Yelp Fusion API integration
- 📱 **React Native Best Practices** - Modern mobile development patterns
- 🎨 **Responsive UI** - Beautiful, user-friendly interface
- 🔄 **Data Fetching** - Efficient API calls and state management

## Features

🍽️ **Browse Local Restaurants** - Find businesses near your location  
⭐ **Ratings & Reviews** - View ratings and user reviews  
📍 **Location Search** - Search businesses by area  
💾 **Favorite Lists** - Save your favorite places  
📞 **Business Details** - Call, visit website, get directions  
⏰ **Hours & Info** - Check operating hours and contact info  

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Yelp Fusion API** - Real business data
- **Axios** - HTTP client for API calls
- **Geolocation API** - Device location services
- **Expo** - Development and deployment platform

## Prerequisites

- Node.js 12+
- npm or yarn
- React Native CLI / Expo CLI
- iOS Simulator or Android Emulator
- Yelp Fusion API key
- Device location permissions

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/sreelal/Yelp_React_Native.git
cd Yelp_React_Native
npm install
```

### 2. Get Yelp API Key

1. Go to [Yelp Developers](https://www.yelp.com/developers)
2. Create an account and register your app
3. Copy your Yelp Fusion API key

### 3. Configure API Key

Create or update `src/config.js`:

```javascript
export const YELP_API_KEY = 'your_api_key_here';
export const YELP_API_BASE_URL = 'https://api.yelp.com/v3';
```

### 4. Run Application

Using Expo:
```bash
npm start -c
```

Then select your platform:
- Press `i` for iOS Simulator
- Press `a` for Android Emulator
- Scan QR code with Expo Go app on physical device

## Project Structure

```
Yelp_React_Native/
├── src/
│   ├── screens/
│   │   ├── SearchScreen.js      # Main search interface
│   │   ├── ResultsScreen.js     # Business list results
│   │   └── DetailScreen.js      # Detailed business info
│   ├── services/
│   │   ├── yelpAPI.js           # API integration
│   │   └── geolocation.js       # Location services
│   ├── components/
│   │   ├── BusinessCard.js      # Reusable business card
│   │   ├── RatingDisplay.js     # Star rating component
│   │   └── SearchBar.js         # Search input
│   ├── utils/
│   │   └── helpers.js           # Utility functions
│   └── App.js
├── package.json
└── README.md
```

## API Integration

### Yelp Fusion API

The app uses Yelp's business search endpoints:

```
GET /v3/businesses/search

Parameters:
- location: string (search location)
- latitude: number (device latitude)
- longitude: number (device longitude)
- radius: number (search radius in meters)
- limit: number (results limit)
- sort_by: string (best_match, rating, review_count, distance)
```

### Example API Call

```javascript
import axios from 'axios';

const searchBusinesses = async (latitude, longitude) => {
  try {
    const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}`
      },
      params: {
        latitude,
        longitude,
        radius: 5000,  // 5km
        limit: 20
      }
    });
    return response.data.businesses;
  } catch (error) {
    console.error('Yelp API Error:', error);
  }
};
```

## Key Screens

### Search Screen
- Input location or use current location
- Filter options (category, price range, open now)
- Search button with loading indicator

### Results Screen
- List of businesses matching search
- Business cards with ratings and distance
- Tap to view details
- Pull-to-refresh functionality

### Detail Screen
- Full business information
- Photos gallery
- Complete address and directions
- Phone and website links
- User reviews section
- Hours of operation

## Features in Detail

### Geolocation

```javascript
// Get current device location
import * as Location from 'expo-location';

const getLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return null;
  
  const location = await Location.getCurrentPositionAsync({});
  return location.coords;
};
```

### Search Functionality

```javascript
// Search by location or coordinates
const handleSearch = async (searchTerm, location) => {
  setLoading(true);
  try {
    const results = await searchBusinesses(location, searchTerm);
    setResults(results);
  } catch (error) {
    setError(error.message);
  }
  setLoading(false);
};
```

### Filtering & Sorting

- **By Category** - Restaurants, cafes, bars, etc.
- **By Price** - $ to $$$$
- **By Rating** - 1-5 stars
- **By Distance** - Closest first
- **Open Now** - Only operating businesses

## Error Handling

The app handles:
- ❌ Network errors gracefully
- ❌ Missing API key validation
- ❌ Location permission denial
- ❌ Empty search results
- ❌ Rate limiting

## Best Practices Demonstrated

✅ **Separation of Concerns** - Services, components, screens  
✅ **Error Handling** - Try-catch and error states  
✅ **Loading States** - Show activity indicators  
✅ **Async/Await** - Clean async code  
✅ **Environment Variables** - Secure API key management  
✅ **Component Reusability** - Shared UI components  
✅ **API Caching** - Reduce redundant requests  

## Permissions Required

### iOS (app.json)
```json
{
  "expo": {
    "plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermissions": "Allow $(PRODUCT_NAME) to access your location"
        }
      ]
    ]
  }
}
```

### Android (app.json)
```json
{
  "expo": {
    "android": {
      "permissions": [
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.ACCESS_COARSE_LOCATION"
      ]
    }
  }
}
```

## Common Issues & Solutions

### "API Key Invalid"
- Verify key in configuration file
- Check key hasn't expired on Yelp dashboard
- Ensure key has proper permissions

### "Location Permission Denied"
- Check app permissions in device settings
- Grant location permission when prompted
- Handle permission denial gracefully in app

### "No Results"
- Verify location input is correct
- Expand search radius
- Check network connectivity
- Ensure API key is active and valid

### "Slow Response"
- Implement request debouncing
- Add result caching
- Show loading state to user
- Optimize list rendering

## Performance Tips

⚡ Memoize components with React.memo  
⚡ Implement pagination for large result sets  
⚡ Cache API responses  
⚡ Lazy load images  
⚡ Use FlatList instead of ScrollView for lists  

## Learning Outcomes

After completing this project, you'll understand:
- ✅ Real-world API integration
- ✅ Geolocation services in React Native
- ✅ Error handling patterns
- ✅ Loading state management
- ✅ Building feature-complete mobile apps
- ✅ Expo development workflow

## Deployment

### Build for App Store (iOS)

```bash
expo build:ios
```

### Build for Google Play (Android)

```bash
expo build:android
```

## Resources

- [Yelp Fusion API Documentation](https://www.yelp.com/developers/documentation/v3/business_search)
- [React Native Geolocation](https://reactnative.dev/docs/geolocation)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Expo Location API](https://docs.expo.dev/versions/latest/sdk/location/)
- [React Navigation Guide](https://reactnavigation.org/docs/getting-started)

## License

MIT License - Educational and commercial use permitted

## Author

**sreelal** - React Native Developer

## Contributing

Found an issue? Have a suggestion? Open an issue or submit a PR!

---

**⭐ Great project for learning real-world API integration!**
