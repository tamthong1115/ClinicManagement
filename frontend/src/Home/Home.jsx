import { useState } from "react";

//thiet ke phan noi dung cho trang chu
const Home = () => {
  return (
    //nen tong the cua noi dung cho trang chu
    <div className="base">
      {/*banner quang cao dich vu*/}
      <div className="img-banner"></div>
      <div className="sub tile">
        <h3>Hello</h3>
      </div>
      {/*Hien thi mot so thong tin gioi thieu ve phong kham,
        cho 3 thanh phan, gom:
            1. Anh chup
            2. Tieu de - bieu ngu
            3. Mo ta chung */}
      <div className="sub-description">
        <img className="thumbnail" src="#" alt="" />
        <div className="sub-titles">
          <h3>text_1</h3>
        </div>
        <div className="description">
          <p>text_2</p>
        </div>
      </div>

      <div className="sub-description">
        <img className="thumbnail" src="#" alt="" />
        <div className="sub-titles">
          <h3>text_1</h3>
        </div>
        <div className="description">
          <p>text_2</p>
        </div>
      </div>

      <div className="sub-description">
        <img className="thumbnail" src="#" alt="" />
        <div className="sub-titles">
          <h3>text_1</h3>
        </div>
        <div className="description">
          <p>text_2</p>
        </div>
      </div>

      {/*tao tiep 1 cot la tin tuc noi bat, 
      1 cot la dich vu noi bat */}
      <div className="news-container">
        {/*moi 1 news bao gom: 1 thumbnail, 1 tieu de va 1 tom tat */}
        <div className="news">
          <img className="thumbnail" src="#" alt="" />
          <div className="sub-title">news</div>
          <div className="descriptions">description</div>
        </div>

        <div className="news">
          <img className="thumbnail" src="#" alt="" />
          <div className="sub-title">news</div>
          <div className="descriptions">description</div>
        </div>

        <div className="news">
          <img className="thumbnail" src="#" alt="" />
          <div className="sub-title">news</div>
          <div className="descriptions">description</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
