import { Container } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";


const ContactUs = () => {
	return (

		<>
			<NavigationBar />
			<Container className="contact-us-container" style={{ margin: "16px auto", padding: "0px 30px 10px 30px"}}>
				<section className="page-header" style={{ marginTop: 0, marginBottom: 10}}>
					<h2>Tell us about yourself</h2>
					<h5>Whether you have questions or you would just like to say hello, contact us.</h5>
				</section>
				<section className="contact-form-wrapper">
					<form action="https://formspree.io/f/xwkgrlgj" method="POST">
						<div className="row">
							<div className="form-group col-md-6">
								<label for="name">Your Name <sup style={{ color: "red", fontSize: "14px" }}>*</sup></label>
								<input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
							</div>
							<div className="form-group col-md-6">
								<label for="email">Your Email Address <sup style={{ color: "red", fontSize: "14px" }}>*</sup></label>
								<input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
							</div>
						</div>
						<div className="row">
							<div className="form-group col-md-6">
								<label for="subject">Subject <sup style={{ color: "red", fontSize: "14px" }}>*</sup></label>
								<input type="text" className="form-control" id="name" name="subject" placeholder="Subject" required />
							</div>
							<div className="form-group col-md-6">
								<label for="phone">Your Phone Number</label>
								<input type="text" className="form-control" id="phone" name="phone" placeholder="Phone" />
							</div>
						</div>
						<div className="row">
							<div className="form-group col-12">
								<label for="message">How can we help you? <sup style={{ color: "red", fontSize: "14px" }}>*</sup></label>
								<textarea name="message" id="message" className="form-control" rows="7" placeholder="Enter your message here" required></textarea>
								<input type="hidden" name="_next" value="google.com" />

							</div>
						</div>
						<div className="text-center">
							<button type="submit" className="btn btn-primary mb-4">Submit</button>
							<p className="form-footer-text">We'll get back to you in 1-2 business days.</p>
						</div>
					</form>
				</section>
			</Container>
		</>
	);
};

export default ContactUs;
