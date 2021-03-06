import colors from 'vuetify/es5/util/colors';
import IconArtifact from '~/components/icons/IconArtifact.vue';

export default {
  icons: {
    values: {
      artifact: {
        component: IconArtifact,
      },
    },
  },
  theme: {
    light: true,
    themes: {
      light: {
        'soya-bean': '#655a4b',
        peat: '#716a56',
        'gray-nickel': '#bcbbb8',
        armadillo: '#423f35',
        primary: '#133a1b',
        accent: '#e27d5f',
        secondary: '#b7bf96',
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
};
