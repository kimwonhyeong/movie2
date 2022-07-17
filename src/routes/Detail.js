import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "../css/Detail.module.css";
import {Link} from "react-router-dom";
function Detail(){
	const [movie, setMovie] = useState([]);
	const {id} = useParams();
	const [loading,setLoading] = useState(true);
	const getMovie = async()=>{
		const json =await(
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(json.data.movie);
		setLoading(false);
	};
	console.log(movie);
	useEffect(()=>{
		getMovie();
	},[]);
	return(<div>
			{loading ? <p>Loading...</p> : 
				<div className={styles.box}>
					<img src={movie.large_cover_image} alt={movie.title} className={styles.image}/>
					<div className={styles.box3}>
						<span>{movie.title}</span><br/>
						<span>{`최초 상영 날짜:${movie.date_uploaded}`}</span><br/>
						<span>{`${movie.runtime}분 상영`}</span><br/>
						<span><a href={`${movie.url}`} className={styles.Link}>{`영화 보기`}</a></span><br/>
						{movie.genres.map((genre,index)=>(<li key={index}>{genre}</li>))}
				 	</div>
				</div>
			}
		</div>
	)
}
export default Detail;