import {Link} from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap';
import products from '../product';

export default function ProductScreen({match}){
    const product = products.find((p) => p._id == match.params.id)
    return(
        <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        <Row>
            <Col md={6}>
            <Image src={product.image} alt={product.name}  fluid/>
            </Col>
            <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                </ListGroup></Col>
        </Row>
        </div>
    )
}