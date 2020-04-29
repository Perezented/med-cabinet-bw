import React, { useState } from 'react';

import Slider from 'infinite-react-carousel';
import styled from 'styled-components';

// Dummy data for testing before the API link
export const initialState = [
    {
        id: 100,
        name: 'blah',
        race: 'hybrid',
        flavors: 'Berry, Blueberry, Citrus',
        positive: 'Hungry, Euphoric, Creative, Aroused',
        negative: 'Dry Mouth',
        medical: 'Pain, Nausea, Headaches',
        rating: 4.2,
        description: 'This is some good stuff.',
    },
    {
        id: 101,
        name: 'blah2',
        race: 'sativa',
        flavors: 'Berry, Blueberry, Citrus',
        positive: 'Hungry, Euphoric, Creative, Aroused',
        negative: 'Dry Mouth',
        medical: 'Pain, Nausea, Headaches',
        rating: 4.2,
        description: 'This is some good stuff.',
    },
];

// Styled-Components that will be displayed across all the carousels
export const CardDiv = styled('div')`
    border: 1px solid black;
    margin: 5% 0;
    padding: 0;
`;
export const CardSection = styled('section')`
    margin: 1% 0 3%;
    padding: 1%;
`;

// Settings for the Carousels
export const settings = {
    adaptiveHeight: false,
    accessibility: true,
    arrows: false,
    autoplay: true,
    autoplayScroll: 4,
    autoplaySpeed: 5000,
    centerMode: false,
    dots: true,
    duration: 300,
    initialSlide: 1,
    slidesToShow: 5,
};

class TopStrains extends React.Component {
    render() {
        return (
            <CardSection>
                <h2>Top Strains</h2>
                <Slider {...settings}>
                    {/* Component from infinite-react-carousel */}
                    <CardDiv>
                        <h3>StrainName</h3>
                        <p>StrainRace</p>
                        <p>
                            StrainText, description.StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description.
                        </p>
                        <h5>Effects</h5>
                        <h6>Medical:</h6>
                        <ul>
                            <li>Effect1</li>
                            <li>Effect2</li>
                            <li>Effect3</li>
                        </ul>
                        <ul>Positive:</ul>
                        <ul>Negative:</ul>
                        <button>Add to Favorites</button>
                    </CardDiv>{' '}
                    <CardDiv>
                        <h3>StrainName</h3>
                        <p>StrainRace</p>
                        <p>
                            StrainText, description.StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description.
                        </p>
                        <h5>Effects</h5>
                        <h6>Medical:</h6>
                        <ul>
                            <li>Effect1</li>
                            <li>Effect2</li>
                            <li>Effect3</li>
                        </ul>
                        <ul>Positive:</ul>
                        <ul>Negative:</ul>
                        <button>Add to Favorites</button>
                    </CardDiv>
                    <CardDiv>
                        <h3>StrainName</h3>
                        <p>StrainRace</p>
                        <p>
                            StrainText, description.StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description.
                        </p>
                        <h5>Effects</h5>
                        <h6>Medical:</h6>
                        <ul>
                            <li>Effect1</li>
                            <li>Effect2</li>
                            <li>Effect3</li>
                        </ul>
                        <ul>Positive:</ul>
                        <ul>Negative:</ul>
                        <button>Add to Favorites</button>
                    </CardDiv>
                    <CardDiv>
                        <h3>StrainName</h3>
                        <p>StrainRace</p>
                        <p>
                            StrainText, description.StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description.
                        </p>
                        <h5>Effects</h5>
                        <h6>Medical:</h6>
                        <ul>
                            <li>Effect1</li>
                            <li>Effect2</li>
                            <li>Effect3</li>
                        </ul>
                        <ul>Positive:</ul>
                        <ul>Negative:</ul>
                        <button>Add to Favorites</button>
                    </CardDiv>
                    <CardDiv>
                        <h3>StrainName</h3>
                        <p>StrainRace</p>
                        <p>
                            StrainText, description.StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description.
                        </p>
                        <h5>Effects</h5>
                        <h6>Medical:</h6>
                        <ul>
                            <li>Effect1</li>
                            <li>Effect2</li>
                            <li>Effect3</li>
                        </ul>
                        <ul>Positive:</ul>
                        <ul>Negative:</ul>
                        <button>Add to Favorites</button>
                    </CardDiv>
                    <CardDiv>
                        <h3>StrainName</h3>
                        <p>StrainRace</p>
                        <p>
                            StrainText, description.StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description.
                        </p>
                        <h5>Effects</h5>
                        <h6>Medical:</h6>
                        <ul>
                            <li>Effect1</li>
                            <li>Effect2</li>
                            <li>Effect3</li>
                        </ul>
                        <ul>Positive:</ul>
                        <ul>Negative:</ul>
                        <button>Add to Favorites</button>
                    </CardDiv>
                    <CardDiv>
                        <h3>StrainName</h3>
                        <p>StrainRace</p>
                        <p>
                            StrainText, description.StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description.
                        </p>
                        <h5>Effects</h5>
                        <h6>Medical:</h6>
                        <ul>
                            <li>Effect1</li>
                            <li>Effect2</li>
                            <li>Effect3</li>
                        </ul>
                        <ul>Positive:</ul>
                        <ul>Negative:</ul>
                        <button>Add to Favorites</button>
                    </CardDiv>
                    {initialState.forEach((value, i) => {
                        return (
                            <CardDiv key={i}>
                                <h3>{value.name}</h3>
                            </CardDiv>
                        );
                    })}
                </Slider>
            </CardSection>
        );
    }
}
export default TopStrains;
