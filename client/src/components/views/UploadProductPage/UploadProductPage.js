import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const continents = [
    
    { key: 1, value: "Abia" },
    { key: 2, value: "Adamawa" },
    { key: 3, value: "Akwa-ibom" },
    { key: 4, value: "Anambra" },
    { key: 5, value: "Bauchi" },
    { key: 6, value: "Bayelsa" },
    { key: 7, value: "Benue" },
    { key: 8, value: "Borno" },
    { key: 9, value: "Cross-River" },
    { key: 10, value: "Delta" },
    { key: 11, value: "Ebonyi" },
    { key: 12, value: "Edo" },
    { key: 13, value: "Ekiti" },
    { key: 14, value: "Enugu" },
    { key: 15, value: "Gombe" },
    { key: 16, value: "Imo" },
    { key: 17, value: "Jigawa" },
    { key: 18, value: "Kaduna" },
    { key: 19, value: "Kano" },
    { key: 20, value: "Kastina" },
    { key: 21, value: "Kebbi" },
    { key: 22, value: "Kogi" },
    { key: 23, value: "Kwara" },
    { key: 24, value: "Lagos" },
    { key: 25, value: "Nasarawa" },
    { key: 26, value: "Niger" },
    { key: 27, value: "Ogun" },
    { key: 28, value: "Ondo" },
    { key: 29, value: "Osun" },
    { key: 30, value: "Oyo" },
    { key: 31, value: "Plateau" },
    { key: 32, value: "Rivers" },
    { key: 33, value: "Sokoto" },
    { key: 34, value: "Taraba" },
    { key: 35, value: "Yobe" },
    { key: 36, value: "Zamfara" },
    { key: 37, value: "Abuja" },
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [Title2Value, setTitle2Value] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    // const [PriceValue, setPriceValue] = useState("")
    const [ContinentValue, setContinentValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }
    const onTitle2Change = (event) => {
        setTitle2Value(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    // const onPriceChange = (event) => {
    //     setPriceValue(event.currentTarget.value)
    // }

    const onContinentsSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !Title2Value || !DescriptionValue ||
            !ContinentValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            title2: Title2Value,
            description: DescriptionValue,
            // category: PriceValue,
            images: Images,
            state: ContinentValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('post Successfully Uploaded')
                    props.history.push('/explore')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div className="" style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Tour Post</Title>
            </div>


            <Form onSubmit={onSubmit} >

                DropZone (click to upload pictures)
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Category</label>
                <Input
                    onChange={onTitle2Change}
                    value={Title2Value}
                    placeholder="place/festival/food/history/..."
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                {/* <label>Price</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    placeholder="place/festival/food/history/..."
                />
                <br /><br /> */}
                <select onChange={onContinentsSelectChange} value={ContinentValue}>
                    {continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage
