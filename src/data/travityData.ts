export type MemberId = 'saumay' | 'devika' | 'vansh' | 'rimisha' | 'pragya';

export type AccessoryKind = 'cap' | 'bow' | 'headphones' | 'glasses' | 'beanie' | 'flower';

export interface Member {
  id: MemberId;
  name: string;
  color: string;
  accessory: AccessoryKind;
  stationId: string;
  homeLabel: string;
  curfew: string;
  gender: 'male' | 'female';
  phone: string;
  budget: number;
}

export const MEMBERS: Member[] = [
  {
    id: 'saumay',
    name: 'Saumay',
    color: '#67E8F9',
    accessory: 'cap',
    stationId: 'dwarka-mor',
    homeLabel: 'NSUT · Dwarka Mor',
    curfew: '21:30',
    gender: 'male',
    phone: '+91 99104 88123',
    budget: 500,
  },
  {
    id: 'devika',
    name: 'Devika',
    color: '#F472B6',
    accessory: 'bow',
    stationId: 'kashmere-gate',
    homeLabel: 'IGDTUW · Kashmere Gate',
    curfew: '20:30',
    gender: 'female',
    phone: '+91 98110 44210',
    budget: 450,
  },
  {
    id: 'vansh',
    name: 'Vansh',
    color: '#A78BFA',
    accessory: 'headphones',
    stationId: 'dwarka-sec-21',
    homeLabel: 'NSUT · Dwarka Sec 3',
    curfew: '21:30',
    gender: 'male',
    phone: '+91 98712 31044',
    budget: 500,
  },
  {
    id: 'rimisha',
    name: 'Rimisha',
    color: '#34D399',
    accessory: 'glasses',
    stationId: 'civil-lines',
    homeLabel: 'IGDTUW · Civil Lines',
    curfew: '20:15',
    gender: 'female',
    phone: '+91 98182 55390',
    budget: 400,
  },
  {
    id: 'pragya',
    name: 'Pragya',
    color: '#FBBF24',
    accessory: 'flower',
    stationId: 'janakpuri-west',
    homeLabel: 'NSUT · Janakpuri West',
    curfew: '20:30',
    gender: 'female',
    phone: '+91 97175 66201',
    budget: 450,
  },
];

export function memberById(id: string): Member {
  const norm = id.toLowerCase();
  return (
    MEMBERS.find((m) => m.id === norm || m.name.toLowerCase() === norm) || MEMBERS[0]
  );
}

export type MetroLineName = 'Blue' | 'Yellow' | 'Red' | 'Pink' | 'Magenta' | 'Violet';

export const LINE_COLORS: Record<MetroLineName, string> = {
  Blue: '#2563EB',
  Yellow: '#EAB308',
  Red: '#DC2626',
  Pink: '#EC4899',
  Magenta: '#9333EA',
  Violet: '#7C3AED',
};

export interface StationPoint {
  id: string;
  name: string;
  x: number;
  y: number;
  lines: MetroLineName[];
}

export const STATIONS: StationPoint[] = [
  { id: 'dwarka-sec-21', name: 'Dwarka Sec 21 (NSUT South)', x: 110, y: 630, lines: ['Blue'] },
  { id: 'dwarka-mor', name: 'Dwarka Mor (NSUT Hub)', x: 185, y: 555, lines: ['Blue'] },
  { id: 'janakpuri-west', name: 'Janakpuri West', x: 265, y: 495, lines: ['Blue', 'Magenta'] },
  { id: 'rajouri-garden', name: 'Rajouri Garden', x: 345, y: 430, lines: ['Blue', 'Pink'] },
  { id: 'karol-bagh', name: 'Karol Bagh', x: 435, y: 395, lines: ['Blue'] },
  { id: 'rajiv-chowk', name: 'Rajiv Chowk (CP)', x: 525, y: 395, lines: ['Blue', 'Yellow'] },
  { id: 'mandi-house', name: 'Mandi House', x: 605, y: 410, lines: ['Blue', 'Violet'] },
  { id: 'samaypur-badli', name: 'Vishwavidyalaya (North Campus)', x: 510, y: 155, lines: ['Yellow'] },
  { id: 'civil-lines', name: 'Civil Lines', x: 520, y: 215, lines: ['Yellow'] },
  { id: 'kashmere-gate', name: 'Kashmere Gate (IGDTUW Hub)', x: 535, y: 265, lines: ['Yellow', 'Red', 'Violet'] },
  { id: 'chandni-chowk', name: 'Chandni Chowk', x: 530, y: 325, lines: ['Yellow'] },
  { id: 'central-secretariat', name: 'Central Secretariat', x: 525, y: 470, lines: ['Yellow', 'Violet'] },
  { id: 'ina', name: 'Dilli Haat - INA', x: 520, y: 560, lines: ['Yellow', 'Pink'] },
  { id: 'hauz-khas', name: 'Hauz Khas', x: 515, y: 650, lines: ['Yellow', 'Magenta'] },
  { id: 'netaji-subhash-place', name: 'Netaji Subhash Place (NSP)', x: 370, y: 245, lines: ['Red', 'Pink'] },
  { id: 'jln-stadium', name: 'JLN Stadium (Sunder Nursery)', x: 625, y: 525, lines: ['Violet'] },
];

