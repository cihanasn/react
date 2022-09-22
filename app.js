import getData, { posts } from './my_module.js';




(async () => {
    await console.log("***** getData verisi geldi *****");
    await getData(1).then(data => console.log(data));
    await console.log("***** post verisi geldi *****");
    await posts(1).then(data => console.log(data));

})();



