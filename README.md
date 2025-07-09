# IP Address Tracker

This is a responsive IP address tracker application built with React, TypeScript, and Leaflet. The app allows users to enter an IP address or domain name and fetch its geographical location, including city, region, timezone, and ISP. It also supports auto-fetching the current user's IP address using the IPify API.

## Features

- Track the location of any valid IP address or domain
- Displays IP address, city, region, country, timezone, and ISP
- Uses Leaflet for map rendering
- Fully responsive design
- Modern tech stack: React + TypeScript + Vite + Leaflet
- Search bar and info card UI
- Default background map with IP location marker
- Styled with custom CSS and Google Fonts

## Technologies Used

- React
- TypeScript
- Vite
- Leaflet (react-leaflet)
- IPify API (for current IP detection)
- Google DNS API (for domain to IP resolution)
  
## Live Demo
[Check it out here](https://radiant-phoenix-c1ae72.netlify.app/)

## Getting Started

### Prerequisites

- Node.js and npm installed
- A valid IPify API key

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/BulutHamali/ip-tracker-app-ts.git
   cd ip-tracker-app-ts
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory:

   ```
   VITE_IPIFY_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```
   npm run dev
   ```

## Folder Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── IPInfoCard.tsx
│   ├── MapView.tsx
├── utils/
│   └── api.ts
├── App.tsx
├── App.css
```

## License

This project is licensed under the MIT License.



## Reflection Document
This project served as an excellent opportunity to deepen my understanding of building a full-stack React application with TypeScript. The primary goal was to create an IP address tracker capable of retrieving and displaying real-time location data on an interactive map.

One of the more complex aspects of the development process was handling IP/domain resolution while managing asynchronous data flow cleanly using custom hooks and utility functions. Initially, there were challenges with fetching accurate geolocation data when differentiating between IP addresses and domain names. I resolved this by integrating both the IPify and IPWhois APIs—one to retrieve the client’s IP and the other to fetch detailed metadata.

Styling and layout, particularly the overlay positioning of the information card above the map, required careful use of CSS and responsive design considerations. I also encountered deployment-specific issues, such as broken background images, which were resolved by properly referencing assets from the public/ directory using absolute paths.

Going forward, this project could be improved by implementing better error handling, loading states, and validating user input. Additionally, consolidating API calls through a single robust geolocation provider could simplify the architecture. Overall, the project sharpened my frontend and API integration skills and gave me practical experience with React hooks, environment variables, and deploying to Netlify.

## Author

Bulut Hamali