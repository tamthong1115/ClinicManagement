import { useState } from "react";

import "./Home.module..scss";

//thiet ke phan noi dung cho trang chu
const Home = () => {
  return (
    //nen tong the cua noi dung cho trang chu
    <div className="base">
      {/*banner quang cao dich vu*/}
      <img
        className="img-banner"
        src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/6/20/anh-vs-dan-mach-1718879288915163830326.jpg"
        alt="true"
      />
      <div className="sub tile">
        <center>
          <h3>Why should you choose our services?</h3>
        </center>
      </div>
      {/*Hien thi mot so thong tin gioi thieu ve phong kham,
        cho 3 thanh phan, gom:
            1. Anh chup
            2. Tieu de - bieu ngu
            3. Mo ta chung */}
      <div className="sub-description-container">
        <div className="sub-description">
          <img className="sub-thumbnail" src="#" alt="" />
          <div className="sub-titles">
            <h3>text_1</h3>
          </div>
          <div className="description">
            <p>text_2</p>
          </div>
        </div>

        <div className="sub-description">
          <img className="sub-thumbnail" src="#" alt="" />
          <div className="sub-titles">
            <h3>text_1</h3>
          </div>
          <div className="description">
            <p>text_2</p>
          </div>
        </div>

        <div className="sub-description">
          <img className="sub-thumbnail" src="#" alt="" />
          <div className="sub-titles">
            <h3>Chung toi tu hao vi co doi ngu bac si chuyen</h3>
          </div>
          <div className="description">
            <p>
              VOi tham nien tu 5-15 nam kinh nghiem, duoc dao tao chuyen sau va
              co ki thuat vo cung manh me va chuyen nghiep
            </p>
          </div>
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

      <div className="services-container">
        <div className="services">
          <img className="thumbnail" src="#" alt="" />
          <div className="sub-title">news</div>
          <div className="descriptions">description</div>
        </div>
        <div className="services">
          <img className="thumbnail" src="#" alt="" />
          <div className="sub-title">news</div>
          <div className="descriptions">description</div>
        </div>
        <div className="services">
          <img className="thumbnail" src="#" alt="" />
          <div className="sub-title">news</div>
          <div className="descriptions">description</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
