import chai from 'chai';

import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

//testing to get all requests
describe('GET allRequests', () => {
  it('should get all requests', done => {
    chai
      .request(app)
      .get(`/api/requests`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});

//testing to get single request by id
describe('GET:id getSingleRequest', () => {
  it('should get single request by id', done => {
    const id = 1;
    chai
      .request(app)
      .get(`/api/requests/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

//testing to get single request by id
describe('GET:id getSingleRequest', () => {
  it('should should give an error if id is not found', done => {
    const id = 6;
    chai
      .request(app)
      .get(`/api/requests/${id}`)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('message');
        done();
      });
  });
});

//testing to post a new request
describe('POST addRequest', () => {
  it('should add a new request', done => {
    chai
      .request(app)
      .post(`/api/requests`)
      .send({
        id: '939df54a-060b-4214-8ebb-e5817f1cae8f',
        name: 'Romelu Lukaku',
        request: 'Break Pad',
        date: new Date(),
        status: 'Completed'
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

//testing to update a request
describe('PUT:id updateRequest', () => {
  it('should check for update', done => {
    const id = 3;
    chai
      .request(app)
      .put(`/api/requests/${id}`)
      .send({
        name: 'madison wells',
        email: 'madwells@gmail.com',
        date: '02-07-2019'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
