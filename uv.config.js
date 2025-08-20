self.__uv$config = {
    prefix: '/science/',
    bare: 'https://c84x-bare-server.vercel.app/bare/'
    ,encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv.handler.js',
    bundle: 'uv.bundle.js',
    config: 'uv.config.js',
    sw: 'uv.sw.js',
};
