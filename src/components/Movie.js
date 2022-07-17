import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../css/Movie.module.css";
import {useState} from "react";
function Movie({mediumCoverImage, title, genres, summary, id}){
	const [hide, setHide] = useState(true);
	const onSummary = ()=>{
		setHide(false);
	}
	const offSummary = ()=>{
		setHide(true);
	}
	return(
		<div className={styles.box}>
			<img src={mediumCoverImage} alt={title} className={styles.image}/>
			
			<h1><Link to={`/movie/${id}`} className={styles.Link}>{title}</Link></h1>
			{hide ? <p onMouseOver={onSummary} className={styles.summary}>줄거리 보기</p> : <p onMouseOut={offSummary} className={styles.summary}>{summary}</p>}
			<ul>
				{genres.map((genre,index)=>(<li key={index} className={styles.genre}>[{genre}]</li>))}
			</ul>
		</div>
		
	)
}

Movie.propTypes = {
	id: PropTypes.string.isRequired,
	mediumCoverImage: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;