export function stationName(id: string): string {
  return STATIONS.find((s) => s.id === id)?.name || id;
}

export const METRO_LINES: { name: MetroLineName; points: string }[] = [
  {
    name: 'Blue',
    points: '110,630 185,555 265,495 345,430 435,395 525,395 605,410 740,435',
  },
  {
    name: 'Yellow',
    points: '510,155 520,215 535,265 530,325 525,395 525,470 520,560 515,650 490,760',
  },
  {
    name: 'Red',
    points: '260,215 370,245 535,265 700,260',
  },
  {
    name: 'Pink',
    points: '370,245 345,430 520,560 690,545',
  },
  {
    name: 'Magenta',
    points: '265,495 360,620 515,650 685,670',
  },
  {
    name: 'Violet',
    points: '535,265 605,410 525,470 625,525 680,680',
  },
];

export interface Destination {
  slug: string;
  name: string;
  area: string;
  category: string;
  short: string;
  description: string;
  stationId: string;
  x: number;
  y: number;
  duration: string;
  cost: [number, number];
  walkMin: number;
  lines: MetroLineName[];
  activities: string[];
  hours: string;
  lastMile: string;
  safetyLevel: 'good' | 'moderate';
  safetyNote: string;
  fairness: number;
  excitement: number;
  accessibility: number;
  returnFit: number;
  budgetFit: number;
  reasons: string[];
  imageStatus: 'mock-only' | 'real-photo' | 'placeholder';
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'nsut-dwarka-hub',
    name: 'NSUT Campus & Dwarka Sec 3 Hub',
    area: 'Dwarka Sector 3, Southwest Delhi',
    category: 'Campus & Cafes',
    short: 'NSUT Main Gate student cafes, green campus lawns, and well-lit Blue Line corridor.',
    description:
      'Netaji Subhas University of Technology (NSUT) in Dwarka Sector 3 features lively student cafes, affordable eateries, wide well-lit footpaths, and immediate Blue Line access via Dwarka Mor.',
    stationId: 'dwarka-mor',
    x: 185,
    y: 555,
    duration: '2–3 hrs',
    cost: [150, 350],
    walkMin: 5,
    lines: ['Blue'],
    activities: ['Campus cafe hangouts', 'Student food walk', 'Evening lawn stroll', 'Board games'],
    hours: '9:00 AM – 9:00 PM',
    lastMile: '5 min walk or shared e-rickshaw from Dwarka Mor Gate 1',
    safetyLevel: 'good',
    safetyNote:
      '24/7 NSUT campus security guards at Main Gate, continuous student footfall, and Pink Saheli booth at Dwarka Mor.',
    fairness: 94,
    excitement: 88,
    accessibility: 95,
    returnFit: 96,
    budgetFit: 98,
    reasons: [
      'Home turf for Saumay, Vansh & Pragya with zero-transfer Blue Line access',
      'Student-friendly cafes under ₹300 per person with high evening security',
    ],
    imageStatus: 'placeholder',
  },
  {
    slug: 'igdtuw-kashmere-gate',
    name: 'IGDTUW Campus & Kashmere Gate Hub',
    area: 'Kashmere Gate, North Delhi',
    category: 'Campus & Heritage',
    short: 'IGDTUW historic campus, triple-line metro interchange, and Civil Lines cafes.',
    description:
      'Indira Gandhi Delhi Technical University for Women (IGDTUW) at Kashmere Gate connects directly to Yellow, Red, and Violet Lines with dedicated women safety patrols and nearby Civil Lines cafes.',
    stationId: 'kashmere-gate',
    x: 535,
    y: 265,
    duration: '2–3 hrs',
    cost: [150, 350],
    walkMin: 6,
    lines: ['Yellow', 'Red', 'Violet'],
    activities: ['IGDTUW campus meet', 'Civil Lines cafe hop', 'Heritage walk', 'Group study'],
    hours: '9:00 AM – 8:30 PM',
    lastMile: '6 min guarded walk from Kashmere Gate Metro Gate 6',
    safetyLevel: 'good',
    safetyNote:
      'Dedicated Delhi Police women safety post outside IGDTUW gate and CISF-monitored Kashmere Gate interchange.',
    fairness: 92,
    excitement: 86,
    accessibility: 97,
    returnFit: 94,
    budgetFit: 96,
    reasons: [
      'Home campus for Devika & Rimisha with direct Yellow Line connectivity',
      'Triple-line metro hub with Pink Saheli desk and high police presence',
    ],
    imageStatus: 'placeholder',
  },
  {
    slug: 'connaught-place',
    name: 'Connaught Place (Rajiv Chowk)',
    area: 'Central Delhi',
    category: 'Cafes & Walk',
    short: 'Exact Blue + Yellow Line midpoint between NSUT and IGDTUW with iconic colonnades.',
    description:
      'Connaught Place sits right above Rajiv Chowk Metro Station—the direct Blue and Yellow Line interchange—making it the most balanced midpoint for NSUT and IGDTUW squads.',
    stationId: 'rajiv-chowk',
    x: 525,
    y: 395,
    duration: '2–4 hrs',
    cost: [250, 550],
    walkMin: 2,
    lines: ['Blue', 'Yellow'],
    activities: ['Inner Circle cafe hop', 'Central Park walk', 'Bookstores & street snacks'],
    hours: '10:00 AM – 9:30 PM',
    lastMile: 'Direct exit from Rajiv Chowk Metro gates into Inner Circle',
    safetyLevel: 'good',
    safetyNote:
      'High police patrolling, bright colonnade lighting, and Pink Saheli booth on Rajiv Chowk concourse.',
    fairness: 98,
    excitement: 91,
    accessibility: 99,
    returnFit: 95,
    budgetFit: 90,
    reasons: [
      'Direct 0-transfer metro ride for both NSUT (Blue Line) and IGDTUW (Yellow Line) members',
      'Shortest commute spread across all 5 squad members',
    ],
    imageStatus: 'placeholder',
  },
  {
    slug: 'sunder-nursery',
    name: 'Sunder Nursery Heritage Park',
    area: 'Nizamuddin, Central South Delhi',
    category: 'Picnic & Parks',
    short: '90-acre heritage garden with water channels, amphitheatre, and winter sun lawns.',
    description:
      'Restored 16th-century heritage park with sunken gardens, lakes, and open picnic lawns popular with college groups for afternoon outings.',
    stationId: 'jln-stadium',
    x: 625,
    y: 525,
    duration: '3–4 hrs',
    cost: [150, 450],
    walkMin: 10,
    lines: ['Violet'],
    activities: ['Garden picnic', 'Heritage photography', 'Lakeside cafe', 'Board games'],
    hours: '7:00 AM – 7:00 PM',
    lastMile: '10 min auto/walk from JLN Stadium Violet Line station',
    safetyLevel: 'good',
    safetyNote:
      'Gated heritage park with ticketed entry and security guards; best visited before 6:30 PM.',
    fairness: 86,
    excitement: 93,
    accessibility: 85,
    returnFit: 88,
    budgetFit: 92,
    reasons: [
      'Relaxed open-air picnic spot ideal for a 5-member daytime hangout',
      'Entry tickets are student-budget friendly',
    ],
    imageStatus: 'placeholder',
  },
  {
    slug: 'dilli-haat-ina',
    name: 'Dilli Haat INA',
    area: 'INA, South Delhi',
    category: 'Food & Crafts',
    short: 'Open-air craft bazaar and regional state food stalls right outside INA Metro.',
    description:
      'Open-air food and craft plaza where everyone can order momos, thukpa, litti chokha, or dosas from state stalls under one roof.',
    stationId: 'ina',
    x: 520,
    y: 560,
    duration: '2–3 hrs',
    cost: [200, 500],
    walkMin: 2,
    lines: ['Yellow', 'Pink'],
    activities: ['Regional food trail', 'Craft shopping', 'Open plaza hangout'],
    hours: '10:30 AM – 9:00 PM',
    lastMile: '2 min direct walkway from Dilli Haat - INA Metro Gate 5',
    safetyLevel: 'good',
    safetyNote:
      'Gated compound with baggage scanner and direct subway entry into Yellow/Pink Line.',
    fairness: 89,
    excitement: 90,
    accessibility: 96,
    returnFit: 91,
    budgetFit: 91,
    reasons: [
      'Direct Yellow Line ride from IGDTUW and Pink Line transfer from Rajouri Garden',
      'Zero last-mile walk — metro gate opens right at the entrance',
    ],
    imageStatus: 'placeholder',
  },
  {
    slug: 'netaji-subhash-place',
    name: 'Netaji Subhash Place (NSP)',
    area: 'Pitampura, North-West Delhi',
    category: 'Food Walk',
    short: 'Bustling student food street famous for tandoori chai, momos, and waffles.',
    description:
      'High-energy plaza with dozens of student-friendly food kiosks, shakes, and outdoor seating connected by Red and Pink Lines.',
    stationId: 'netaji-subhash-place',
    x: 370,
    y: 245,
    duration: '2–3 hrs',
    cost: [150, 400],
    walkMin: 3,
    lines: ['Red', 'Pink'],
    activities: ['Tandoori chai & momo crawl', 'Dessert kiosks', 'Plaza hangout'],
    hours: '11:00 AM – 9:30 PM',
    lastMile: '3 min skywalk from NSP Metro Station',
    safetyLevel: 'moderate',
    safetyNote:
      'Busy student crowd till 8:30 PM; stick to the main lit plaza courtyard.',
    fairness: 84,
    excitement: 87,
    accessibility: 90,
    returnFit: 86,
    budgetFit: 95,
    reasons: [
      'Direct Red Line from Kashmere Gate and Pink Line from Rajouri Garden',
      'Very affordable street food under ₹300 per person',
    ],
    imageStatus: 'placeholder',
  },
];

