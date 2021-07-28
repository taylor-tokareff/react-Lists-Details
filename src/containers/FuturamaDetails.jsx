/* eslint-disable max-len */
import React, { Component } from 'react';
import { fetchDetail } from '../DetailApi';
import CharDetail from '../components/app/characters/CharDetail';
import PropTypes from 'prop-types';

export default class FuturamaDetails extends Component {
  state = {
    details: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;
    const details = await fetchDetail(match.params.character);
    console.log(details);
    this.setState({ details, loading: false });
  }

  render() {
    const { details, loading } = this.state;

    if (loading) return <h1>Loading...</h1>;

    return <CharDetail quote={details[0].quote} character={details[0].character} image={details[0].image} />;
  }
}

FuturamaDetails.propTypes = {

  match: PropTypes.object.isRequired,
};

