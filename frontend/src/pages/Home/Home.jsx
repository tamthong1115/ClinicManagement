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
        <h3 className={styles.sectionTitle}>Our Services</h3>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>General Medicine</div>
          <div className={styles.card}>Pediatrics</div>
          <div className={styles.card}>Dentistry</div>
        </div>
      </section>
      <section id="about" className={styles.about}>
        <h3 className={styles.sectionTitle}>About Us</h3>
        <p>
          We are a team of dedicated healthcare professionals here to serve you.
        </p>
      </section>
      <section id="contact" className={styles.contact}>
        <h3 className={styles.sectionTitle}>Contact Us</h3>
        <p>Email: contact@clinicplus.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default Home;
