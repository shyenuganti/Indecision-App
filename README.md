# Indecision-App


--Some installation commands needed to be added here on the top :)

yarn global add babel-cli
yarn init
yarn add babel-preset-react babel-preset-env

Commands to run at cmd:
2 presets at command line:
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

1 preset at command line:
babel src/app.js --out-file=public/scripts/app.js --preset react --watch

No presets at coomand line:
babel src/app.js --out-file=public/scripts/app.js --watch
    .babelrc file included at app root with the presets defined if not defined at 
    command line