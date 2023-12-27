async function f()
{
    let pavi = new Promise((resolve,reject) =>
    {
        setTimeout(() => resolve("Happy New Year 2024"),5000)
    });
    let result = await pavi;
//     alert(result);
// }
f();