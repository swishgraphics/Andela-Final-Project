import uuid from 'uuid';

import requests from '../DumData/data';

class RequestController {
  // Get all requests
  static getAllRequests(req, res) {
    res.json(requests);
  }

  // Get todo br id
  static getRequestById(req, res) {
    // eslint-disable-next-line radix
    const id = parseInt(req.params.id);
    const request = requests.find(each => each.id === id);
    if (!request) {
      return res
        .status(400)
        .json({ message: `Request with id ${id} cannot be found` });
    }
    return res.json({ request });
  }

  // Post new request
  static postRequest(req, res) {
    const newRequests = {
      id: uuid.v4(),
      name: req.body.name,
      request: req.body.request,
      date: new Date(),
      status: 'Completed'
    };
    if (!newRequests.name || !newRequests.request) {
      return res.json({ message: 'please input a valid name or request' });
    }
    requests.push(newRequests);

    return res.json({ requests });
  }

  // Update requests
  static updateRequest(req, res) {
    // eslint-disable-next-line radix
    const id = parseInt(req.params.id);
    const updaterequest = requests.find(each => each.id === id);
    if (updaterequest) {
      const newRequest = req.body;
      requests.forEach(request => {
        if (request.id === id) {
          request.name = newRequest.name ? newRequest.name : request.name;
          request.date = newRequest.date ? newRequest.date : request.date;

          return res.json({ message: 'update successful', requests });
        }
      });
    }
    return res
      .status(400)
      .json({ message: `Request with id ${id} cannot be found` });
  }

  // Delete request
  static deleteRequest(req, res) {
    // eslint-disable-next-line radix
    const id = parseInt(req.params.id);
    const newRequests = requests.find(each => each.id === id);
    if (newRequests) {
      return res.json({
        message: 'Request deleted',
        // eslint-disable-next-line comma-dangle
        requests: requests.filter(request => request.id !== id)
      });
    }
    return res
      .status(404)
      .json({ message: `Request with id ${id} cannot be found` });
  }
}

export default RequestController;
