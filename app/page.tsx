import Galaxy from "./components/galaxy";

// Define an array of star data

const starDataList = [
  {
    starPosition: [-1.6012086544385413, -1.2239268004325259, -3.684851968822373] as [number, number, number],
    planetData: [],
    name: "Proxima Centauri",
    distance: 4.2,
    mass: "0.123 Ms",
    radius: "0.4 Rs",
    atmosphere: "No significant atmosphere",
    habitability: "Not habitable",
    discoveryYear: 1915,
    texture: "/Proxima_Centauri.png"
  },
  {
    starPosition: [6.511848679582762, 8.713574267196652, -1.6338452387740354] as [number, number, number],
    planetData: [],
    name: "Epsilon Eridani/Ran",
    distance: 10.5,
    mass: "0.82 Ms",
    radius: "0.74 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2000,
    texture: "/Epsilon_Eridani.png"
  },
  {
    starPosition: [-10.98322241314756, 0.587604710848539, 0.1534474734939387] as [number, number, number],
    planetData: [],
    name: "Ross 128",
    distance: 10.92,
    mass: "0.168 Ms",
    radius: "0.21 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 1970,
    texture: "/Ross_128.png"
  },
  {
    starPosition: [5.9819563058748395, -3.333423995416401, -9.854160706086866] as [number, number, number],
    planetData: [],
    name: "Epsilon Indi A",
    distance: 11.82,
    mass: "0.76 Ms",
    radius: "0.74 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2003,
    texture: "/epsilon_Indi_A.png"
  },
  {
    starPosition: [10.461302876970699, 5.104418580765125, -2.916513855380138] as [number, number, number],
    planetData: [],
    name: "Tau Ceti",
    distance: 11.9,
    mass: "0.783 Ms",
    radius: "0.8 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2012,
    texture: "/tau_Ceti.png"
  },
  {
    starPosition: [5.117185306568325, 7.04404155075335, -8.258080477296257] as [number, number, number],
    planetData: [],
    name: "Gliese 1061",
    distance: 12.07,
    mass: "0.11 Ms",
    radius: "0.14 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2019,
    texture: "/gliese_1061.png"
  },
  {
    starPosition: [8.600532206719132, 0.6938960965637136, 8.339625529264524] as [number, number, number],
    planetData: [],
    name: "GJ 15 A",
    distance: 11.98,
    mass: "0.38 Ms",
    radius: "0.39 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2005,
    texture: "/GJ_15_A.png"
  },
  {
    starPosition: [11.015257681316335, 3.6073823446656093, -3.1065882948334673] as [number, number, number],
    planetData: [],
    name: "YZ Ceti",
    distance: 12.1,
    mass: "0.13 Ms",
    radius: "0.15 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2017,
    texture: "/YZ_Ceti.png"
  },
  {
    starPosition: [8.688828090849437, 8.222111891793556, 3.6264503921179885] as [number, number, number],
    planetData: [],
    name: "Teegarden's star",
    distance: 12.4,
    mass: "0.08 Ms",
    radius: "0.1 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2003,
    texture: "/teegarden_s_star.png"
  },
  {
    starPosition: [-5.236570214663711, -12.689049079701324, -2.750702790166146] as [number, number, number],
    planetData: [],
    name: "Wolf 1061",
    distance: 14.06,
    mass: "0.25 Ms",
    radius: "0.29 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2015,
    texture: "/Wolf_1061.png"
  },
  {
    starPosition: [-0.5855049477199651, -5.669846807083856, -13.87479805764381] as [number, number, number],
    planetData: [],
    name: "GJ 687",
    distance: 15.2,
    mass: "0.4 Ms",
    radius: "0.41 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2016,
    texture: "/GJ_687.png"
  },
  {
    starPosition: [-1.4424255633332217, -10.489171454120562, -10.625285440886055] as [number, number, number],
    planetData: [],
    name: "GJ 674",
    distance: 14.85,
    mass: "0.35 Ms",
    radius: "0.37 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2007,
    texture: "/GJ_674.png"
  },
  {
    starPosition: [13.958337393386525, -4.181340648479931, -3.561068321972622] as [number, number, number],
    planetData: [],
    name: "GJ 876",
    distance: 15.2,
    mass: "0.32 Ms",
    radius: "0.36 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 1998,
    texture: "/GJ_876.png"
  },
  {
    starPosition: [15.891800200111351, 0.46512233023190275, -1.7984292084095086] as [number, number, number],
    planetData: [],
    name: "GJ 1002",
    distance: 16.35,
    mass: "0.12 Ms",
    radius: "0.14 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2021,
    texture: "/GJ_1002.png"
  },
  {
    starPosition: [8.42829192022407, -6.261399270793912, -12.073059863977612] as [number, number, number],
    planetData: [],
    name: "GJ 832",
    distance: 16.15,
    mass: "0.45 Ms",
    radius: "0.46 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2014,
    texture: "/GJ_832.png"
  },
  {
    starPosition: [-1.1571533241111283, -11.51395866751384, -11.049423151788579] as [number, number, number],
    planetData: [],
    name: "GJ 682",
    distance: 16.67,
    mass: "0.29 Ms",
    radius: "0.3 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2012,
    texture: "/GJ_682.png"
  },
  {
    starPosition: [4.4933117843782675, 17.357943150318608, -1.5849160225938388] as [number, number, number],
    planetData: [],
    name: "GJ 3323",
    distance: 18.35,
    mass: "0.16 Ms",
    radius: "0.18 Rs",
    atmosphere: "Not available",
    habitability: "Not habitable",
    discoveryYear: 2020,
    texture: "/GJ_3323.png"
  }
];

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Galaxy starData={starDataList} />
    </div>
  );
}



