/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'water': {
          light: '#D3F1F9',
          default: '#A8E4F4',
          dark: '#62D6F0',
          darker: '#529DE0'
        },

        'fire': {
          light: '#FFCFBC',
          default: '#FFBFA3',
          dark: '#FF9669',
          darker: '#E05B52'
        },

        'ground': {
          light: '#F4F9D3',
          default: '#F2F4A8',
          dark: '#E5F062',
          darker: '#E0D252'
        },

        'psy': {
          light: '#F6D3F9',
          default: '#F2A8F4',
          dark: '#ED62F0',
          darker: '#E052D2'
        },

        'bug': {
          light: '#DDF9D3',
          default: '#CEF4A8',
          dark: '#A0F062',
          darker: '#90E052'
        },

        'normal': {
          light: '#F9F5D3',
          default: '#E9F4A8',
          dark: '#DEE688',
          darker: '#E3D192'
        },

        'fairy': {
          light: '#F9D3EC',
          default: '#EEA8F4',
          dark: '#F062D9',
          darker: '#E052B8'
        },

        'rock': {
          light: '#EAEAEA',
          default: '#B4B3B',
          dark: '#868180',
          darker: '#5B5B5B'
        },

        'poison': {
          light: '#EEBCFF',
          default: '#EDA3FF',
          dark: '#CA58FF',
          darker: '#A252E0'
        },

        'electric': {
          light: '#F8F9D3',
          default: '#F2F4A8',
          dark: '#F0EA62',
          darker: '#DDE052'
        },

        'fighting': {
          light: '#FFBCC4',
          default: '#FFA3B4',
          dark: '#FF5862',
          darker: '#E05252'
        },

        'ghost': {
          light: '#D9BCFF',
          default: '#EDA3FF',
          dark: '#B658FF',
          darker: '#BB52E0'
        },

        'ice': {
          light: '#D3F2F9',
          default: '#A8E4F4',
          dark: '#62D6F0',
          darker: '#52D7E0'
        },

        'dragon': {
          light: '#C9BCFF',
          default: '#DCA3FF',
          dark: '#B658FF',
          darker: '#9052E0'
        },

        'dark': {
          light: '#BCC7FF',
          default: '#A3B2FF',
          dark: '#608AC8',
          darker: '#5260E0'
        },

        'steel': {
          light: '#C6C6C6',
          default: '#AAB0B2',
          dark: '#9B9B9B',
          darker: '#74778A'
        },

        'grass': {
          light: '#BDFFBC',
          default: '#A3FFA7',
          dark: '#58FF69',
          darker: '#66E052'
        },

        'fly': {
          light: '#F9E9E9',
          default: '#FFD8C7',
          dark: '#FDB89A',
          darker: '#E08E52'
        },
        
      }
    },
  },
  plugins: [],
}