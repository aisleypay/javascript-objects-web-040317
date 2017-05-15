var playlist = {
  'Beyonce': ['Single Ladies', 'Diva', 'Love on Top']
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
