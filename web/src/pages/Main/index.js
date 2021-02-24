import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Carousel, Button, Card } from 'react-bootstrap/';

import api from '../../services/api';

import { ItemCarousel, Products, CardImage } from './styles';

export default class Main extends Component {
  state = {
    search: '',
    foods: [],
    pets: [],
    beverages: [],
    treats: [],
  };

  async componentDidMount() {
    api.get('/products/category/4?limit=15').then(response => {
      this.setState({ foods: response.data });
    });
  }

  handleSearchInputChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSearchSubmit = async e => {
    e.preventDefault();
  };

  render() {
    const { search, foods, pets, beverages, treats } = this.state;

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
      },
      desktop_2: {
        breakpoint: { max: 3000, min: 1800 },
        items: 6,
      },
      desktop_1: {
        breakpoint: { max: 1800, min: 1600 },
        items: 5,
      },
      desktop_0: {
        breakpoint: { max: 1600, min: 1200 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1200, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <React.Fragment>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://d2om08pcbtz1n1.cloudfront.net/media/banners/BANNER-SITE-drinks-3898x945.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://d2om08pcbtz1n1.cloudfront.net/media/banners/ElmaVerao_3898x945px.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>

        <Products>
          <h3>
            Alimentos{' '}
            <Link to="">
              <FaPlus /> Ver mais
            </Link>
          </h3>

          <ItemCarousel responsive={responsive}>
            {foods.map(item => (
              <Card key={item.product.name} style={{ width: '18rem' }}>
                <CardImage>
                  <Card.Img src={item.product.image} />
                </CardImage>
                <Card.Body>
                  <Card.Title>{item.product.name}</Card.Title>
                  <Card.Text>
                    R$
                    <span>
                      {new Intl.NumberFormat('pr-BR').format(
                        item.product.price
                      )}
                    </span>
                  </Card.Text>
                  <div>
                    <Button variant="outline-primary">
                      <FaPlus /> Adicionar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </ItemCarousel>
        </Products>

        <Products>
          <h3>
            Animais{' '}
            <Link to="">
              <FaPlus /> Ver mais
            </Link>
          </h3>

          <ItemCarousel responsive={responsive}>
            {foods.map(item => (
              <Card key={item.product.name} style={{ width: '18rem' }}>
                <CardImage>
                  <Card.Img src={item.product.image} />
                </CardImage>
                <Card.Body>
                  <Card.Title>{item.product.name}</Card.Title>
                  <Card.Text>
                    R$
                    <span>
                      {new Intl.NumberFormat('pr-BR').format(
                        item.product.price
                      )}
                    </span>
                  </Card.Text>
                  <div>
                    <Button variant="outline-primary">
                      <FaPlus /> Adicionar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </ItemCarousel>
        </Products>
      </React.Fragment>
    );
  }
}
