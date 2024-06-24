import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h1>Clinic+</h1>
        <div>
          <a href="#services">Services</a> | <a href="#about">About Us</a> |{" "}
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section className={styles.hero}>
        <h2>Welcome to Clinic+</h2>
        <p>Your health is our top priority.</p>
        <button>Make an Appointment</button>
      </section>
      <section id="services" className={styles.services}>
        <h3 className={styles.sectionTitle}>Our Promises</h3>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img className={styles.cardThumbnail} src="./pic_1.jpg" alt="" />
            <div className={styles.cardTitle}>General Medicine</div>
            <div className={styles.cardContent}>
              Den voi phong kham cua chung toi
            </div>
          </div>

          <div className={styles.card}>
            <img className={styles.cardThumbnail} src="./pic_2.png" alt="" />
            <div className={styles.cardTitle}>Pediatrics</div>
            <div className={styles.cardContent}>
              Tu hao vi doi ngu chuyen nghiep
            </div>
          </div>

          <div className={styles.card}>
            <img className={styles.cardThumbnail} src="./pic_3.png" alt="" />
            <div className={styles.cardTitle}>Dentistry</div>
            <div className={styles.cardContent}></div>
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
