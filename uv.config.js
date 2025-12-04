self.__uv$config = {
    prefix: '/science/',
    bare: 'http://5.161.232.43:8080/'
    ,encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv.handler.js',
    bundle: 'uv.bundle.js',
    config: 'uv.config.js',
    sw: 'uv.sw.js',
};
