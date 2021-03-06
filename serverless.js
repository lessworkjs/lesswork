module.exports = {
  service: "myApp",
  provider: {
    name: "aws",
    stage: "dev",
    profile: "lesswork",
    region: "us-west-2",
    timeout: 10,
    runtime: "nodejs8.10"
  },
  plugins: [
    "serverless-aws-documentation",
    "serverless-mocha-plugin",
    "serverless-dotenv-plugin",
    "serverless-offline"
  ],
  functions: "${file(./functions.js)}",
  custom: {
    stage: "${opt:stage, self:provider.stage}",
    region: "${opt:region, self:provider.region}",
    aws_rest_path: {
      "Fn::Join": [
        "", [
          "/restapis.",
          {
            "Ref": "ApiGatewayRestApi"
          },
          "/stages/${self:custom.stage}/exports/swagger"
        ]
      ]
    },
    gw_aws_url: {
      "Fn::Join": [
        "", [
          "https://",
          {
            "Ref": "ApiGatewayRestApi"
          },
          ".execute-api.${self:custom.region}.amazonaws.com/${self:custom.stage}"
        ]
      ]
    },
    documentation: {
      api: {
        info: {
          version: "0.0.1",
          title: "My App",
          description: "Description"
        },
        tags: [{
          name: "HelloWorld",
          description: "Hello World"
        }]
      }
    }
  }
};