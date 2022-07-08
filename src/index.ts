import app from "./app";

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('estas en el puerto',app.get('port'))
})