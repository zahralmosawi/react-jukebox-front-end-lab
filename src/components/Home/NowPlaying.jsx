const NowPlaying = ({track}) => {
    if(!track) return
  return (
    <div>
      <h1>Now Playing: </h1>
      <p><strong>Title: </strong> {track.title}</p>
      <p><strong>Artist: </strong> {track.artist}</p>
    </div>
  )
}

export default NowPlaying
