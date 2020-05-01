import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getStrainsDataFromActions } from '../../store/actions';
import {
    settings,
    CardDiv,
    CardSection,
    capitalizeFirstLetter,
} from './Settings';
import Slider from 'infinite-react-carousel';

const TopStrains = (props) => {
    useEffect(() => {
        props.getStrainsDataFromActions();
    }, []);

    // console.log('TopStrains', props);

    return (
        <CardSection>
            <h2>Top Strains</h2>
            <section>
                {props.isFetching && (
                    <Loader
                        type="Circles"
                        color="#00BFFF"
                        height={60}
                        width={80}
                    />
                )}
                {/* <Slider {...settings}> */}
                {props.strains.map((value) => {
                    if (value.medical !== null) {
                        if (value.negative !== null) {
                            if (value.rating === 5) {
                                return (
                                    <CardDiv key={value.id}>
                                        <h3>{value.name}</h3>
                                        <p>
                                            {capitalizeFirstLetter(value.race)}
                                        </p>
                                        <h5>{value.medical}</h5>
                                        <p>{value.description}</p>
                                        <ul>Positive: {value.positive}</ul>
                                        <ul>Negative: {value.negative}</ul>
                                        <button>Add to Favorites</button>
                                    </CardDiv>
                                );
                            }
                        }
                    }
                })}
            </section>
            {/* </Slider> */}
        </CardSection>
    );
};

const mapStateToProps = (state) => {
    // console.log('mapStateToProps state: ', state);
    return {
        error: state.info.error,
        isFetching: state.info.isFetching,
        strains: state.info.strains,
    };
};
export default connect(mapStateToProps, { getStrainsDataFromActions })(
    TopStrains
);
