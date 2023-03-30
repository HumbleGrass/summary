<!-- 国密 SM2 SM3 SM4 请求数据加密 使用sm-crypto加密解密-->

前端随机生成 SM2 公钥: publicKey; 私钥: privateKey

调用接口 /getSmBolt 把随机生成的公钥 publicKey 保存在后端，后端返回 SM4 的 bolt，iV 保存在前端; 再调用其他接口 前端使用 sm4.encrypt(data, key, { mode: mode, iv, padding })加密保存数据, 使用 SM3 加密数据生成 Hash 数据 sm3(data)用于验签，后端使用 SM4 和 SM3 解密后数据是否相等，相等则返回 SM4 加密数据，前端用 sm4.decrypt(encrypt, key, { mode: mode, iv, padding })解密

```javascript
// 国密 SM2 SM3 SM4 请求数据加密
const { sm2, sm3, sm4 } = require('sm-crypto');
const keypair = sm2.generateKeyPairHex();
const cipherMode = 1; // 1 - C1C3C2，0 - C1C2C3，默认为1
const padding = 'pkcs#5';
const mode = 'cbc';

// 随机生成SM2 公钥 私钥
export const getSM2key = () => {
  return {
    publicKey: keypair.publicKey,
    privateKey: keypair.privateKey,
  };
};

// 使用公钥 SM2数据加密
export const encryptSM2 = (data, publicKey) => {
  return sm2.doEncrypt(data, publicKey, cipherMode);
};

// 使用私钥 SM2数据解密
export const decryptSM2 = (encrypt, privateKey) => {
  return sm2.doDecrypt(encrypt, privateKey, cipherMode);
};

// 使用SM3加密生成Hash数据
export const hashDataSM3 = (data) => {
  return sm3(data);
};

// 使用SM4数据加密
export const encryptSM4 = (data, key, iv) => {
  return sm4.encrypt(data, key, { mode: mode, iv, padding });
};

// 使用SM4数据解密
export const decryptSM4 = (encrypt, key, iv) => {
  return sm4.decrypt(encrypt, key, { mode: mode, iv, padding });
};
```
