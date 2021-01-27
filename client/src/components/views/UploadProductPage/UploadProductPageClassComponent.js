import React, { Component } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
import FileUpload from '../../utils/FileUpload';

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

export class UploadProductPage extends Component {

    state = {
        title: '',
        title2: '',
        description: '',
        price: '',
        continents: 1,
        images: [],
        
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.currentTarget.value })
    }
    handleChangeTitle2 = (event) => {
        this.setState({ title2: event.currentTarget.value })
    }

    // handleChangePrice = (event) => {
    //     this.setState({ price: event.currentTarget.value })
    // }

    handleChangeDecsription = (event) => {
        // console.log(event.currentTarget.value)
        this.setState({ description: event.currentTarget.value })
    }

    handleChangeContinents = (event) => {
        this.setState({ state: event.currentTarget.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('Please Log in First')
        }

        if (!this.state.title || !this.state.title2 || !this.state.description ||
            !this.state.continents || !this.state.images
            || !this.state.price) {
            return alert('Please first fill all the fields')
        }

        const variables = {
            writer: this.props.user.userData._id,
            title: this.state.title,
            title2: this.state.title2,
            price: this.state.price,
            description: this.state.description,
            images: this.state.images,
            continents: this.state.continents
            
        }

        axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('post Uploaded Successfully')
                    setTimeout(() => {
                        this.props.history.push('/explore')
                    }, 1000);
                } else {
                    alert('Failed to upload video')
                }
            })
    }

    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }


    render() {
        return (
            <div className="productp" style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} > Upload Tour Post</Title>
            </div>

            <Form onSubmit={this.onSubmit}>
               
               <FileUpload refreshFunction={this.updateFiles} />

                <br /><br />
                <label>Title</label>
                <Input
                    onChange={this.handleChangeTitle}
                    value={this.state.title}
                />
                <br /><br />
                <label>Catergory</label>
                <Input
                    onChange={this.handleChangeTitle}
                    value={this.state.title2}
                    placeholder="place/festival/food/history/..."
                />
                <br /><br />
                <label>Description</label>
                <TextArea
                    onChange={this.handleChangeDecsription}
                    value={this.state.description}
                />
                <br /><br />
                {/* <label>Category</label>
                <Input
                    type="number"
                    onChange={this.handleChangePrice}
                    value={this.state.price}
                    placeholder="place/festival/food/history/..."
                />
                <br /><br /> */}
                <select onChange={this.handleChangeContinents}>
                    {continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />

                <Button type="primary" size="large" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
        )
    }
}

export default UploadProductPage
