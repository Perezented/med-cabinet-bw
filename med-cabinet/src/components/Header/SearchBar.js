import React from 'react';
import SearchResults from '../SearchResults';
import { authenticAxios } from '../../utils/authenticAxios';
import { connect } from 'react-redux';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import styled from 'styled-components';

//  Styled-Components
const Search = styled('form')`
    input {
        width: 30vw;

        margin-top: 3%;
    }
`;
const SearchContainer = styled('div')`
    width: 50vw;
    padding: 3%;
    button {
        margin: 2%;
    }
`;

class SearchBar extends React.Component {
    // Empty initial state for the search bar
    state = {
        search: {
            searchBar: '',
        },
    };

    // Function to handle the search bar
    handleChanges = (e) => {
        // e.preventDefault();
        this.setState({
            search: {
                ...this.state.search,
                [e.target.name]: e.target.value,
            },
        });
    };

    //Add a Submit search bar (onSubmit)
    submitSearch = (e) => {
        e.preventDefault();
        authenticAxios()
            .get(
                `https://medcabinet-strain-api.herokuapp.com/strains/query/${this.state.search}`
            ) //UPDATE ME WITH NEW POST LINK//////////
            .then((res) => {
                console.log(res);
                this.setState({
                    search: JSON.parse(res.data),
                });
                // e.preventDefault();
                return (
                    <>
                        <Route
                            path="/SearchResults"
                            component={SearchResults}
                        />
                    </>
                );
                // window.location = '/SearchResults';
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        console.log('aaaaaaayyyyyyykiiiidddd', this.state.search);

        return (
            // Search bar form with button
            <>
                <SearchContainer>
                    <Search onSubmit={this.submitSearch}>
                        <input
                            type="text"
                            name="searchBar"
                            value={this.state.search.searchBar}
                            onChange={this.handleChanges}
                            placeholder="Search Strains, Effects, or Ailments"
                        />
                        <button onClick={<Link to="SearchResults" />}>
                            Search
                        </button>
                    </Search>
                    {/* <AdvancedSearch /> */}
                </SearchContainer>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps in search: ', state);
    return {
        search: state.search,
    };
};
export default connect(mapStateToProps, {})(SearchBar);
