/** Placeholder data standing in for the backend until the real APIs land. */

export type MockRider = {
  id: string;
  name: string;
  color: string;
};

export const MOCK_USER = {
  name: 'Aarav',
  roovPoints: 1240,
  referralCode: 'AARAV24',
  avatarUri: undefined as string | undefined,
  profileCompletion: 69,
};

export const MOCK_UNREAD_NOTIFICATIONS = 3;

export const MOCK_ROOVMATES: readonly MockRider[] = [
  { id: 'r1', name: 'Meera Shah', color: '#B48C5C' },
  { id: 'r2', name: 'Kabir Rao', color: '#799175' },
  { id: 'r3', name: 'Divya Nair', color: '#FFBF00' },
  { id: 'r4', name: 'Rohan Iyer', color: '#0C3B2E' },
];

export const MOCK_UPCOMING_RIDE = {
  id: 'ride-upcoming-1',
  title: 'Lonavala Ghat Run',
  dateLabel: 'Sat, 9:00 AM',
  meetingPoint: 'Bandra Bandstand',
  riderCount: 6,
};

export type MockRide = {
  id: string;
  title: string;
  dateLabel: string;
  meetingPoint: string;
  riderCount: number;
  status: 'live' | 'upcoming' | 'completed';
  role: 'hosted' | 'joined';
};

export const MOCK_MY_RIDES: readonly MockRide[] = [
  {
    id: 'ride-1',
    title: 'Lonavala Ghat Run',
    dateLabel: 'Sat, 9:00 AM',
    meetingPoint: 'Bandra Bandstand',
    riderCount: 6,
    status: 'upcoming',
    role: 'hosted',
  },
  {
    id: 'ride-2',
    title: 'Coastal Sunrise Loop',
    dateLabel: 'Sun, 6:30 AM',
    meetingPoint: 'Marine Drive',
    riderCount: 3,
    status: 'upcoming',
    role: 'joined',
  },
  {
    id: 'ride-3',
    title: 'Midnight Chai Run',
    dateLabel: '12 Jul, 11:00 PM',
    meetingPoint: 'Carter Road',
    riderCount: 9,
    status: 'completed',
    role: 'hosted',
  },
];

export type MockFeedPost = {
  id: string;
  riderName: string;
  riderColor: string;
  rideTitle: string;
  timeAgo: string;
  distanceKm: number;
  durationLabel: string;
  riderCount: number;
  kudos: number;
};

export const MOCK_FEED: readonly MockFeedPost[] = [
  {
    id: 'post-1',
    riderName: 'Meera Shah',
    riderColor: '#B48C5C',
    rideTitle: 'Lonavala Ghat Run',
    timeAgo: '2h ago',
    distanceKm: 84,
    durationLabel: '2h 15m',
    riderCount: 6,
    kudos: 18,
  },
  {
    id: 'post-2',
    riderName: 'Kabir Rao',
    riderColor: '#799175',
    rideTitle: 'Coastal Sunrise Loop',
    timeAgo: '1d ago',
    distanceKm: 46,
    durationLabel: '1h 20m',
    riderCount: 3,
    kudos: 9,
  },
  {
    id: 'post-3',
    riderName: 'Divya Nair',
    riderColor: '#FFBF00',
    rideTitle: 'Midnight Chai Run',
    timeAgo: '3d ago',
    distanceKm: 32,
    durationLabel: '1h 05m',
    riderCount: 9,
    kudos: 27,
  },
];

export type MockMedal = {
  id: string;
  label: string;
  earned: boolean;
};

export const MOCK_MEDALS: readonly MockMedal[] = [
  { id: 'm1', label: 'First Ride', earned: true },
  { id: 'm2', label: 'Century Rider', earned: true },
  { id: 'm3', label: 'Ghat Master', earned: true },
  { id: 'm4', label: 'Night Owl', earned: false },
  { id: 'm5', label: 'Convoy of 10', earned: false },
  { id: 'm6', label: 'Monsoon Rider', earned: false },
];
