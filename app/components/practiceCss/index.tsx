import './PracticeCss.css';
const PracticeCss = () => {
  return (
    <div>
      <div className="container">
        <div className="flex-item one">1</div>
        <div className="flex-item two">2</div>
        <div className="flex-item three">3</div>
        <div className="flex-item four">4</div>
        <div className="flex-item five">5</div>
        <div className="flex-item six">6</div>
      </div>

      <p className="column mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus esse ipsa inventore
        quisquam expedita, eveniet facilis soluta tenetur eaque mollitia a, veniam tempore aut
        aliquam quod amet voluptate nisi illum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nihil, voluptatum et at, odio perferendis fugiat sequi officia facere sapiente sed in
        facilis cupiditate hic nesciunt vitae commodi quis asperiores tempora! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Accusantium magnam minima aliquid sed fugiat porro
        cupiditate, voluptate quod saepe autem tempora! Laboriosam fuga nisi maxime accusamus enim,
        unde consequatur dolores.
      </p>

      <div className="masonry">
        <img src="https://picsum.photos/300/200" alt="" />
        <img src="https://picsum.photos/300/100" alt="" />
        <img src="https://picsum.photos/300/300" alt="" />
        <img src="https://picsum.photos/200/300" alt="" />
        <img src="https://picsum.photos/300/150" alt="" />
        <img src="https://picsum.photos/300/250" alt="" />
        <img src="https://picsum.photos/300/180" alt="" />
        <img src="https://picsum.photos/300/220" alt="" />
        <img src="https://picsum.photos/300/130" alt="" />
        <img src="https://picsum.photos/300/200" alt="" />
      </div>

      <div className="py-5">Grid masonry</div>
      <div className="grid">
        <img src="https://picsum.photos/300/200" alt="" />
        <img src="https://picsum.photos/300/100" alt="" />
        <img src="https://picsum.photos/300/300" alt="" />
        <img src="https://picsum.photos/300/150" alt="" />
        <img src="https://picsum.photos/300/250" alt="" />
        <img src="https://picsum.photos/300/180" alt="" />
        <img src="https://picsum.photos/300/180" alt="" />
        <img src="https://picsum.photos/300/220" alt="" />
        <img src="https://picsum.photos/300/130" alt="" />
        <img src="https://picsum.photos/300/200" alt="" />
      </div>

      <div className="py-16">Practice grid elements</div>

      <div className="grid-container">
        <div className="item1">1</div>
        <div className="item2">2</div>
        <div className="item3">3</div>
        <div className="item4">4</div>
        <div className="item5">5</div>
        <div className="item6">6</div>
        <div className="item7">7</div>
        <div className="item8">8</div>
        <div className="item9">9</div>
        <div className="item10">10</div>
      </div>
    </div>
  );
};
export default PracticeCss;
