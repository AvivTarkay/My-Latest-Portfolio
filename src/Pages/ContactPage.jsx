import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
	return (
		<div className="contactMainPage">
			<div className="title">
				<Tittle title={"About Me"} span={"About Me"} />
			</div>
			<div className="ContactPage">
				<div className="contact-sect">
					<ContactItem icon={phone} text1={"+972 549102114"} title={"Phone"} />
					<a className="mailToMe" href="mailto:abushtarkay@gmail.</a>com">
						<ContactItem
							icon={email}
							text1={"Abushtarkay@hmail.com"}
							title={"Email"}
						></ContactItem>
					</a>
					<ContactItem
						icon={location}
						text1={"Southern District"}
						text2={"Israel"}
						title={"Address"}
					/>
				</div>
			</div>
		</div>
	);
}

export default ContactPage;
