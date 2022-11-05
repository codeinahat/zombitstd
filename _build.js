const { createReadStream, createWriteStream } = require('fs');
const { spawn } = require('child_process');

console.log("build >> removing ./dis");
let clean_dis = spawn("rm", ["./dis", "-r", "-f", "-v"])

clean_dis.stdout.on('data', chunk => process.stdout.write(chunk));

clean_dis.on('exit', code => {
    if(code === 0) {
        console.log("build >> running tsc");
        let tsc_build = spawn("npm", ["start"]);
        tsc_build.on('exit', code => {
            if(code === 0) 
                copySettingsAndLegal();
        })
    }
})

function copySettingsAndLegal() {
    const readPackageJson = createReadStream("./package.json");
    const disPackageJson = createWriteStream("./dis/package.json");
    
    disPackageJson.on("finish", _ => console.log("build >> copied package.json"))
    
    readPackageJson.pipe(disPackageJson);
    
    
    const readLicense = createReadStream("./LICENSE");
    const disLisence = createWriteStream("./dis/LICENSE");
    
    
    disLisence.on('finish', _ => console.log("build >> copied LICENSE"))
    
    readLicense.pipe(disLisence);
}
