const { spawn, exec } = require("child_process");


const args = process.argv.slice(2);

if(args.length <= 0) {

    execution("npm run build", () => {
        console.log('In function')
        execution("pwd")
    })
    
}
else if(args.length > 0) {

    let flag = args[0];

}

/**
 * 
 * @param {string} cmd 
 * @param {Function} callback
 */
function execution(cmd, callback) {
    const move_to_build = exec(cmd);

    move_to_build.on('exit', code => {
        if(code === 0) {
            if(callback) {
                console.log('callback')
                callback()
            }
        }
    });
    
    move_to_build.stdout.on('data', chunk => process.stdout.write(chunk));
    
    move_to_build.on("error", e => console.log(e));
}