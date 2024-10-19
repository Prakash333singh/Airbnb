import React from 'react';
import TourCard from '../../shared/TourCard';
//import tourData from '../../assets/data/tours'; // Assuming this is a static data file
import { Col } from 'reactstrap';
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from './../../utils/config'; // Uncomment if using an API

const FeaturedTourList = () => {
    // Uncomment and use the API URL when needed
    const { data: FeaturedTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`);

    // If using static data, ensure that tourData is correctly formatted
    // const FeaturedTours = tourData; // Comment out this line when using the API
    // const loading = false; // Adjust this if you have a loading state
    // const error = null; // Adjust this if you have an error state

    // console.log(FeaturedTours);

    return (
        <>
            {loading && <h4>Loading......</h4>}
            {error && <h4>{error}</h4>}
            {!loading && !error && FeaturedTours?.length > 0 ? (
                FeaturedTours.map(tour => (
                    <Col lg='3' md='6' sm='6' className='mb-4' key={tour?._id}>
                        <TourCard tour={tour} />
                    </Col>
                ))
            ) : (
                <h4>No featured tours available.</h4>
            )}
        </>
    );
};

export default FeaturedTourList;
