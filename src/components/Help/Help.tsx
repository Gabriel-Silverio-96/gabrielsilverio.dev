import styles from "./styles/Help.module.css";

const Help = () => (
	<section className={styles.help}>
		<h4>type: gs "command"</h4>

		<div className={styles.commands}>
			<h4>Commands</h4>

			<table>
				<tbody>
					<tr>
						<td>help</td>
						<td>View all options</td>
					</tr>
					<tr>
						<td>about</td>
						<td>
							With this option you can get to know me a little
							more
						</td>
					</tr>
					<tr>
						<td>project</td>
						<td>
							See which portfolio project I'm currently working on
						</td>
					</tr>
					<tr>
						<td>contact</td>
						<td>Contact me at...</td>
					</tr>
					<tr>
						<td>clear</td>
						<td>Clear terminal</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
);

export default Help;
