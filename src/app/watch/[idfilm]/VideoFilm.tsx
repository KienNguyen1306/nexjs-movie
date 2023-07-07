function VideoFilm({ IMDBID }: any) {
  return (
    <div className="right">
      <iframe
        className="video"
        src={`https://www.2embed.cc/embed/${IMDBID}`}
        style={{ width: "100%", height: 365 }}
      />
    </div>
  );
}

export default VideoFilm;
