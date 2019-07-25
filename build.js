const builder = require('electron-builder');
const Platform = builder.Platform;

const config = {
    win: {
        target: [
            {
                target: 'nsis',
                arch: ['x64', 'ia32']

            }
        ]
    }
};

builder
    .build({
        targets: Platform.WINDOWS.createTarget(),
        config
    })
    .then(m => {
        console.log(m);
    })
    .catch(e => {
        console.error(e);
    });
