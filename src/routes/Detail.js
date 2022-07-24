//git status를 하고 난 이후로 master가 보인다.
//git remote add origin 주소(movie2)해서 git이랑 github연결시킴
//그렇게 해서 master 띠운 상태에서 git push origin master하면 되는데 지금 비번 입력 안 햇다고 지랄하는 것 같음
//github branch main되어있어서수정요함
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "../css/Detail.module.css";
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
	useEffect(()=>{
		getMovie();
	},[]);
	console.log(movie);
	return(<div>
			{loading ? <p>Loading...</p> : 
			<div className={styles.wrap}>
				 <div className={styles.inner}>
					 <img src={movie.large_cover_image} alt={movie.title} className={styles.image}/>
					 <h1 className={styles.summary}>{movie.title}</h1><br/>
					 <span className={styles.summary}>평점: {movie.rating}</span><br/>
					 <span className={styles.summary}>상영년도: {movie.year}</span><br/>
				 </div>
			</div>
			}
		</div>
	)
}

export default Detail;