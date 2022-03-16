import croct from '@croct/plug';

type CroctPlug = {
    appId: string,
    debug?: boolean,
}

const configPlugCroct: CroctPlug = {
    appId: '00000000-0000-0000-0000-000000000000',
    debug: true,
};

croct.plug(configPlugCroct);

const setPersona = async (typePersona: string): Promise<void> => {
    await croct.user.edit()
        .set('custom.persona', typePersona)//marketer, growth-hacker, developer
        .save();
};

export default setPersona;