import React, { Component } from "react";

// import Detail from "./Detail";
import { fetchMovieDetailById } from "../../api/fetchTMDB";

class DetailLogic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetail: {},
      loading: true,
    }
  }

  async componentDidMount() {
    const movieId = this.props.match.params.id;
    const data = await fetchMovieDetailById(movieId);
    console.log(data);
  }

  render() {
    return <div>Detail here</div>
  }
}

export default DetailLogic;