export function destBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export interface RouteOption {
  id: string;
  label: string;
  minutes: number;
  fare: number;
  transfers: number;
  note?: string;
}

export interface MemberCommute {
  memberId: MemberId;
  minutes: number;
  fare: number;
  transfers: number;
  returnTime: string;
  options: RouteOption[];
}

export function groupCommutes(
  dest: Destination,
  memberIds: MemberId[],
  startPoints?: Partial<Record<MemberId, string>>
): MemberCommute[] {
  return memberIds.map((memberId) => {
    const member = memberById(memberId);
    const fromId = startPoints?.[memberId] || member.stationId;
    const fromSt = STATIONS.find((s) => s.id === fromId) || STATIONS[0];
    const dist = Math.hypot(dest.x - fromSt.x, dest.y - fromSt.y);
    const sameLine = fromSt.lines.some((l) => dest.lines.includes(l));
    const minutes = Math.max(8, Math.round(dist / 9) + (sameLine ? 4 : 12));
    const fare = minutes <= 15 ? 20 : minutes <= 30 ? 30 : minutes <= 45 ? 40 : 50;
    const transfers = sameLine ? 0 : 1;

    // Calculate safe return time before curfew
    const [ch, cm] = member.curfew.split(':').map(Number);
    const curfewMins = (ch || 20) * 60 + (cm || 30);
    const leaveMins = curfewMins - minutes - 15;
    const lh = Math.floor(leaveMins / 60);
    const lm = leaveMins % 60;
    const period = lh >= 12 ? 'PM' : 'AM';
    const h12 = lh % 12 === 0 ? 12 : lh % 12;
    const returnTime = `${h12}:${String(lm).padStart(2, '0')} ${period}`;

    return {
      memberId,
      minutes,
      fare,
      transfers,
      returnTime,
      options: [
        {
          id: `${memberId}-opt-1`,
          label: `${dest.lines[0]} Line Metro`,
          minutes,
          fare,
          transfers,
          note: sameLine
            ? 'Direct metro ride · Pink Saheli coach available'
            : 'Interchange via Rajiv Chowk / Kashmere Gate',
        },
        {
          id: `${memberId}-opt-2`,
          label: 'Metro + Shared E-Rickshaw',
          minutes: minutes + 6,
          fare: fare + 20,
          transfers: transfers,
          note: 'Guarded gate drop-off',
        },
      ],
    };
  });
}

