const MonacoEditorPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new MonacoEditorPlugin({
        languages: [ 'javascript', 'css', 'scss', 'html' ],
      })
    ],
  },
};
