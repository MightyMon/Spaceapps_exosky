import Galaxy from "./components/galaxy";

// Define an array of star data
const starDataList = [
  {
    starPosition: [
      -1.569667779770667, -1.3131036150666517, -3.6676834592490004,
    ] as [number, number, number],
    planetData: [
      {
        name: "Proxima Centauri b",
        distanceFromStarAU: 0.05,
        mass: "1.2 Me",
        radius: "1.1 Re",
        atmosphere: "Rocky planet with a temperature of -39ᵒC",
        habitability: "Within the star's habitable zone",
        discoveryYear: 2016,
      },
    ],
    name: "Proxima Centauri",
    distance: 4.2,
    mass: "0.123 Ms",
    radius: "0.4 Rs",
    atmosphere: "No significant atmosphere",
    habitability: "Not habitable",
    discoveryYear: 1915,
  },
  {
    starPosition: [0, 0, 0] as [number, number, number],
    planetData: [
      {
        name: "Earth",
        distanceFromStarAU: 1,
        mass: "1 Me",
        radius: "1 Re",
        atmosphere: "Nitrogen-Oxygen",
        habitability: "Yes",
        discoveryYear: 2024,
      },
    ],
    name: "Sun",
    distance: 0,
    mass: "1 Ms",
    radius: "1 Rs",
    atmosphere: "Hydrogen-Helium",
    habitability: "Habitable",
    discoveryYear: 2024,
  },
  {
    starPosition: [5, 0, 0] as [number, number, number],
    planetData: [
      {
        name: "Mars",
        distanceFromStarAU: 1.5,
        mass: "0.11 Me",
        radius: "0.53 Re",
        atmosphere: "Carbon Dioxide",
        habitability: "No",
        discoveryYear: 2016,
      },
    ],
    name: "Proxima Centauri",
    distance: 4.24,
    mass: "0.12 Ms",
    radius: "0.14 Rs",
    atmosphere: "N/A",
    habitability: "Possibly habitable",
    discoveryYear: 2016,
  },
  // Add more star data here if needed
];

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Galaxy starData={starDataList} />
    </div>
  );
}
  