'use strict';
import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';
const serverRoute = process.env.REACT_APP_ROUTE;
class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksInfo: [],
        }
        // console.log(this.props.auth0.user);
    }
    componentDidMount = async () => {
        let result = await axios.get(`http://localhost:3001/books?email=${this.props.auth0.user.email}`);
        this.setState({
            booksInfo: result.data,
            rend: true,
        })
        console.log(this.state.booksInfo);
    }
    render() {
        return (
            <>
                {this.state.booksInfo.length !== 0 &&
                    <CardColumns>
                        {this.state.booksInfo.map((element, i) => {
                            return (<Card style={{ width: '18rem'}} key={i}>
                                <Card.Img variant="top" src={element.image} alt={element.name} style={{width:'15rem',height:'16rem', margin:'auto'}} />
                                <Card.Body>
                                    <Card.Title>{element.name}</Card.Title>
                                    <Card.Text style={{overflow:'auto',height:'5rem'}}>
                                        {element.description}
                                    </Card.Text>
                                    <Button variant="primary">Delete</Button>
                                </Card.Body>
                            </Card>)
                        })}
                    </CardColumns>
                }
            </>
        )
    }
}

export default withAuth0(BestBooks);



{/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="..." alt="First slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Second slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div> */}

              