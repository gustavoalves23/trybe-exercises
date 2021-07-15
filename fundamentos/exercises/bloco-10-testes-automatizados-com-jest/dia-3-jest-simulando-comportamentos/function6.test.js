const fetch = require('node-fetch');
const functions = require('./functions3')
const { dogPictureRequest } = functions;

jest.mock('node-fetch');

describe('when calling dogPictureRequest', () => {

  it ('shoud return a dog picture and an error', async () => {
    expect.assertions(2);

fetch.mockImplementationOnce( async () => {
  return {
    json: async () => {
      return {
        status: 'success',
      }
    }
  }
})

fetch.mockImplementationOnce( async () => {
  return {
    json: async () => {
      return {
        status: 'error',
      }
    }
  }
})
    const functionReturnSuccess = await dogPictureRequest();
    expect(functionReturnSuccess).toEqual({
      status: 'success',
    }) 
    const functionReturnError = await dogPictureRequest();
    expect(functionReturnError).toEqual({
      status: 'error',
    }) 

   
  })
})

