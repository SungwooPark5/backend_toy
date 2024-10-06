import "./Gallery.css";

function Gallery() {
  return (
    <>
      <div className="gallery-container">
        <h2>📸 Gallery</h2>
        <Card img="/img/1.jpg" title="엽사" description="2021.08.03" />
        <Card img="/img/2.jpg" title="헤헤" description="2021.09.15" />
        <Card img="/img/3.jpg" title="쿨쿨" description="2021.09.19" />
        <Card img="/img/4.jpg" title="풋풋" description="2021.09.20" />
        <Card img="/img/5.jpg" title="누에고치" description="2021.11.15" />
        <Card img="/img/6.jpg" title="멋좀부림" description="2022.03.08" />
        <Card img="/img/7.jpg" title="서울구경" description="2022.03.27" />
        <Card img="/img/8.jpg" title="찡긋" description="2023.03.01" />
      </div>
    </>
  );
}

export default Gallery;

function Card(props) {
  return (
    <div className="picture-card">
      <img src={process.env.PUBLIC_URL + props.img} alt="cat"></img>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}
