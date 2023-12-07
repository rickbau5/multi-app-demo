'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

import { useAuth } from '@/context/AuthUserContext'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = (event: React.FormEvent) => {
    setError(null)
    signInWithEmailAndPassword(email, password)
      .then((authUser: any) => {
        router.push('/portal');
      })
      .catch((error: any) => {
        setError(error.message)
      });
    event.preventDefault();
    return false;
  };

  // TODO: add register:
  /*
    <FormGroup row>
      <Col>
        No account? <Link href="/sign_up">Create one</Link>
      </Col>
    </FormGroup>
  */
  return (
    <Container className="text-center" style={{ padding: '40px 0px' }}>
      <Row>
        <Col>
          <h2>Login</h2>
        </Col>
      </Row>
      <Row style={{ maxWidth: '400px', margin: 'auto' }}>
        <Col>
          <Form onSubmit={onSubmit}>
            {error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              <Label for="loginEmail" sm={4}>Email</Label>
              <Col sm={8}>
                <Input
                  className='text-black'
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="loginEmail"
                  placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="loginPassword" sm={4}>Password</Label>
              <Col sm={8}>
                <Input
                  className='text-black'
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="loginPassword"
                  placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button>Login</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}