export interface NearbyPlace {
  id: string;
  dest: string;
  name: string;
  category: 'Cafes & Restaurants' | 'Shops & Markets' | 'Activities' | 'Events & Experiences';
  note: string;
  budget: string;
  sponsored?: boolean;
}

export const NEARBY: NearbyPlace[] = [
  {
    id: 'nb-1',
    dest: 'nsut-dwarka-hub',
    name: 'NSUT Student Canteen & Amul Parlour',
    category: 'Cafes & Restaurants',
    note: 'Inside NSUT campus · Cold coffee, patties & Maggi',
    budget: '₹80–₹180',
  },
  {
    id: 'nb-2',
    dest: 'nsut-dwarka-hub',
    name: 'Dwarka Sec 3 Vegas Mall Food Court',
    category: 'Cafes & Restaurants',
    note: '10 min from NSUT gate · Group seating & cafes',
    budget: '₹200–₹400',
  },
  {
    id: 'nb-3',
    dest: 'igdtuw-kashmere-gate',
    name: 'IGDTUW Campus Nescafe & Tuck Shop',
    category: 'Cafes & Restaurants',
    note: 'Safe campus courtyard seating for quick squad breaks',
    budget: '₹60–₹150',
  },
  {
    id: 'nb-4',
    dest: 'igdtuw-kashmere-gate',
    name: 'Civil Lines Monastery & Cafe Corridor',
    category: 'Shops & Markets',
    note: '1 stop on Yellow Line · Tibetan food & student thrift shops',
    budget: '₹180–₹350',
  },
  {
    id: 'nb-5',
    dest: 'connaught-place',
    name: 'Wenger’s & Cha Bar (CP)',
    category: 'Cafes & Restaurants',
    note: 'Bookstore cafe & bakery in N-Block / A-Block',
    budget: '₹200–₹400',
  },
  {
    id: 'nb-6',
    dest: 'connaught-place',
    name: 'Central Park Amphitheatre',
    category: 'Activities',
    note: 'Open lawn above Rajiv Chowk Metro',
    budget: 'Free',
  },
  {
    id: 'nb-7',
    dest: 'sunder-nursery',
    name: 'Fabcafe by the Lake',
    category: 'Cafes & Restaurants',
    note: 'Lakeside seating inside Sunder Nursery',
    budget: '₹300–₹550',
  },
  {
    id: 'nb-8',
    dest: 'dilli-haat-ina',
    name: 'Sikkim & Nagaland State Food Stalls',
    category: 'Cafes & Restaurants',
    note: 'Steamed momos & fruit beer in open courtyard',
    budget: '₹180–₹350',
  },
];

