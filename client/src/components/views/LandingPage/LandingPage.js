/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import {
    //  Icon,
 Col, Card, Row } from 'antd';
 import { FaRocket } from "react-icons/fa"
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import CheckBox1 from './Sections/CheckBox1';
// import RadioBox from './Sections/RadioBox';
import { state, category } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';

const { Meta } = Card;

function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")

    const [Filters, setFilters] = useState({
        continents: [],
        price: []
    })

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch post datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters,
            searchTerm: SearchTerms
        }
        getProducts(variables)
        setSkip(skip)
    }


    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24}>
            <Card className="hoverble"
                hoverable={true}
                cover={<a href={`/tour/${product._id}`} > <ImageSlider images={product.images} className="image-height" /></a>}
            >
                <Meta
                    title={product.title}
                    description={product.title2}
        
                />
            </Card>

         
        </Col>
    })


    const showFilteredResults = (filters) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        getProducts(variables)
        setSkip(0)

    }

    const handlePrice = (value) => {
        const data = category;
        let array = [];

        for (let key in data) {

            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array)
        return array
    }

    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "category") {
            let categoryValues = handlePrice(filters)
            newFilters[category] = categoryValues

        }

        console.log(newFilters)

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const updateSearchTerms = (newSearchTerm) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerms(newSearchTerm)

        getProducts(variables)
    }


    return (
        <div className="landingpage" style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'green', fontSize: '60' }}>  Let's Tour Nigeria
                 <FaRocket  style={{ color: 'green', fontSize: '20' }} /> 
                 </h2>
            </div>


            {/* Filter  */}

            <Row gutter={[16, 16]}>
                {/* <Col lg={12} xs={24} br={30} > */}
                    <CheckBox
                        list={state}
                        handleFilters={filters => handleFilters(filters, "continents")}
                    />

                   <CheckBox1
                        list={category}
                        handleFilters={filters => handleFilters(filters, "category")}
                    />
                {/* </Col> */}
                {/* <Col lg={12} xs={24}> */}
                    
                    {/* <RadioBox
                        list={category}
                        handleFilters={filters => handleFilters(filters, "category")}
                    /> */}
                {/* </Col> */}
            </Row>


            {/* Search  */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>

                <SearchFeature
                    refreshFunction={updateSearchTerms}
                />

            </div>


            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <div>
                    <Row gutter={[8, 8]}>

                        {renderCards}

                    </Row>


                </div>
            }
            <br /><br />

            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={onLoadMore}>Load More</button>
                </div>
            }


        </div>
    )
}

export default LandingPage
