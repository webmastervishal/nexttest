const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './public/antd-custom.less'), 'utf8')
)

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
  exportTrailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/batches': { page: '/batches' },
      '/dashboard': { page: '/dashboard' },
      '/students': { page: '/students' },
    };

    //this is temporary batches data - actual data will come from the api
    batches = [{
      id: 5,
      name: 'Flamingo'
    }, {
      id: 6,
      name: 'Woodpecker'
    }, {
      id: 7,
      name: 'Robin'
    }];

    batches.forEach(batch => {
      paths[`/batch/${batch.id}`] = { page: '/batch/[id]', query: { id: batch.id } };
    });

    //this is temporary student data - actual data will come from the api
    students = [{
      id: 1,
      name: 'Vishal Shetty'
    }, {
      id: 2,
      name: 'Shahrukh'
    }, {
      id: 3,
      name: 'Rahul Kumar'
    }, {
      id: 4,
      name: 'Ruhan'
    }];

    students.forEach(student => {
      paths[`/student/${student.id}`] = { page: '/student/[id]', query: { id: student.id } };
    });

    return paths;
  }
})
