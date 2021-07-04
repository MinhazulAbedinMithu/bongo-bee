import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import PostDetails from "./components/PostDetails";
import Header from "./components/Header";
import Friends from "./components/Friends";
import { Container } from "react-bootstrap";

const Wrapper = styled.div`
	font-family: "Roboto", sans-serif;
`;
function App() {
	return (
		<Wrapper>
			<Router>
				<Header />
				<Container>
					<Switch>
						<Route path="/posts" component={Posts} />
						<Route path="/user/:userId" component={UserProfile} />
						<Route path="/post/:postId" component={PostDetails} />
						<Route path="/friends" component={Friends} />
						<Route exact path="/" component={Posts} />
					</Switch>
				</Container>
			</Router>
		</Wrapper>
	);
}

export default App;