export type SafetyStatus =
  | 'official'
  | 'mapped'
  | 'community'
  | 'satellite'
  | 'demo'
  | 'unknown';

export interface SafetyMarker {
  id: string;
  name: string;
  category: 'pink-booth' | 'police' | 'hospital' | 'lighting' | 'community';
  x: number;
  y: number;
  status: SafetyStatus;
  sourceType: string;
  lastUpdated: string;
  coverage: string;
  confidence: string;
  limitations: string;
}

export const SAFETY_LAYER_META = [
  { key: 'pink-booth', label: 'Pink Saheli Booths', color: '#F472B6' },
  { key: 'police', label: 'Police & Campus Security', color: '#67E8F9' },
  { key: 'lighting', label: 'Street Lighting Observations', color: '#FBBF24' },
  { key: 'hospital', label: '24/7 Medical & Hospitals', color: '#34D399' },
  { key: 'community', label: 'Student Community Notes', color: '#A78BFA' },
];

export const SAFETY_MARKERS: SafetyMarker[] = [
  {
    id: 'sm-1',
    name: 'NSUT Main Gate Security & Pink Booth (Dwarka Mor)',
    category: 'pink-booth',
    x: 195,
    y: 545,
    status: 'official',
    sourceType: 'DMRC & NSUT Campus Security Directory',
    lastUpdated: 'Oct 2026',
    coverage: 'Dwarka Mor Station & NSUT Main Gate approach',
    confidence: 'High',
    limitations: 'Staffing hours follow DMRC operational timings (6:00 AM – 11:00 PM).',
  },
  {
    id: 'sm-2',
    name: 'IGDTUW Gate & Kashmere Gate Pink Saheli Desk',
    category: 'pink-booth',
    x: 545,
    y: 258,
    status: 'official',
    sourceType: 'Delhi Police Women Safety Cell & CISF',
    lastUpdated: 'Oct 2026',
    coverage: 'Kashmere Gate Gate 6 & IGDTUW entrance road',
    confidence: 'High',
    limitations: 'Peak evening crowd between 6:30 PM and 8:00 PM can slow concourse exit.',
  },
  {
    id: 'sm-3',
    name: 'Rajiv Chowk Central Concourse Police Post',
    category: 'police',
    x: 535,
    y: 385,
    status: 'mapped',
    sourceType: 'Delhi Metro Security Map',
    lastUpdated: 'Oct 2026',
    coverage: 'Blue & Yellow Line Interchange Concourse',
    confidence: 'High',
    limitations: 'Mapped location; response time depends on active shift patrol.',
  },
  {
    id: 'sm-4',
    name: 'Janakpuri West — Blue/Magenta Corridor Lighting',
    category: 'lighting',
    x: 275,
    y: 485,
    status: 'community',
    sourceType: 'NSUT Student Commute Review (Pragya)',
    lastUpdated: '2 days ago',
    coverage: '~300m radius around Gate 2 e-rickshaw stand',
    confidence: 'Medium',
    limitations: 'Community-reported observation; individual streetlights may vary.',
  },
  {
    id: 'sm-5',
    name: 'Civil Lines Metro Approach',
    category: 'hospital',
    x: 510,
    y: 222,
    status: 'mapped',
    sourceType: 'NCR Emergency Directory',
    lastUpdated: 'Oct 2026',
    coverage: 'Civil Lines & North Campus corridor',
    confidence: 'High',
    limitations: 'Emergency room availability must be confirmed directly.',
  },
];

