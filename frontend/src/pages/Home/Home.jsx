import styles from "./Home.module.css";
import React, { useRef, useEffect } from "react";

function GetHeigth() {
  const eleRef = useRef(null);
  useEffect(() => {
    if (eleRef.current) {
      const height = eleRef.current.clientHeight;
      return height + 10;
    }
  }, []);
}

const Home = () => {
  return (
    <div className={styles.container}>
      <img
        style={{ boxShadow: "none" }}
        src="/Home_Resources/Cover-Image.png"
        alt
      ></img>

      <nav className={styles.navbar}>
        <h1>Clinic+</h1>
        <div>
          <a href="#services">Các dịch vụ</a> |{" "}
          <a href="#about">Về chúng tôi</a> | <a href="#contact">LIên hệ</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <h2>Chào mừng bạn đến với Clinic+</h2>
        <p>Sức khỏe răng miệng của bạn là ưu tiên hàng đầu của chúng tôi.</p>
        <p>
          Đặt lịch ngay hôm nay để nhận nhiều ưu đãi hấp dẫn. Nhanh tay lên nào
          mọi người ơi!
        </p>
        <button type="button">Đặt lịch ngay!!!</button>
      </section>

      <section id="services" className={styles.services}>
        <h3 style={{ fontWeight: "bold" }} className={styles.sectionTitle}>
          TẠI SAO NÊN CHỌN HỆ THỐNG NHA KHOA CLINIC+?
        </h3>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img
              className={styles.cardThumbnail}
              src="/Home_Resources/pic_1_home.jpg"
              alt=""
            />
            <div className={styles.cardTitle}>Bác sĩ chuyên môn cao</div>
            <div className={styles.cardContent}>
              Hội tụ hơn 20 bác sĩ chuyên nghiệp hàng đầu, đầy đủ bằng cấp,
              chứng chỉ hành nghề, thành thạo tay nghề ít nhất 2 năm, được đào
              tạo nâng cao chuyên môn hàng tuần, đã điều trị thành công cho hơn
              20 000 ca Ths, Bs Nguyễn Quang Tiến, Thạc sĩ niềng răng Đại học Y
              Khoa quốc tế Munster, CHLB Đức, cố vấn và đào tạo. Tác giả sách
              “Niềng răng hiểu đúng hiểu đủ”
            </div>
          </div>

          <div
            style={{ backgroundColor: "#9984f9", color: "white" }}
            className={styles.card}
          >
            <img
              className={styles.cardThumbnail}
              src="/Home_Resources/pic_2_home.png"
              alt=""
            />
            <div className={styles.cardTitle}>Cơ sở vật chất hiện đại</div>
            <div className={styles.cardContent}>
              Phòng khám đạt chuẩn vô trùng. Có máy chụp phim chuyên niềng răng
              Panorex – Ceph (bắt buộc sử dụng khi thăm khám và lên kế hoạch
              điều trị), công nghệ siêu âm Piezotome nhổ không đau… Luôn cập
              nhật kỹ thuật, công nghệ nha khoa tiên tiến hàng đầu thế giới để
              áp dụng cho các ca chăm sóc răng miệng của khách hàng.
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.cardThumbnail}
              src="/Home_Resources/pic_3_home.png"
              alt=""
            />
            <div className={styles.cardTitle}>Hệ thống nha khoa</div>
            <div className={styles.cardContent}>
              Được thành lập từ năm 2005 & được cấp giấy phép hành nghề. Trải
              qua nhiều năm phát triển, đến nay Nha Khoa Đăng Lưu đã có Hệ thống
              rộng lớn gồm 16 chi nhánh trải khắp Tp.HCM, Tp.Thủ Đức, Tp.Cần Thơ
              và Tp.Mỹ Tho. Dự kiến trong tương lai sẽ mở rộng thêm nhiều chi
              nhánh mới, giúp người dân dễ dàng tiếp cận địa chỉ niềng răng,
              chăm sóc răng miệng uy tín hàng đầu.
            </div>
          </div>
        </div>
      </section>

      <section id="info" className={styles.info}>
        <div className={styles.news}>
          <div style={{ width: "500px" }} className={styles.cardNews}>
            <center>
              <h3 style={{ marginBottom: "10px", fontWeight: "bold" }}>
                TIN TỨC
              </h3>
            </center>
            <table>
              <tr>
                <td style={{ width: "40%" }} rowSpan={2}>
                  <a href="#">
                    <img src="/Home_Resources/News_1.jpg" alt="true" />
                  </a>
                </td>
                <th style={{}}>
                  <a href="#">News_1</a>
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    width: "60%",
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  <a href="#">
                    this is the first news. If you want to change it, please
                    contact to the system administrator.
                  </a>
                </td>
              </tr>

              <tr>
                <td style={{ width: "30%" }} rowSpan={2}>
                  <a href="#">
                    <img src="/Home_Resources/News_2.jpg" alt="true" />
                  </a>
                </td>
                <th>
                  <a href="#">News_2</a>
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    width: "60%",
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  <a href="#">
                    this is the first news. If you want to change it, please
                    contact to the system administrator.
                  </a>
                </td>
              </tr>

              <tr>
                <td style={{ width: "30%" }} rowSpan={2}>
                  <a href="#">
                    <img src="/Home_Resources/News_3.jpg" alt="" />
                  </a>
                </td>
                <th>
                  <a href="">News_3</a>
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    width: "60%",
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  <a href="#">
                    this is the first news. If you want to change it, please
                    contact to the system administrator.
                  </a>
                </td>
              </tr>

              <tr>
                <td style={{ width: "30%" }} rowSpan={2}>
                  <a href="#">
                    <img src="/Home_Resources/News_4.jpg" alt="" />
                  </a>
                </td>
                <th>
                  <a href="#">News_4</a>
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    width: "60%",
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  <a href="#">
                    this is the first news. If you want to change it, please
                    contact to the system administrator.
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className={styles.promotion}>
          <div style={{ width: "500px" }} className={styles.cardPromotion}>
            <center>
              <h3 style={{ marginBottom: "10px", fontWeight: "bold" }}>
                KHUYẾN MÃI
              </h3>
            </center>
            <table>
              <tr>
                <td style={{ width: "40%" }} rowSpan={2}>
                  <img src="/Home_Resources/News_1.jpg" alt="true" />
                </td>
                <th>
                  <a href="#">Promotion_1</a>
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    width: "60%",
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  <a href="#">
                    this is the first news. If you want to change it, please
                    contact to the system administrator.
                  </a>
                </td>
              </tr>

              <tr>
                <td style={{ width: "30%" }} rowSpan={2}>
                  <img
                    className="news-thumbnail"
                    src="/Home_Resources/News_2.jpg"
                    alt="true"
                  />
                </td>
                <th>
                  <a href="#">Promotion_2</a>
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    width: "60%",
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  <a href="#">
                    this is the first news. If you want to change it, please
                    contact to the system administrator.
                  </a>{" "}
                </td>
              </tr>

              <tr>
                <td style={{ width: "30%" }} rowSpan={2}>
                  <a href="#">
                    <img
                      className="news-thumbnail"
                      src="/Home_Resources/News_3.jpg"
                      alt=""
                    />
                  </a>
                </td>
                <th>
                  <a href="#">Promotion_3</a>
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    width: "60%",
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  <a href="#">
                    this is the first news. If you want to change it, please
                    contact to the system administrator.
                  </a>{" "}
                </td>
              </tr>

              <tr>
                <td style={{ width: "30%" }} rowSpan={2}>
                  <a href="#">
                    <img src="/Home_Resources/News_4.jpg" alt="" />
                  </a>
                </td>
                <th>
                  <a href="#">Promotion_4</a>
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    width: "60%",
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  <a href="#">
                    this is the first news. If you want to change it, please
                    contact to the system administrator.
                  </a>{" "}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <h3 className={styles.sectionTitle}>Về chúng tôi</h3>
        <center>
          <p>
            We are a team of dedicated healthcare professionals here to serve
            you.
          </p>
        </center>
      </section>

      <section id="contact" className={styles.contact}>
        <h3 className={styles.sectionTitle}>Liên hệ với chúng tôi:</h3>
        <center>
          <p>Email: contact@clinicplus.com</p>
          <p>Phone: (123) 456-7890</p>
        </center>
      </section>
    </div>
  );
};

export default Home;
