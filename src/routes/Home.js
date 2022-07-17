import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Allstyles from "../css/All.module.css";
function Home() {
	const [loading,setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(()=>{
		getMovies();
	},[]);
	console.log(movies);
	return(
		<div className={Allstyles.all}>
			{loading ? <h1>Loading...</h1>
				:
			<div>
				{movies.map((movie)=>
							//react.js에 한해서 map함수에는 반드시 key를 넣어야한다.
					<Movie
						key={movie.id}
						id={movie.id}
						mediumCoverImage={movie.medium_cover_image}
						title={movie.title}
						genres={movie.genres}
						summary={movie.summary}
					/>
				)}
			</div>
			}
		</div>
	)
}

export default Home;