export type OutingStatus = 'past' | 'active' | 'upcoming';

export interface CalendarOuting {
  id: string;
  title: string;
  date: string;
  time: string;
  dest: string;
  status: OutingStatus;
  memberIds: MemberId[];
}

export const DEMO_OUTINGS: CalendarOuting[] = [
  {
    id: 'out-active-1',
    title: 'NSUT × IGDTUW Squad Meet',
    date: '2026-10-28',
    time: '5:30 PM',
    dest: 'nsut-dwarka-hub',
    status: 'active',
    memberIds: ['saumay', 'devika', 'vansh', 'rimisha', 'pragya'],
  },
  {
    id: 'out-up-1',
    title: 'Rajiv Chowk Midpoint Coffee',
    date: '2026-10-31',
    time: '4:00 PM',
    dest: 'connaught-place',
    status: 'upcoming',
    memberIds: ['saumay', 'devika', 'vansh', 'pragya'],
  },
  {
    id: 'out-past-1',
    title: 'Sunder Nursery Winter Sun Picnic',
    date: '2026-10-18',
    time: '3:00 PM',
    dest: 'sunder-nursery',
    status: 'past',
    memberIds: ['saumay', 'devika', 'rimisha', 'pragya'],
  },
  {
    id: 'out-past-2',
    title: 'IGDTUW Fest & Civil Lines Cafe Crawl',
    date: '2026-10-11',
    time: '4:30 PM',
    dest: 'igdtuw-kashmere-gate',
    status: 'past',
    memberIds: ['saumay', 'devika', 'vansh', 'rimisha', 'pragya'],
  },
];

