import "./Blog.css";
import { useState } from "react";

function Blog() {
  let [list, list변경] = useState([
    [
      "세계의 귀여운 고양이 종류",
      "이예나",
      "2024.03.03",
      "브리티시쇼트헤어, 아메리칸쇼트헤어, 라가머핀, 터키시앙고라, 러시안블루, 페르시안고양이, 노르웨이숲, 시베리안숲, 먼치킨, 버만, 버미즈, 뱅갈 등 넘나 많다. 이 중에서 러시안 블루가 가장 귀염뽀짝하다고 할 수 있다.",
      0,
      0,
    ],

    [
      "고양이가 절대 먹으면 안 되는 음식",
      "이예나",
      "2024.03.04",
      "날생선, 초콜릿, 강아지 사료, 유제품, 카페인, 견과류 등등등 굉장히 많다. 고양이가 맞나 싶다.",
      0,
      0,
    ],

    [
      "고양이가 우는 이유",
      "이예나",
      "2024.03.05",
      "야행성 동물인 고양이는 낮에는 내내 잠을 자고, 밤이 되면 활동을 시작한다. 우다다다를 시전하며 신난 고양이는 낮에 비축한 에너지를 폭발적으로 발산한다.",
      0,
      0,
    ],
  ]);

  let [modal, setModal] = useState(false);
  let [modalIndex, setModalIndex] = useState("");

  let [제목입력, 제목입력변경] = useState("");
  let [작성자입력, 작성자입력변경] = useState("");
  let [작성일자입력, 작성일자입력변경] = useState("");
  let [내용입력, 내용입력변경] = useState("");

  return (
    <div className="blog-container">
      <h2>🍀 Blog</h2>
      <div className="left-container">
        <div className="form">
          <div className="w-100">
            <h4>제목</h4>
            <input
              onChange={(e) => {
                제목입력변경(e.target.value);
              }}
            ></input>
          </div>
          <div className="w-50">
            <h4>작성자</h4>
            <input
              onChange={(e) => {
                작성자입력변경(e.target.value);
              }}
            ></input>
          </div>
          <div className="w-50">
            <h4>작성일자</h4>
            <input
              onChange={(e) => {
                작성일자입력변경(e.target.value);
              }}
            ></input>
          </div>
          <div className="w-100">
            <h4>내용</h4>
            <input
              style={{ height: "80px" }}
              onChange={(e) => {
                내용입력변경(e.target.value);
              }}
            ></input>
          </div>
          <div className="w-100">
            <button
              onClick={() => {
                if (
                  제목입력 === "" ||
                  작성자입력 === "" ||
                  작성일자입력 === "" ||
                  내용입력 === ""
                ) {
                  alert("내용을 입력하세요");
                } else {
                  const copylist = [...list];
                  copylist.unshift([
                    제목입력,
                    작성자입력,
                    작성일자입력,
                    내용입력,
                    0,
                    0,
                  ]);
                  list변경(copylist);
                }
              }}
            >
              업로드
            </button>
          </div>
        </div>
      </div>
      <div className="right-container">
        {list.map(function (element, index) {
          return (
            <List
              list={list}
              list변경={list변경}
              setModal={setModal}
              setModalIndex={setModalIndex}
              index={index}
            ></List>
          );
        })}
      </div>
      {modal == true ? (
        <Modal list={list} modalIndex={modalIndex} setModal={setModal}></Modal>
      ) : null}
    </div>
  );
}

function List(props) {
  return (
    <div
      className="list"
      onClick={() => {
        props.setModal(true);
        props.setModalIndex(props.index);
      }}
    >
      <h4>
        {/* 제목 */}
        {props.list[props.index][0]}&nbsp;&nbsp;
        {/* 따봉 */}
        <span
          onClick={(e) => {
            const copylist = [...props.list];
            copylist[props.index][4] += 1;
            props.list변경(copylist);
            e.stopPropagation();
          }}
        >
          👍
        </span>
        {props.list[props.index][4]}&nbsp;&nbsp;
        {/* 유유 */}
        <span
          onClick={(e) => {
            const copylist = [...props.list];
            copylist[props.index][5] += 1;
            props.list변경(copylist);
            e.stopPropagation();
          }}
        >
          👎
        </span>
        {props.list[props.index][5]}
      </h4>
      {/* 작성일자 */}
      <p>{props.list[props.index][2]}</p>

      <button
        onClick={(e) => {
          const copylist = [...props.list];
          copylist.splice(props.index, 1);
          props.list변경(copylist);
          e.stopPropagation();
        }}
      >
        삭제
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <div
      className="modal"
      onClick={() => {
        props.setModal(false);
      }}
    >
      <h3>{props.list[props.modalIndex][0]}</h3>
      <h4>{props.list[props.modalIndex][1]}</h4>
      <h4>{props.list[props.modalIndex][2]}</h4>
      <p>{props.list[props.modalIndex][3]}</p>
    </div>
  );
}

export default Blog;
