import { request } from './request';


const BASE_URL = 'http://localhost:3000' 
const CLIENT_ID = "2020122653946739963336" 
const isDevice = process.env.NODE_ENV !== 'development' 
const userId = '216610000000446291765' 
const authScopes = ['auth_user']


const getTokenFromJSAPI = async () => {
  return new Promise((resolve, reject) => {
    my.getAuthCode({
      scopes: authScopes,
      success: (result) => {
        return resolve(result.authCode);
      },
      fail: (result) => {
        return reject(result);
      }
    });
  });
};

const getTokenFromTestEnv = async () => {
  const method = 'POST';
  const headers = {
    'Content-Type': 'application/json',
    'client-id': CLIENT_ID,
    'request-time': '2021-02-22T17:49:26.913+08:00',
    signature: 'algorithm=RSA256, keyVersion=1, signature=testing_signatur'
  };
  const url = 'https://vodapay-gateway.sandbox.vfs.africa/v2/authorizations/applyAuthCode';
  const data = {
    clientId: CLIENT_ID,
    userId: userId,
    scopes: authScopes.join()
  };
  const response = await request(url, headers, data, method);
  
  return response.data.authCode;
};


export const getAuthCode = async () => {
  if (isDevice) {
    return getTokenFromJSAPI();
  }
  return getTokenFromTestEnv()

};

