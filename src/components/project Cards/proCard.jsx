import "./proCards.css";

export default function ProCards({ imgUrl, title, desc, gitUrl }) {
  const visitRepo = () => {
    if (gitUrl) {
      window.open(gitUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="pro-card">
      <div className="pro-card-info">
        <h2>{title}</h2>
        <p>{desc}</p>
        <button onClick={visitRepo}>visit repository</button>
      </div>
      {imgUrl && imgUrl !== "null" && (
        <div className="pro-card-img">
          <img src={imgUrl} alt={title} />
        </div>
      )}
    </div>
  );
}
