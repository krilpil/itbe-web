import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://localhost:5500/graphql",
    documents: "src/**/*.ts",
    generates: {
        "./src/shared/model/": {
            preset: "client",
            plugins: []
        },
        "./graphql.schema.json": {
            plugins: [
                "typescript",
                "typescript-operations",
                // "typescript-graphql-request",
                "introspection"
            ]
        }
    }
};

export default config;
