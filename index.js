(function(){
    const getIDElements = (query) => {
        let ele = null;
        if (typeof query === 'string') {
            if (query.indexOf('#') > -1) {
                ele = document.querySelector(query);
                return ele;
            } 
        }
        return ele;
    }
    const getClassElements = (query) => {
        let ele = null;
        if (typeof query === 'string') {
            if (query.indexOf('.') > -1) {
                ele = document.querySelectorAll(query);
                return ele;
            } 
        }
        return ele;
    }
    //将nodelist转换成数组
    const convertToArray = (eles) => {
        let array = [];
        array = Array.prototype.slice.call(eles, 0);
        return array;
    }
    const boxObj = getIDElements('#box');
    
}())