import styles from "./Home.module.css";
import pic_1 from "./pic_1.jpg";
import pic_2 from "./pic_2.png";
import pic_3 from "./pic_3.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h1>Clinic+</h1>
        <div>
          <a href="#services">Các dịch vụ</a> |{" "}
          <a href="#about">Về chúng tôi</a> | <a href="#contact">Liên hệ</a>
        </div>
      </nav>
      <section className={styles.hero}>
        <h2>Chào mừng bạn đến với phòng khám nha khoa Cộng Hòa</h2>
        <p>Sức khỏe răng miệng là sự ưu tiên hàng đầu của chúng tôi</p>
        <button>Make an Appointment</button>
      </section>
      <section id="services" className={styles.services}>
        <h3 className={styles.sectionTitle}>Sự tự hào của chúng tôi</h3>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img className={styles.cardThumbnail} src={pic_1} alt="" />
            <div className={styles.cardTitle}>General Medicine</div>
            <div className={styles.cardContent}>
              Đến với phòng khám của chúng tôi
            </div>
          </div>

          <div className={styles.card}>
            <img className={styles.cardThumbnail} src={pic_2} alt="" />
            <div className={styles.cardTitle}>Pediatrics</div>
            <div className={styles.cardContent}>
              Chúng tôi tự hào vì một đội ngũ y - bác sĩ chuyên nghiệp
            </div>
          </div>

          <div className={styles.card}>
            <img className={styles.cardThumbnail} src={pic_3} alt="" />
            <div className={styles.cardTitle}>Dentistry</div>
            <div className={styles.cardContent}>
              Đạt được những thành tựu to lớn, tự hào là 1 trong top 100 phòng
              khám nha sĩ tốt nhất Việt Nam
            </div>
          </div>
        </div>
      </section>
      <section id="about" className={styles.about}>
        <h3 className={styles.sectionTitle}>About Us</h3>
        <center>
          <p>
            We are a team of dedicated healthcare professionals here to serve
            you.
          </p>
        </center>
      </section>
      <section id="contact" className={styles.contact}>
        <h3 className={styles.sectionTitle}>Contact Us</h3>
        <center>
          <p>Email: contact@clinicplus.com</p>
          <p>Phone: (123) 456-7890</p>
        </center>
      </section>
    </div>
  );
};

export default Home;