export function outingsBy(status: OutingStatus): CalendarOuting[] {
  return DEMO_OUTINGS.filter((o) => o.status === status);
}

export function fmtDate(iso: string, lang: 'en' | 'hi' = 'en'): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

export type SentStatus = 'pending' | 'accepted' | 'declined';

export interface ReceivedInvite {
  id: string;
  from: MemberId;
  title: string;
  date: string;
  dest: string;
  summary: string;
}

export const RECEIVED_INVITES: ReceivedInvite[] = [
  {
    id: 'inv-r1',
    from: 'devika',
    title: 'IGDTUW × NSUT Evening Coffee & Safe Return',
    date: '2026-10-30',
    dest: 'connaught-place',
    summary: 'Midpoint meet at Rajiv Chowk so everyone catches the 7:45 PM metro before curfew.',
  },
  {
    id: 'inv-r2',
    from: 'vansh',
    title: 'NSUT Dwarka Sec 3 Food Walk',
    date: '2026-11-02',
    dest: 'nsut-dwarka-hub',
    summary: 'Post-lecture hangout at NSUT Main Gate cafes under ₹300 per person.',
  },
];

export const SENT_INVITES: { id: string; to: MemberId; outingId: string; status: SentStatus }[] = [
  { id: 'inv-s1', to: 'devika', outingId: 'out-active-1', status: 'accepted' },
  { id: 'inv-s2', to: 'vansh', outingId: 'out-active-1', status: 'accepted' },
  { id: 'inv-s3', to: 'rimisha', outingId: 'out-active-1', status: 'accepted' },
  { id: 'inv-s4', to: 'pragya', outingId: 'out-active-1', status: 'accepted' },
];

export interface ExpenseItem {
  id: string;
  label: string;
  paidBy: MemberId;
  amount: number;
  participants: MemberId[];
}

export const INITIAL_EXPENSES: ExpenseItem[] = [
  {
    id: 'exp-1',
    label: 'NSUT Main Gate Cold Coffee & Snacks',
    paidBy: 'saumay',
    amount: 650,
    participants: ['saumay', 'devika', 'vansh', 'rimisha', 'pragya'],
  },
  {
    id: 'exp-2',
    label: 'Shared E-Rickshaw from Dwarka Mor Gate 1',
    paidBy: 'vansh',
    amount: 150,
    participants: ['saumay', 'devika', 'vansh', 'rimisha', 'pragya'],
  },
  {
    id: 'exp-3',
    label: 'Kashmere Gate Momos & Chai',
    paidBy: 'devika',
    amount: 480,
    participants: ['saumay', 'devika', 'rimisha', 'pragya'],
  },
];

export type NotificationKind = 'invite' | 'join' | 'update' | 'safety';

export interface NotificationItem {
  id: string;
  kind: NotificationKind;
  title: string;
  body: string;
  time: string;
  unread: boolean;
  targetTab?: string;
}

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    kind: 'invite',
    title: 'Devika invited you to IGDTUW × NSUT Evening Coffee',
    body: 'Midpoint meet at Rajiv Chowk · Curfew-safe 7:45 PM return.',
    time: '12m ago',
    unread: true,
    targetTab: 'invitations',
  },
  {
    id: 'notif-2',
    kind: 'join',
    title: 'Rimisha & Pragya locked their starting metro stations',
    body: 'Civil Lines (Yellow Line) and Janakpuri West (Blue Line) synced to Lobby TRV-8492.',
    time: '35m ago',
    unread: true,
    targetTab: 'lobby',
  },
  {
    id: 'notif-3',
    kind: 'safety',
    title: 'Curfew Return Reminder Active',
    body: 'Rimisha (8:15 PM curfew) and Devika (8:30 PM curfew) should board by 7:45 PM.',
    time: '1h ago',
    unread: false,
    targetTab: 'safety',
  },
];
