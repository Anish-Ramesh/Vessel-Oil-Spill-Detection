# 🚢 Vessel Anomaly Detection System

> **Empowering Maritime Intelligence with Real-Time Data & Analytics**

**Vessel Anomaly Detection System** Is a comprehensive maritime tracking and analysis system designed to provide real-time insights into vessel movements, environmental conditions, and satellite imagery. By integrating multiple data sources, it offers a holistic view of maritime activities, aiding in navigation, monitoring, and decision-making.

---

## 🌟 Key Features

*   **📍 Real-Time Vessel Tracking**: Track vessels globally using their MMSI number. Get precise location data including latitude, longitude, and course.
*   **🛰️ Satellite Imagery Integration**: Fetch high-resolution satellite images of vessel locations on demand for visual verification and monitoring.
*   **🌤️ Live Weather Updates**: Access real-time weather conditions (temperature, wind speed, humidity, pressure) for any vessel's location.
*   **💾 Robust Caching System**:
    *   **MongoDB Atlas Caching**: Automatically saves fetched data to the database.
    *   **TTL Index**: Auto-expires stale data after **1 hour** to ensure freshness.
    *   **Rate Limit Protection**: Serves cached data to minimize API usage and avoid rate limits.
*   **🛡️ Mock Data Fallback**: Automatically switches to demo data if external APIs are down or rate-limited, ensuring the app never crashes.

---

## 🏗️ System Architecture

The system consists of a robust backend and a modern frontend.

| Service | Port | Description |
| :--- | :--- | :--- |
| **Backend Server** | `3000` | Express.js server handling API requests, caching, and database interactions. |
| **Frontend App** | `5173` | React + Vite application providing the user interface. |
| **Database** | `27017` | MongoDB Atlas for storing vessel data and caching. |

---

## 🛠️ Tech Stack

*   **Runtime**: [Node.js](https://nodejs.org/)
*   **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Backend**: [Express.js](https://expressjs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/) (Atlas)
*   **External APIs**:
    *   [AIS Vessel Finder (RapidAPI)](https://rapidapi.com/vesselfinder/api/ais-vessel-finder) (Vessel Data)
    *   [Mapbox Static Images API](https://docs.mapbox.com/api/maps/static-images/) (Satellite Imagery)
    *   [OpenWeatherMap API](https://openweathermap.org/api) (Weather Data)

---

## 🚀 Getting Started

Follow these simple steps to set up and deploy the system on your local machine.

### Prerequisites

*   **Node.js** (v14 or higher)
*   **npm** (Node Package Manager)
*   **MongoDB Account** (for database connection)
*   **API Keys** for RapidAPI, Mapbox, and OpenWeatherMap.

### Installation

1.  **Clone the Repository**
    ```bash
    git clone <repository-url>
    cd AISvessels-backed
    ```

2.  **Install Backend Dependencies**
    ```bash
    cd final-version
    npm install
    ```

3.  **Install Frontend Dependencies**
    ```bash
    cd ../frontend
    npm install
    ```

4.  **Configure Environment Variables**
    *   Ensure API keys are updated in `final-version/server.js`.

---

## 🏃‍♂️ Usage Guide

To run the full system, you need to start the backend and frontend in separate terminals.

1.  **Start Backend Server** (Port 3000)
    ```bash
    cd final-version
    npm start
    ```

2.  **Start Frontend Application** (Port 5173)
    ```bash
    cd frontend
    npm run dev
    ```

3.  **Access the App**
    Open your browser and navigate to: `http://localhost:5173`

4.  **Search for a Vessel**
    Enter an MMSI (e.g., `249373000`) to see real-time data.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements or bug fixes, please:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

---

## 📄 License

This project is licensed under the ISC License.
