function pleaseHelp(){

}



function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return pleaseHelp;
}

function returnsAnAnonymousFunction() {
    return function() {};
}
