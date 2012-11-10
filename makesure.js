 /*
    Simple JQuery plugin for HTML/CSS test unit
    Mariz Melo MM 2012
*/
(function($){
    $.fn.makesure = function(){
        var $makesure = this.prototype;
        var $makesure = {
            model : {
                selector : $(this).selector
            },
            actions : {
                //check if element exists
                exist : function(element){
                    if($(element).length > 0){
                        return true;
                    }else{
                        return false;
                    }
                },
                //check if element have children element
                have : function(number,children){
                    //check if caller element exists
                    if(this.exist(this)){

                    }//if
                } 
            },
            delivery : {

            }
        }                
    };
})(jQuery); 