import styles from "./styles/Contact.module.css";

const Contact = () => (
	<section className={styles.contact}>
		<div>
			<h4>Contact</h4>

			<table>
				<tbody>
					<tr>
						<td>github</td>
						<td>
							<a href="https://github.com/Gabriel-Silverio-96" target="_blank" rel="noreferrer">
								github.com/Gabriel-Silverio-96
							</a>
						</td>
					</tr>
					<tr>
						<td>linkedin</td>
						<td>
							<a href="https://www.linkedin.com/in/gabriel-silverio-/" target="_blank" rel="noreferrer">
								linkedin.com/in/gabriel-silverio-/	
							</a>
						</td>					
					</tr>			
				</tbody>
			</table>
		</div>
	</section>
);

export default Contact;