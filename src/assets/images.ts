export const images = {
  appIcon: require('../../assets/images/app-icon.png'),
  yourPeople: require('../../assets/images/your_people.gif'),
  // Frozen last frame of `yourPeople`, shown once its single play-through
  // ends — the GIF itself loops infinitely, so playback is stopped in JS.
  yourPeopleLastFrame: require('../../assets/images/your_people_last_frame.png'),
} as const;
