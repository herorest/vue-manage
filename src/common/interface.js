var ife = null;
if(process.env.NODE_ENV == 'development'){
    ife = {
        getProblemTypeList:'/json/getProblemTypeList.json',
        getProblemPageList:'/json/getProblemPageList.json'
    };

}else{
    ife = {
        getProblemTypeList:'/json/getProblemTypeList.json',
        getProblemPageList:'/json/getProblemPageList.json'
    };
}
module.exports = ife;
