import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Button,
	Alert,
	Breadcrumb,
	Card,
	FormGroup,
	Form,
	FormLabel,
	FormControl,
	FormText,
	Row,
	Col,
	Stack,
	Badge,
	Navbar,
	Container,
	Nav,
	NavDropdown,
	ListGroup,
} from 'react-bootstrap';

function App() {
	return (
		<div className='text-white '>
			<header className='App-header'>
				<Navbar bg='light' expand='lg' sticky='top'>
					<Container fluid>
						<Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
						<Navbar.Toggle aria-controls='navbarScroll' />
						<Navbar.Collapse id='navbarScroll'>
							<Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
								<Nav.Link href='#action1'>Home</Nav.Link>
								<Nav.Link href='#action2'>Link</Nav.Link>
								<NavDropdown title='Link' id='navbarScrollingDropdown'>
									<NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
									<NavDropdown.Item href='#action4'>Another action</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action5'>Something else here</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link href='#' disabled>
									Link
								</Nav.Link>
							</Nav>
							<Form className='d-flex'>
								<Form.Control
									type='search'
									placeholder='Search'
									className='me-2'
									aria-label='Search'
								/>
								<Button variant='outline-success'>Search</Button>
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Form className='text-white m-4'>
					<Row>
						<Col md>
							<FormGroup controlId='formEmail'>
								<FormLabel>Email Address</FormLabel>
								<FormControl type='email' placeholder='email@email.com' />
								<FormText className='text-muted'> Contact me </FormText>
							</FormGroup>
						</Col>
						<Col md>
							<FormGroup controlId='formPassword'>
								<FormLabel>Password</FormLabel>
								<FormControl type='password' />
							</FormGroup>
						</Col>
					</Row>
					<Button variant='warning' type='submit'>
						Send
					</Button>
				</Form>
				<Card className='mb-3 p-0 text-bg-info'>
					<Card.Img
						src='https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg'
						alt='img'
					/>
					<Card.Body>
						<Card.Header as='h5'>Featured</Card.Header>
						<Card.Title>Card</Card.Title>
						<Card.Text>Card active A3o_Paulo_Zoo bootstrap</Card.Text>{' '}
						<blockquote className='blockquote mb-0'>
							<ListGroup variant='flush'>
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
								<ListGroup.Item hidden>Vestibulum at eros</ListGroup.Item>
							</ListGroup>
							<Card.Body>
								<Card.Link href='#'>Card Link</Card.Link>
								<Card.Link href='#'>Another Link</Card.Link>
							</Card.Body>
							<footer className='blockquote-footer'>
								Someone famous in <cite title='Source Title'>Source Title</cite>
							</footer>
						</blockquote>
						<Button>button</Button>
					</Card.Body>
				</Card>
				<Card className='text-center p-0'>
					<Card.Img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Home_made_sour_dough_bread.jpg/750px-Home_made_sour_dough_bread.jpg'
						alt='images'
					/>
					<Card.ImgOverlay className='flex-column d-inline-flex flex-wrap'>
						<Card.Header>Featured</Card.Header>
						<Card.Body>
							<Card.Title>Special title treatment</Card.Title>
							<Card.Text>
								With supporting text below as a natural lead-in to additional content.
							</Card.Text>
							<Button variant='primary'>Go somewhere</Button>
						</Card.Body>
						<Card.Footer className='text-muted text-bg-danger w-100 '>2 days ago</Card.Footer>
					</Card.ImgOverlay>
				</Card>
				<Breadcrumb style={{ cursor: 'grab' }}>
					<Breadcrumb.Item>test</Breadcrumb.Item>
					<Breadcrumb.Item>test 1</Breadcrumb.Item>
					<Breadcrumb.Item active>test 2</Breadcrumb.Item>
				</Breadcrumb>
				<div className='badge bg-primary text-wrap' style={{ width: '6rem' }}>
					This text should wrap.
				</div>
				<div>
					<h1 className='text-decoration-underline text-white text-uppercase'>
						Example heading{' adidas'}
						<Badge bg='secondary' as='Button'>
							New
						</Badge>
					</h1>
				</div>
				<Alert variant='success'>This is a button</Alert>
				<p className='lh-sm'>
					This is a long paragraph written to show how the line-height of an element is affected by
					our utilities. Classes are applied to the element itself or sometimes the parent element.
					These classes can be customized as needed with our utility API.
				</p>
				<Stack direction='horizontal' gap={2} className='justify-content-center'>
					<Button as='a' variant='primary'>
						Button as link
					</Button>
					<Button as='a' variant='success'>
						Button as link
					</Button>
				</Stack>
			</header>
		</div>
	);
}

export default App;
