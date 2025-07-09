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

## Author

Bulut Hamali