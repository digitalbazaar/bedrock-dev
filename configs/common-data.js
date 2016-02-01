var config = require('bedrock').config;

// defaults for identities
config.idp.defaults.identity = {
  '@context': config.constants.IDENTITY_CONTEXT_V1_URL,
  type: 'Identity',
  address: [],
  preferences: {
    type: 'IdentityPreferences'
  },
  sysPublic: [],
  sysResourceRole: [{
    sysRole: 'identity.registered',
    generateResource: 'id'
  }],
  sysStatus: 'active'
};
