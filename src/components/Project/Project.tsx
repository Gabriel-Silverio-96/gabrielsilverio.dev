import Image from "next/image";
import styles from "./styles/Project.module.css";

const Project = () => (
	<div className={styles.project}>
		<Image
			src="/logo-taskyup-ascii.png"
			alt="Logo TaskYup ascii"
			width={964}
			height={237}            
		/>
		<p>
			I am currently working on a personal project called TaskYup, which
			is currently a task organizer in a quick and easy format. This
			project is evolution other project that build in 2021 called mynotes.
			I build project using react on the frontend and a node api on the
			backend.
		</p>
		<a href="https://taskyup.com/auth/signup" target="_blank" rel="noreferrer">
            See more
		</a>
	</div>
);

export default Project;
