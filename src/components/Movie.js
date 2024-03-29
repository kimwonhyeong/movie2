import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../css/Movie.module.css";
import {useState} from "react";
function Movie({mediumCoverImage, title, genres, summary, id}){
	const [smallImg, setSmallImg] = useState(true);
	const onBox = ()=>{
		setSmallImg(false);
	} 
	const outBox = ()=>{
		setSmallImg(true);
	}
	console.log(summary);
	return(
		<div className={styles.box} onMouseOver={onBox} onMouseOut={outBox} style={{"display": "block"}}>
			<Link to={`/movie/${id}`}><img src={mediumCoverImage} alt={title} className={styles.image}/></Link>
			{smallImg ? <img src={mediumCoverImage} alt={title} className={styles.image}/> : <img src={mediumCoverImage} alt={title} className={styles.imageBig}/>}
			<Link to={`/movie/${id}`} className={styles.Link}>{title}</Link>
			<p className={styles.summary}>{summary.length>235 ? `${summary.slice(0,235)}...` : summary}</p>
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