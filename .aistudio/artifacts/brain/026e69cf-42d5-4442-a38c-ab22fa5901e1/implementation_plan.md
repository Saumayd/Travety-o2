# Travety — Interactive Dual-Mode Map Integration (`Lobby & Map`)

We are upgrading the **Lobby & Map** tab with a dedicated, dual-mode interactive map component that plots the calculated **Central Hub**, the **User's Home Location**, **All Squad Members' Homes**, and **Pink Saheli Police Assistance Booths** (when in *Safe Case* mode). Users can seamlessly switch between a **Live Google Maps View** and an interactive **Recharts / CSS Coordinate Radar View**.

## User Review & Critical Decisions

> [!IMPORTANT]
> Summary of your confirmed choices for the map integration:

- **Dual-Mode Map View (`Google Maps Live` + `Recharts / CSS Coordinate Radar`)**:
  - **Live Google Maps View**: Uses `@vis.gl/react-google-maps` (`<APIProvider>`, `<Map mapId="DEMO_MAP_ID">`, and `<AdvancedMarker>`) centered on Delhi NCR to plot interactive custom pins for the Central Hub, your manually entered home location, your squad members' starting locations, and nearby Pink Saheli booths.
  - **Recharts & CSS Spatial Radar View**: Uses `recharts` (`ResponsiveContainer`, `ScatterChart`, `Scatter`, `XAxis`, `YAxis`, `ZAxis`, `Tooltip`, `ReferenceLine`) combined with custom CSS marker badges to visualize the exact spatial distribution (latitude/longitude coordinates and distance radius) between everyone's home and the central hangout hub.
- **Comprehensive Multi-Layer Marker Plotting**:
  - **Central Hub Marker**: Highlighted royal-blue star/hub beacon for the active top recommended venue (e.g., *Connaught Place Inner Circle*, *Khan Market*, *DLF CyberHub*, *SDA Market*, *Noida Sector 18*).
  - **User's Home Location Marker**: Distinct sky-blue/indigo home pin dynamically geocoded/mapped from your manual location input in the questionnaire, showing your exact distance and transit time to the hub.
  - **Squad Members' Home Markers**: Plotted pins for all joined participants (`Ananya S.`, `Priya R.`, `Rohan M.`, `Tanvi K.`) showing their curfew and departure schedule on click/hover.
  - **Pink Saheli Booth Markers (`Safe Case` Mode)**: Emerald-green verified shield markers plotted around the hub when *Safe Case* mode is active (automatically hidden when switched to *Best Fun Case* mode).

---

## 1. User Experience & Visual Design

- **View Switcher in `Lobby & Map`**:
  - A clean segmented toggle in the Map section header lets users switch between **Google Maps View** and **Recharts Spatial Radar** with zero latency.
  - An interactive legend below the map clearly distinguishes **Central Hub** (`#2563EB`), **Your Home** (`#0F172A`), **Squad Homes** (`#0284C7`), and **Pink Saheli Booths** (`#059669` in Safe Case).
- **Interactive Marker Inspection**:
  - Clicking any marker on either the Google Map or the Recharts Scatter plot selects that node in the bottom inspection bar, displaying distance from your home to the central hub, estimated travel duration, and safety/budget metrics.

---

## 2. Technical Architecture & Component Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    Lobby & Map Tab (LobbyView.tsx)                      │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Participant Questionnaire (Manual Location, Curfew, Budget, etc.) │  │
│  └─────────────────────────────────┬─────────────────────────────────┘  │
│                                    │                                    │
│                                    ▼                                    │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │          Dual-Mode Hub & Home Map (LobbyMapWidget.tsx)            │  │
│  │  ┌─────────────────────────────┐ ┌─────────────────────────────┐  │  │
│  │  │   Live Google Maps Mode     │ │  Recharts + CSS Radar Mode  │  │  │
│  │  │ • @vis.gl/react-google-maps │ │ • Recharts ScatterChart     │  │  │
│  │  │ • AdvancedMarker pins for:  │ │ • Lat/Lng coordinate grid   │  │  │
│  │  │   - Central Hub             │ │ • Custom SVG/CSS marker     │  │  │
│  │  │   - User's Home Location    │ │   shapes & Rich Tooltips    │  │  │
│  │  │   - Squad Members' Homes    │ │ • Vector connection lines   │  │  │
│  │  │   - Pink Saheli Booths      │ │   from Homes -> Central Hub │  │  │
│  │  └─────────────────────────────┘ └─────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Coordinate & Location Resolution
- Each NCR hub and neighborhood (plus custom manual location inputs) resolves to real-world Delhi NCR latitude/longitude coordinates (e.g., Connaught Place `28.6315° N, 77.2167° E`, Hauz Khas `28.5494° N, 77.2001° E`, Green Park `28.5589° N, 77.2068° E`, Malviya Nagar `28.5335° N, 77.2109° E`, Saket `28.5246° N, 77.2066° E`, Kalkaji `28.5495° N, 77.2588° E`, Noida Sec 18 `28.5708° N, 77.3260° E`, DLF CyberHub `28.4950° N, 77.0895° E`) so both Google Maps and the Recharts coordinate plot display accurate geographic relationships.
