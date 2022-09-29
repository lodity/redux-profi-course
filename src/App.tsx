import React from 'react';
import PostContainer from './components/PostContainer';
import './App.css';
import PostContainer2 from './components/PostContainer2';

function App() {
	// const dispatch = useAppDispatch();
	// const { error, isLoading, users } = useAppSelector(
	// 	(state) => state.userReducer
	// );
	//
	// useEffect(() => {
	// 	dispatch(fetchUsers());
	// }, []);

	return (
		<div className="App">
			{/*{isLoading && <h1>Loading...</h1>}*/}
			{/*{error && <h1>{error}</h1>}*/}
			{/*{JSON.stringify(users, null, 2)}*/}
			<div style={{ display: 'flex' }}>
				<PostContainer />
				<PostContainer2 />
			</div>
		</div>
	);
}

export default App;
