function detectType(val: number | string) {
  if (typeof val === 'number') {
    console.log('number');
  } else {
    console.log('string');
  }
}

function provideId(id: string | null){
    if(!id){
        return 'No ID provided'
    }
    id.toUpperCase()
}

function pritAll(strs: string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const str of strs){
                console.log(str)
            }
        }
        else{
            console.log(strs)
        }
    }
}
//In the above example, the printAll function accepts a string, an array of strings, or null. But one case is missing where the string can be a empty string. To handle this case, we can use the following code:
function pritAll2(strs: string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const str of strs){
                console.log(str)
            }
        }
        else if(typeof strs === "string"){
            console.log(strs)
        }
        else{
            console.log('No data')
        }
    }
}