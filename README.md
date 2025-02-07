# Google Places Autocomplete with Redux-Observable

This project is a React application that integrates Google Places Autocomplete using Redux, Redux-Observable, and RxJS. It features a search box, a history of searches, and a Google Map with draggable markers and circles.

## 🚀 Features
- Google Places Autocomplete integration
- Redux for state management
- Redux-Observable with RxJS for handling API requests
- Search history display with MUI components
- Interactive Google Map with draggable markers and circles
- Styled with Material-UI for a modern UI

## 📂 Project Structure
```
├── src
│   ├── components
│   │   ├── Map.js
│   │   ├── SearchHistory.js
│   ├── redux
│   │   ├── actions
│   │   │   ├── placesAction.js
│   │   ├── epics
│   │   │   ├── placesEpic.js
│   │   ├── reducers
│   │   │   ├── placesReducer.js
│   │   ├── store.js
│   ├── App.js
│   ├── index.js
├── server.js
├── .env
├── package.json
```

## 🛠️ Installation
### 1. Clone the Repository
```sh
git clone https://github.com/rayyy424/google-places-autocomplete-react.git
cd google-places-autocomplete-react
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up API Key
Create a `.env` file in the root of the project:
```
REACT_APP_GOOGLE_API_KEY=your_google_places_api_key
```

### 4. Run the Backend Server
```sh
node server.js
```

### 5. Start the React Application
```sh
npm run start
```

### 6. Start the Backend Server and React Application Concurrently
```sh
npm run dev
```

## ⚙️ Usage
- Type a location in the search box.
- Select a suggestion from Google Places API.
- The selected location is displayed on the map.
- A draggable marker and a circle appear on the map.
- The search history is displayed below the search box.

## 📦 Technologies Used
- **React** (Frontend Framework)
- **Redux & Redux-Observable** (State Management & Side Effects)
- **RxJS** (Reactive Programming)
- **Google Maps API** (Location Services)
- **Material-UI (MUI)** (UI Components)
- **Express & Axios** (Backend Server for API Proxy)

## 📜 License
This project is licensed under the MIT License.

---

Happy coding! 🚀

